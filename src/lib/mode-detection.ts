export type DashboardMode = 'chat' | 'hybrid' | 'dashboard'

export type PhaseType =
  | 'discovery'
  | 'branding'
  | 'validation'
  | 'development'
  | 'marketing'
  | 'fundraising'

interface ProjectForMode {
  current_phase: string
  artifacts: unknown[]
}

const DASHBOARD_PHASES: PhaseType[] = ['development', 'marketing', 'fundraising']
const HYBRID_PHASES: PhaseType[] = ['branding', 'validation']

export function detectMode(project: ProjectForMode): DashboardMode {
  const { current_phase, artifacts } = project
  const artifactCount = artifacts?.length ?? 0

  // 20+ artifacts always triggers dashboard
  if (artifactCount >= 20) {
    return 'dashboard'
  }

  // Dashboard phases with sufficient artifacts
  if (DASHBOARD_PHASES.includes(current_phase as PhaseType) && artifactCount >= 20) {
    return 'dashboard'
  }

  // Hybrid for mid-phases or 5-19 artifacts
  if (HYBRID_PHASES.includes(current_phase as PhaseType) || artifactCount >= 5) {
    return 'hybrid'
  }

  // Default to chat
  return 'chat'
}
