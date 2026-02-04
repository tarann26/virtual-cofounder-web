import { useMemo } from 'react'
import { detectMode, type DashboardMode } from '@/lib/mode-detection'

interface Project {
  current_phase: string
  artifacts: unknown[]
}

export function useAdaptiveMode(project: Project | null | undefined): DashboardMode {
  return useMemo(() => {
    if (!project) return 'chat'
    return detectMode(project)
  }, [project])
}
