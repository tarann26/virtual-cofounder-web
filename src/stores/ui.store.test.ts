import { describe, it, expect, beforeEach } from 'vitest'
import { useUIStore } from './ui.store'

describe('useUIStore', () => {
  beforeEach(() => {
    useUIStore.setState({
      sidebarCollapsed: false,
      activePanel: null,
      commandPaletteOpen: false,
    })
  })

  it('toggles sidebar', () => {
    expect(useUIStore.getState().sidebarCollapsed).toBe(false)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(true)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(false)
  })

  it('sets active panel', () => {
    expect(useUIStore.getState().activePanel).toBe(null)
    useUIStore.getState().setActivePanel('approvals')
    expect(useUIStore.getState().activePanel).toBe('approvals')
  })

  it('toggles command palette', () => {
    expect(useUIStore.getState().commandPaletteOpen).toBe(false)
    useUIStore.getState().setCommandPaletteOpen(true)
    expect(useUIStore.getState().commandPaletteOpen).toBe(true)
  })
})
