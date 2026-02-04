import { describe, it, expect } from 'vitest'
import { detectMode } from './mode-detection'

describe('detectMode', () => {
  it('returns chat mode for discovery phase with few artifacts', () => {
    const project = { current_phase: 'discovery', artifacts: [] }
    expect(detectMode(project)).toBe('chat')
  })

  it('returns chat mode for discovery phase with up to 4 artifacts', () => {
    const project = { current_phase: 'discovery', artifacts: [1, 2, 3, 4] }
    expect(detectMode(project)).toBe('chat')
  })

  it('returns hybrid mode for branding phase', () => {
    const project = { current_phase: 'branding', artifacts: [1, 2, 3, 4, 5] }
    expect(detectMode(project)).toBe('hybrid')
  })

  it('returns hybrid mode for validation phase', () => {
    const project = { current_phase: 'validation', artifacts: [1, 2, 3, 4, 5, 6] }
    expect(detectMode(project)).toBe('hybrid')
  })

  it('returns hybrid mode when artifacts between 5 and 19', () => {
    const project = { current_phase: 'discovery', artifacts: Array(10).fill(1) }
    expect(detectMode(project)).toBe('hybrid')
  })

  it('returns dashboard mode for development phase', () => {
    const project = { current_phase: 'development', artifacts: Array(20).fill(1) }
    expect(detectMode(project)).toBe('dashboard')
  })

  it('returns dashboard mode for marketing phase', () => {
    const project = { current_phase: 'marketing', artifacts: Array(25).fill(1) }
    expect(detectMode(project)).toBe('dashboard')
  })

  it('returns dashboard mode for fundraising phase', () => {
    const project = { current_phase: 'fundraising', artifacts: Array(30).fill(1) }
    expect(detectMode(project)).toBe('dashboard')
  })

  it('returns dashboard mode when 20+ artifacts regardless of phase', () => {
    const project = { current_phase: 'branding', artifacts: Array(25).fill(1) }
    expect(detectMode(project)).toBe('dashboard')
  })
})
