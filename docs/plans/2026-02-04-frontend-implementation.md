# Frontend Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the Virtual Co-founder React SPA with adaptive chat-first interface.

**Architecture:** React + Vite SPA with feature-based folder structure. React Query for server state, Zustand for UI state. Adaptive layout that transitions between chat/hybrid/dashboard modes based on project complexity.

**Tech Stack:** React 18, Vite 5, TypeScript 5, React Router 6, TanStack React Query 5, Zustand 4, Tailwind CSS 3, shadcn/ui, Framer Motion 10, Supabase

---

## Phase 1: Foundation

### Task 1: Initialize Vite + React + TypeScript Project

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/vite-env.d.ts`

**Step 1: Create project with Vite**

Run:
```bash
cd /Users/taran/Desktop/virtual-cofounder-web
npm create vite@latest . -- --template react-ts
```

Select: `y` to overwrite (only overwrites src and config files)

**Step 2: Verify project structure created**

Run:
```bash
ls -la src/
```

Expected: `main.tsx`, `App.tsx`, `App.css`, `index.css`, `vite-env.d.ts`

**Step 3: Install dependencies**

Run:
```bash
npm install
```

Expected: `node_modules` created, no errors

**Step 4: Verify dev server starts**

Run:
```bash
npm run dev
```

Expected: Server starts at `http://localhost:5173`

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: initialize Vite + React + TypeScript project"
```

---

### Task 2: Configure Tailwind CSS

**Files:**
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Modify: `src/index.css`

**Step 1: Install Tailwind and dependencies**

Run:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --ts
```

Expected: `tailwind.config.ts` and `postcss.config.js` created

**Step 2: Configure Tailwind content paths**

Replace `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config
```

**Step 3: Add Tailwind directives and CSS variables**

Replace `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Step 4: Test Tailwind works**

Replace `src/App.tsx`:

```tsx
function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <h1 className="text-4xl font-bold text-primary">
        Virtual Co-founder
      </h1>
    </div>
  )
}

export default App
```

**Step 5: Verify Tailwind styling applies**

Run:
```bash
npm run dev
```

Expected: Blue "Virtual Co-founder" text centered on screen

**Step 6: Commit**

```bash
git add -A
git commit -m "chore: configure Tailwind CSS with design system variables"
```

---

### Task 3: Configure shadcn/ui

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx`

**Step 1: Install shadcn/ui dependencies**

Run:
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
```

**Step 2: Create utils file**

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 3: Create components.json for shadcn**

Create `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**Step 4: Configure path aliases in TypeScript**

Replace `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Step 5: Configure Vite path aliases**

Replace `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Step 6: Install Node types for path**

Run:
```bash
npm install -D @types/node
```

**Step 7: Add first shadcn component (Button)**

Run:
```bash
npx shadcn@latest add button
```

Expected: `src/components/ui/button.tsx` created

**Step 8: Test Button component works**

Replace `src/App.tsx`:

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

