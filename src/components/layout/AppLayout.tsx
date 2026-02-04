import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { useUIStore } from '@/stores/ui.store'
import { type DashboardMode } from '@/lib/mode-detection'

const gridTemplates: Record<DashboardMode, string> = {
  chat: '1fr',
  hybrid: '60px 1fr',
  dashboard: '60px 1fr 320px',
}

interface AppLayoutProps {
  children: ReactNode
  panel?: ReactNode
  mode?: DashboardMode
  projectName?: string
  currentPhase?: string
}

export function AppLayout({
  children,
  panel,
  mode = 'chat',
  projectName,
  currentPhase,
}: AppLayoutProps) {
  const { sidebarCollapsed } = useUIStore()

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header projectName={projectName} currentPhase={currentPhase} />

      <motion.main
        className="flex-1 grid overflow-hidden"
        animate={{
          gridTemplateColumns: gridTemplates[mode],
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <AnimatePresence>
          {mode !== 'chat' && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sidebar currentPhase={currentPhase} collapsed={sidebarCollapsed} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="overflow-hidden flex flex-col">
          {children}
        </div>

        <AnimatePresence>
          {mode === 'dashboard' && panel && (
            <motion.aside
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 320 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="border-l bg-muted/10 overflow-y-auto"
            >
              {panel}
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  )
}
