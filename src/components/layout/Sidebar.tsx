import { Link, useParams } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/stores/ui.store'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  MessageSquare,
  FileText,
  CheckCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Palette,
  Rocket,
  Code,
  Megaphone,
  TrendingUp,
} from 'lucide-react'

const PHASE_ICONS = {
  discovery: Lightbulb,
  branding: Palette,
  validation: Rocket,
  development: Code,
  marketing: Megaphone,
  fundraising: TrendingUp,
}

interface SidebarProps {
  currentPhase?: string
  collapsed?: boolean
}

export function Sidebar({ currentPhase = 'discovery', collapsed = false }: SidebarProps) {
  const { projectId } = useParams()
  const { activePanel, setActivePanel, toggleSidebar } = useUIStore()

  const navItems = [
    { id: 'chat', icon: MessageSquare, label: 'Chat', panel: null },
    { id: 'artifacts', icon: FileText, label: 'Artifacts', panel: 'artifacts' as const },
    { id: 'approvals', icon: CheckCircle, label: 'Approvals', panel: 'approvals' as const },
  ]

  const PhaseIcon = PHASE_ICONS[currentPhase as keyof typeof PHASE_ICONS] || Lightbulb

  return (
    <TooltipProvider>
      <aside
        className={cn(
          'h-full bg-muted/30 border-r flex flex-col transition-all duration-300',
          collapsed ? 'w-[60px]' : 'w-[200px]'
        )}
      >
        {/* Phase indicator */}
        <div className="p-3 border-b">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={cn(
                'flex items-center gap-2 p-2 rounded-lg bg-primary/10',
                collapsed && 'justify-center'
              )}>
                <PhaseIcon className="h-5 w-5 text-primary" />
                {!collapsed && (
                  <span className="text-sm font-medium capitalize">{currentPhase}</span>
                )}
              </div>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                <p className="capitalize">{currentPhase} Phase</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={activePanel === item.panel ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start',
                    collapsed && 'justify-center px-2'
                  )}
                  onClick={() => setActivePanel(item.panel)}
                >
                  <item.icon className="h-4 w-4" />
                  {!collapsed && <span className="ml-2">{item.label}</span>}
                </Button>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>

        {/* Settings & collapse */}
        <div className="p-2 border-t space-y-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  collapsed && 'justify-center px-2'
                )}
                asChild
              >
                <Link to={`/projects/${projectId}/settings`}>
                  <Settings className="h-4 w-4" />
                  {!collapsed && <span className="ml-2">Settings</span>}
                </Link>
              </Button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            )}
          </Tooltip>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={toggleSidebar}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  )
}