export default App
```

**Step 9: Verify buttons render correctly**

Run:
```bash
npm run dev
```

Expected: Four styled buttons visible

**Step 10: Commit**

```bash
git add -A
git commit -m "chore: configure shadcn/ui with path aliases"
```

---

### Task 4: Install Core shadcn/ui Components

**Files:**
- Create: `src/components/ui/*.tsx` (multiple files)

**Step 1: Install all required shadcn components**

Run each command:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
npx shadcn@latest add badge
npx shadcn@latest add progress
npx shadcn@latest add skeleton
npx shadcn@latest add toast
npx shadcn@latest add tooltip
npx shadcn@latest add tabs
npx shadcn@latest add scroll-area
npx shadcn@latest add separator
npx shadcn@latest add command
```

**Step 2: Verify all components installed**

Run:
```bash
ls src/components/ui/
```

Expected: `button.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`, `dialog.tsx`, `dropdown-menu.tsx`, `avatar.tsx`, `badge.tsx`, `progress.tsx`, `skeleton.tsx`, `toast.tsx`, `tooltip.tsx`, `tabs.tsx`, `scroll-area.tsx`, `separator.tsx`, `command.tsx`

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: install shadcn/ui component library"
```

---

### Task 5: Install State Management Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install React Query**

Run:
```bash
npm install @tanstack/react-query
```

**Step 2: Install Zustand**

Run:
```bash
npm install zustand
```

**Step 3: Install React Router**

Run:
```bash
npm install react-router-dom
```

**Step 4: Install Framer Motion**

Run:
```bash
npm install framer-motion
```

**Step 5: Install Supabase client**

Run:
```bash
npm install @supabase/supabase-js
```

**Step 6: Install Vercel AI SDK**

Run:
```bash
npm install ai
```

**Step 7: Verify all dependencies installed**

Run:
```bash
npm ls @tanstack/react-query zustand react-router-dom framer-motion @supabase/supabase-js ai
```

Expected: All packages listed with versions

**Step 8: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install state management and routing dependencies"
```

---

### Task 6: Set Up Testing Infrastructure

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Modify: `package.json`

**Step 1: Install Vitest and React Testing Library**

Run:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
```

**Step 2: Create Vitest config**

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Step 3: Create test setup file**

Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom'
```

**Step 4: Add test scripts to package.json**

Add to `package.json` scripts:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

**Step 5: Create a sample test to verify setup**

Create `src/App.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument()
  })
})
```

**Step 6: Run test to verify setup works**

Run:
```bash
npm run test:run
```

Expected: 1 test passes

**Step 7: Remove sample test**

Run:
```bash
rm src/App.test.tsx
```

**Step 8: Commit**

```bash
git add -A
git commit -m "chore: configure Vitest testing infrastructure"
```

---

### Task 7: Create Environment Configuration

**Files:**
- Create: `.env.example`
- Create: `src/lib/env.ts`

**Step 1: Create environment template**

Create `.env.example`:

```bash
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Backend API
VITE_API_URL=http://localhost:8000
```

**Step 2: Create typed environment access**

Create `src/lib/env.ts`:

```typescript
export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  apiUrl: import.meta.env.VITE_API_URL as string || 'http://localhost:8000',
} as const

// Validate required env vars in development
if (import.meta.env.DEV) {
  const missing = Object.entries(env)
    .filter(([key, value]) => !value && key !== 'apiUrl')
    .map(([key]) => key)

  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`)
  }
}
```

**Step 3: Add .env.local to gitignore**

Append to `.gitignore`:

```
# Environment
.env.local
.env.*.local
```

**Step 4: Commit**

```bash
git add .env.example src/lib/env.ts .gitignore
git commit -m "chore: add environment configuration"
```

---

### Task 8: Create Supabase Client

**Files:**
- Create: `src/lib/api/supabase.ts`

**Step 1: Create Supabase client**

Create `src/lib/api/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'
import { env } from '@/lib/env'

export const supabase = createClient(
  env.supabaseUrl || 'http://localhost:54321',
  env.supabaseAnonKey || 'placeholder-key'
)
```

**Step 2: Commit**

```bash
git add src/lib/api/supabase.ts
git commit -m "feat: add Supabase client"
```

---

### Task 9: Create API Client

**Files:**
- Create: `src/lib/api/client.ts`

**Step 1: Create API client with auth**

Create `src/lib/api/client.ts`:

```typescript
import { env } from '@/lib/env'
import { supabase } from './supabase'

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async getAuthHeaders(): Promise<HeadersInit> {
    const { data: { session } } = await supabase.auth.getSession()
    const token = session?.access_token

    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    const headers = await this.getAuthHeaders()
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async post<T>(endpoint: string, body?: unknown): Promise<T> {
    const headers = await this.getAuthHeaders()
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async put<T>(endpoint: string, body?: unknown): Promise<T> {
    const headers = await this.getAuthHeaders()
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async delete<T>(endpoint: string): Promise<T> {
    const headers = await this.getAuthHeaders()
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}

export const apiClient = new ApiClient(env.apiUrl)
```

**Step 2: Commit**

```bash
git add src/lib/api/client.ts
git commit -m "feat: add API client with auth headers"
```

---

### Task 10: Create Zustand UI Store

**Files:**
- Create: `src/stores/ui.store.ts`
- Create: `src/stores/ui.store.test.ts`

**Step 1: Write the failing test**

Create `src/stores/ui.store.test.ts`:

```typescript
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
```

**Step 2: Run test to verify it fails**

Run:
```bash
npm run test:run src/stores/ui.store.test.ts
```

Expected: FAIL - Cannot find module './ui.store'

**Step 3: Write the implementation**

Create `src/stores/ui.store.ts`:

```typescript
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
```

**Step 4: Run test to verify it passes**

Run:
```bash
npm run test:run src/stores/ui.store.test.ts
```

Expected: 3 tests pass

**Step 5: Commit**

```bash
git add src/stores/ui.store.ts src/stores/ui.store.test.ts
git commit -m "feat: add Zustand UI store with persistence"
```

---

## Phase 2: Core Layout

### Task 11: Create Mode Detection Logic

**Files:**
- Create: `src/lib/mode-detection.ts`
- Create: `src/lib/mode-detection.test.ts`

**Step 1: Write the failing test**

Create `src/lib/mode-detection.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { detectMode, type DashboardMode } from './mode-detection'

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
```

**Step 2: Run test to verify it fails**

Run:
```bash
npm run test:run src/lib/mode-detection.test.ts
```

Expected: FAIL - Cannot find module './mode-detection'

**Step 3: Write the implementation**

Create `src/lib/mode-detection.ts`:

```typescript
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
```

**Step 4: Run test to verify it passes**

Run:
```bash
npm run test:run src/lib/mode-detection.test.ts
```

Expected: 9 tests pass

**Step 5: Commit**

```bash
git add src/lib/mode-detection.ts src/lib/mode-detection.test.ts
git commit -m "feat: add adaptive mode detection logic"
```

---

### Task 12: Create React Query Provider

**Files:**
- Create: `src/app/providers/QueryProvider.tsx`

**Step 1: Create the provider**

Create `src/app/providers/QueryProvider.tsx`:

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/providers/QueryProvider.tsx
git commit -m "feat: add React Query provider"
```

---

### Task 13: Create Auth Provider

**Files:**
- Create: `src/app/providers/AuthProvider.tsx`
- Create: `src/features/auth/hooks/useAuth.ts`

**Step 1: Create auth hook**

Create `src/features/auth/hooks/useAuth.ts`:

```typescript
import { useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/api/supabase'

interface AuthState {
  user: User | null
  session: Session | null
  isLoading: boolean
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, session, isLoading }
}
```

**Step 2: Create auth context and provider**

Create `src/app/providers/AuthProvider.tsx`:

```typescript
import { createContext, useContext, ReactNode } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { useAuth } from '@/features/auth/hooks/useAuth'

interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
```

**Step 3: Create feature index**

Create `src/features/auth/index.ts`:

```typescript
export { useAuth } from './hooks/useAuth'
export { AuthProvider, useAuthContext } from '@/app/providers/AuthProvider'
```

**Step 4: Commit**

```bash
git add src/app/providers/AuthProvider.tsx src/features/auth/hooks/useAuth.ts src/features/auth/index.ts
git commit -m "feat: add auth provider with Supabase integration"
```

---

### Task 14: Create Combined Providers

**Files:**
- Create: `src/app/providers/index.tsx`

**Step 1: Create combined providers**

Create `src/app/providers/index.tsx`:

```typescript
import { ReactNode } from 'react'
import { QueryProvider } from './QueryProvider'
import { AuthProvider } from './AuthProvider'
import { Toaster } from '@/components/ui/toaster'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </QueryProvider>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/providers/index.tsx
git commit -m "feat: create combined providers wrapper"
```

---

### Task 15: Create Router Configuration

**Files:**
- Create: `src/app/Router.tsx`
- Create: `src/app/ProtectedRoute.tsx`

**Step 1: Create protected route component**

Create `src/app/ProtectedRoute.tsx`:

```typescript
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '@/features/auth'
import { Skeleton } from '@/components/ui/skeleton'

export function ProtectedRoute() {
  const { user, isLoading } = useAuthContext()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="space-y-4 w-64">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
```

**Step 2: Create router configuration**

Create `src/app/Router.tsx`:

```typescript
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { Skeleton } from '@/components/ui/skeleton'

// Lazy load pages
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const SignupPage = lazy(() => import('@/features/auth/pages/SignupPage'))
const ProjectsPage = lazy(() => import('@/features/projects/pages/ProjectsPage'))
const ProjectDashboard = lazy(() => import('@/features/projects/pages/ProjectDashboard'))

function PageLoader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="space-y-4 w-64">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SignupPage />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Navigate to="/projects" replace />,
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:projectId',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
```

**Step 3: Commit**

```bash
git add src/app/Router.tsx src/app/ProtectedRoute.tsx
git commit -m "feat: add React Router configuration with lazy loading"
```

---

### Task 16: Create Placeholder Pages

**Files:**
- Create: `src/features/auth/pages/LoginPage.tsx`
- Create: `src/features/auth/pages/SignupPage.tsx`
- Create: `src/features/projects/pages/ProjectsPage.tsx`
- Create: `src/features/projects/pages/ProjectDashboard.tsx`

**Step 1: Create LoginPage placeholder**

Create `src/features/auth/pages/LoginPage.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome back to Virtual Co-founder</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Login form coming soon...
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

**Step 2: Create SignupPage placeholder**

Create `src/features/auth/pages/SignupPage.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your Virtual Co-founder account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Signup form coming soon...
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/login">Back to login</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

**Step 3: Create ProjectsPage placeholder**

Create `src/features/projects/pages/ProjectsPage.tsx`:

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-muted-foreground">Your startup ideas</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>No projects yet</CardTitle>
            <CardDescription>
              Create your first project to get started with your AI co-founder
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

**Step 4: Create ProjectDashboard placeholder**

Create `src/features/projects/pages/ProjectDashboard.tsx`:

```typescript
import { useParams } from 'react-router-dom'

export default function ProjectDashboard() {
  const { projectId } = useParams()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <p className="text-muted-foreground">Project ID: {projectId}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Dashboard coming soon...
        </p>
      </div>
    </div>
  )
}
```

**Step 5: Create feature index files**

Create `src/features/projects/index.ts`:

```typescript
// Exports will be added as components are built
export {}
```

**Step 6: Commit**

```bash
git add src/features/auth/pages/ src/features/projects/pages/ src/features/projects/index.ts
git commit -m "feat: add placeholder pages for routing"
```

---

### Task 17: Wire Up App Entry Point

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Step 1: Update App.tsx**

Replace `src/App.tsx`:

```typescript
import { Providers } from '@/app/providers'
import { Router } from '@/app/Router'

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  )
}

export default App
```

**Step 2: Ensure main.tsx is correct**

Verify `src/main.tsx` contains:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Step 3: Verify app runs**

Run:
```bash
npm run dev
```

Expected: App loads, redirects to /login (since not authenticated)

**Step 4: Commit**

```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: wire up app with providers and router"
```

---

### Task 18: Create Error Boundary Component

**Files:**
- Create: `src/components/layout/ErrorBoundary.tsx`
- Create: `src/components/layout/ErrorBoundary.test.tsx`

**Step 1: Write the failing test**

Create `src/components/layout/ErrorBoundary.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ErrorBoundary } from './ErrorBoundary'

function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )
    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('renders error UI when error occurs', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()

    consoleSpy.mockRestore()
  })

  it('calls onReset when retry clicked', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const onReset = vi.fn()

    render(
      <ErrorBoundary onReset={onReset}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    fireEvent.click(screen.getByRole('button', { name: /try again/i }))
    expect(onReset).toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})
```

**Step 2: Run test to verify it fails**

Run:
```bash
npm run test:run src/components/layout/ErrorBoundary.test.tsx
```

Expected: FAIL - Cannot find module './ErrorBoundary'

**Step 3: Write the implementation**

Create `src/components/layout/ErrorBoundary.tsx`:

```typescript
import { Component, ReactNode } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onReset?: () => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    this.props.onReset?.()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Card className="m-4">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <p className="text-sm text-muted-foreground text-center">
              Something went wrong loading this section.
            </p>
            <Button variant="outline" size="sm" onClick={this.handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Try again
            </Button>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}
```

**Step 4: Run test to verify it passes**

Run:
```bash
npm run test:run src/components/layout/ErrorBoundary.test.tsx
```

Expected: 3 tests pass

**Step 5: Commit**

```bash
git add src/components/layout/ErrorBoundary.tsx src/components/layout/ErrorBoundary.test.tsx
git commit -m "feat: add ErrorBoundary component"
```

---

## Phase 2 Continued: Layout Components

### Task 19: Create Header Component

**Files:**
- Create: `src/components/layout/Header.tsx`

**Step 1: Create Header component**

Create `src/components/layout/Header.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { useAuthContext } from '@/features/auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { supabase } from '@/lib/api/supabase'
import { LogOut, Settings, User } from 'lucide-react'

interface HeaderProps {
  projectName?: string
  currentPhase?: string
}

export function Header({ projectName, currentPhase }: HeaderProps) {
  const { user } = useAuthContext()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const initials = user?.email?.slice(0, 2).toUpperCase() || 'U'

  return (
    <header className="h-14 border-b bg-background px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/projects" className="font-semibold text-lg">
          Virtual Co-founder
        </Link>

        {projectName && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{projectName}</span>
          </>
        )}

        {currentPhase && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
            {currentPhase}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: add Header component with user menu"
```

---

### Task 20: Create Sidebar Component

**Files:**
- Create: `src/components/layout/Sidebar.tsx`

**Step 1: Create Sidebar component**

Create `src/components/layout/Sidebar.tsx`:

```typescript
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
```

**Step 2: Commit**

```bash
git add src/components/layout/Sidebar.tsx
git commit -m "feat: add Sidebar component with navigation"
```

---

### Task 21: Create AppLayout Component

**Files:**
- Create: `src/components/layout/AppLayout.tsx`

**Step 1: Create AppLayout with adaptive grid**

Create `src/components/layout/AppLayout.tsx`:

```typescript
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
```

**Step 2: Create layout index**

Create `src/components/layout/index.ts`:

```typescript
export { AppLayout } from './AppLayout'
export { Header } from './Header'
export { Sidebar } from './Sidebar'
export { ErrorBoundary } from './ErrorBoundary'
```

**Step 3: Commit**

```bash
git add src/components/layout/AppLayout.tsx src/components/layout/index.ts
git commit -m "feat: add AppLayout with adaptive grid transitions"
```

---

### Task 22: Create useAdaptiveMode Hook

**Files:**
- Create: `src/hooks/useAdaptiveMode.ts`

**Step 1: Create the hook**

Create `src/hooks/useAdaptiveMode.ts`:

```typescript
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
```

**Step 2: Commit**

```bash
git add src/hooks/useAdaptiveMode.ts
git commit -m "feat: add useAdaptiveMode hook"
```

---

This completes Phase 1 (Foundation) and the core of Phase 2 (Layout). The plan continues with:

- **Phase 3:** Chat System (Tasks 23-30)
- **Phase 4:** Features - Approvals, Artifacts, Progress (Tasks 31-45)
- **Phase 5:** Polish - Mobile, Keyboard Shortcuts, Accessibility (Tasks 46-55)

---

## Summary

**Completed in this plan:**
- Tasks 1-22: Foundation + Core Layout

**Remaining phases (to be expanded):**
- Phase 3: Chat System
- Phase 4: Feature Components
- Phase 5: Polish & Accessibility

**Next step:** Execute Tasks 1-22 to get the foundation running, then continue with Phase 3.
