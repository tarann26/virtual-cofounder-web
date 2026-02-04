import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type PanelType = 'overview' | 'approvals' | 'artifacts' | null

interface UIState {
  sidebarCollapsed: boolean
  activePanel: PanelType
  commandPaletteOpen: boolean
  toggleSidebar: () => void
  setActivePanel: (panel: PanelType) => void
  setCommandPaletteOpen: (open: boolean) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      activePanel: null,
      commandPaletteOpen: false,
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setActivePanel: (panel) => set({ activePanel: panel }),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
)
