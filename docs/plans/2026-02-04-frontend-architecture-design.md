# Frontend Architecture Design

> **Date:** 2026-02-04
> **Status:** Approved
> **Scope:** React SPA frontend for Virtual Co-founder platform

---

## Overview

This document defines the frontend architecture for the Virtual Co-founder web application—a chat-first adaptive interface that evolves into a full dashboard as projects mature.

**Key decisions:**
- React + Vite (not Next.js)
- Feature-based folder structure with co-located files
- React Query for server state, Zustand for client state
- Derived adaptive mode (computed, not stored)
- Supabase Realtime for live updates
- CSS Grid + Framer Motion for layout transitions
- Suspense + Error Boundaries for loading/error states

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Build | Vite + SWC | 5.x |
| Framework | React | 18.x |
| Language | TypeScript | 5.x |
| Routing | React Router | 6.x |
| Server State | TanStack React Query | 5.x |
| Client State | Zustand | 4.x |
| Styling | Tailwind CSS | 3.x |
| Components | shadcn/ui | latest |
| Animations | Framer Motion | 10.x |
| AI Streaming | Vercel AI SDK | 3.x |
| Real-time | Supabase Realtime | latest |
| Auth | Supabase Auth | latest |

---

## Project Structure

```
virtual-cofounder-web/
├── public/
│   ├── favicon.ico
│   └── logo.svg
│
├── src/
│   ├── app/                        # App shell & routing
│   │   ├── App.tsx                 # Root component, providers
│   │   ├── Router.tsx              # React Router config
│   │   └── providers/
│   │       ├── QueryProvider.tsx   # React Query setup
│   │       ├── AuthProvider.tsx    # Supabase auth context
│   │       └── index.tsx           # Combined providers
│   │
│   ├── features/                   # Feature modules (co-located)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── SignupForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── SignupPage.tsx
│   │   │   ├── auth.types.ts
│   │   │   └── index.ts            # Public exports
│   │   │
│   │   ├── chat/
│   │   │   ├── components/
│   │   │   │   ├── ChatContainer.tsx
│   │   │   │   ├── MessageList.tsx
│   │   │   │   ├── MessageBubble.tsx
│   │   │   │   ├── ChatInput.tsx
│   │   │   │   ├── ChatSkeleton.tsx
│   │   │   │   ├── TypingIndicator.tsx
│   │   │   │   └── StreamingText.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useChat.ts
│   │   │   │   ├── useStreamingChat.ts
│   │   │   │   └── useChatShortcuts.ts
│   │   │   ├── chat.types.ts
│   │   │   ├── chat.api.ts         # React Query queries/mutations
│   │   │   └── index.ts
│   │   │
│   │   ├── approvals/
│   │   │   ├── components/
│   │   │   │   ├── ApprovalCard.tsx
│   │   │   │   ├── ApprovalModal.tsx
│   │   │   │   ├── ApprovalsSkeleton.tsx
│   │   │   │   └── PendingApprovals.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useApprovals.ts
│   │   │   ├── approvals.types.ts
│   │   │   ├── approvals.api.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── artifacts/
│   │   │   ├── components/
│   │   │   │   ├── ArtifactGallery.tsx
│   │   │   │   ├── ArtifactPreview.tsx
│   │   │   │   ├── ArtifactModal.tsx
│   │   │   │   ├── DocumentViewer.tsx
│   │   │   │   ├── CodeViewer.tsx
│   │   │   │   └── ImageViewer.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useArtifacts.ts
│   │   │   ├── artifacts.types.ts
│   │   │   ├── artifacts.api.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── projects/
│   │   │   ├── components/
│   │   │   │   ├── ProjectList.tsx
│   │   │   │   └── ProjectCard.tsx
│   │   │   ├── pages/
│   │   │   │   ├── ProjectsPage.tsx
│   │   │   │   └── ProjectDashboard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useProject.ts
│   │   │   ├── projects.types.ts
│   │   │   ├── projects.api.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── progress/
│   │   │   ├── components/
│   │   │   │   ├── PhaseTracker.tsx
│   │   │   │   ├── MilestoneList.tsx
│   │   │   │   └── BlockerCard.tsx
│   │   │   ├── progress.types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── settings/
│   │       ├── components/
│   │       │   ├── AutomationSettings.tsx
│   │       │   ├── NotificationSettings.tsx
│   │       │   └── DangerZone.tsx
│   │       ├── pages/
│   │       │   └── SettingsPage.tsx
│   │       └── index.ts
│   │
│   ├── components/                 # Shared UI components
│   │   ├── ui/                     # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── command.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── ...
│   │   │
│   │   └── layout/                 # App-wide layout
│   │       ├── AppLayout.tsx
│   │       ├── AppSkeleton.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       ├── MobileNav.tsx
│   │       ├── CommandPalette.tsx
│   │       └── ErrorBoundary.tsx
│   │
│   ├── hooks/                      # Shared hooks
│   │   ├── useAdaptiveMode.ts
│   │   ├── useKeyboardShortcuts.ts
│   │   ├── useRealtimeSync.ts
│   │   ├── useAppNavigation.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/                        # Utilities
│   │   ├── api/
│   │   │   ├── client.ts           # Axios/fetch setup
│   │   │   └── supabase.ts         # Supabase client
│   │   ├── utils/
│   │   │   ├── cn.ts               # classnames helper
│   │   │   └── format.ts
│   │   ├── mode-detection.ts       # Adaptive mode logic
│   │   └── keyboard-shortcuts.ts   # Shortcut definitions
│   │
│   ├── stores/                     # Zustand stores
│   │   ├── ui.store.ts             # Sidebar, panels, theme
│   │   └── notifications.store.ts
│   │
│   ├── types/                      # Shared/generated types
│   │   ├── api.ts                  # Generated from OpenAPI
│   │   └── common.ts
│   │
│   ├── styles/
│   │   └── globals.css             # Tailwind base + custom
│   │
│   └── main.tsx                    # Entry point
│
├── tests/                          # Test files mirror src/
│   ├── features/
│   │   ├── chat/
│   │   │   └── ChatContainer.test.tsx
│   │   └── approvals/
│   │       └── ApprovalCard.test.tsx
│   └── setup.ts
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
└── package.json
```

---

## State Management

### Two Stores, Clear Boundaries

```
┌─────────────────────────────────────────────────────────────────┐
│                        STATE ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   SERVER STATE (React Query)         CLIENT STATE (Zustand)      │
│   ┌─────────────────────────┐       ┌─────────────────────────┐ │
│   │ • Project data          │       │ • Sidebar collapsed     │ │
│   │ • Chat messages         │       │ • Active panel          │ │
│   │ • Approvals list        │       │ • Modal open states     │ │
│   │ • Artifacts             │       │ • Toast notifications   │ │
│   │ • User profile          │       │ • Theme preference      │ │
│   │ • Phase progress        │       │ • Command palette open  │ │
│   └─────────────────────────┘       └─────────────────────────┘ │
│            ↓                                   ↓                 │
│   Cached, refetched,                 Instant, local-only,       │
│   synced with backend                persisted to localStorage   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### React Query Pattern

```typescript
// src/features/chat/chat.api.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

export const chatKeys = {
  all: ['chat'] as const,
  messages: (projectId: string) => [...chatKeys.all, 'messages', projectId] as const,
};

export function useMessages(projectId: string) {
  return useQuery({
    queryKey: chatKeys.messages(projectId),
    queryFn: () => apiClient.get(`/chat/messages?project_id=${projectId}`),
  });
}

export function useSendMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { projectId: string; content: string }) =>
      apiClient.post('/chat/messages', data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: chatKeys.messages(variables.projectId)
      });
    },
  });
}
```

### Zustand Store

```typescript
// src/stores/ui.store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  sidebarCollapsed: boolean;
  activePanel: 'overview' | 'approvals' | 'artifacts' | null;
  commandPaletteOpen: boolean;
  toggleSidebar: () => void;
  setActivePanel: (panel: UIState['activePanel']) => void;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      activePanel: null,
      commandPaletteOpen: false,
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setActivePanel: (panel) => set({ activePanel: panel }),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
    }),
    { name: 'ui-storage' }
  )
);
```

### Derived Adaptive Mode

```typescript
// src/hooks/useAdaptiveMode.ts
import { useMemo } from 'react';
import { detectMode } from '@/lib/mode-detection';
import { useProject } from '@/features/projects';

export function useAdaptiveMode(projectId: string) {
  const { data: project } = useProject(projectId);

  const mode = useMemo(() => {
    if (!project) return 'chat';
    return detectMode(project);
  }, [project]);

  return mode;
}
```

```typescript
// src/lib/mode-detection.ts
import type { Project } from '@/types/api';

export type DashboardMode = 'chat' | 'hybrid' | 'dashboard';

export function detectMode(project: Project): DashboardMode {
  const { current_phase, artifacts } = project;
  const artifactCount = artifacts?.length ?? 0;

  if (current_phase === 'discovery' && artifactCount < 5) {
    return 'chat';
  }

  if (['branding', 'validation'].includes(current_phase) || artifactCount < 20) {
    return 'hybrid';
  }

  return 'dashboard';
}
```

---

## Real-Time Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      REAL-TIME ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   AI STREAMING (Vercel AI SDK)       DATA SYNC (Supabase)       │
│   ┌─────────────────────────┐       ┌─────────────────────────┐ │
│   │                         │       │                         │ │
│   │  POST /chat/messages    │       │  Postgres Changes       │ │
│   │         ↓               │       │         ↓               │ │
│   │  Server-Sent Events     │       │  WebSocket              │ │
│   │         ↓               │       │         ↓               │ │
│   │  useChat() hook         │       │  Invalidate Query       │ │
│   │         ↓               │       │         ↓               │ │
│   │  Streaming text         │       │  React Query refetches  │ │
│   │                         │       │                         │ │
│   └─────────────────────────┘       └─────────────────────────┘ │
│                                                                  │
│   Used for:                          Used for:                   │
│   • AI responses                     • Approval status changes   │
│   • Typing indicators                • New artifacts created     │
│   • Tool call progress               • Phase transitions         │
│                                      • Multi-tab sync            │
└─────────────────────────────────────────────────────────────────┘
```

### AI Streaming

```typescript
// src/features/chat/hooks/useStreamingChat.ts
import { useChat } from 'ai/react';
import { useQueryClient } from '@tanstack/react-query';
import { artifactKeys } from '@/features/artifacts';

export function useStreamingChat(projectId: string) {
  const queryClient = useQueryClient();

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    api: `${import.meta.env.VITE_API_URL}/chat/stream`,
    body: { project_id: projectId },
    onFinish: (message) => {
      if (message.content.includes('[artifact:')) {
        queryClient.invalidateQueries({ queryKey: artifactKeys.all });
      }
    },
  });

  return { messages, input, setInput, handleSubmit, isLoading };
}
```

### Supabase Realtime Sync

```typescript
// src/hooks/useRealtimeSync.ts
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/api/supabase';
import { approvalKeys } from '@/features/approvals';
import { artifactKeys } from '@/features/artifacts';

export function useRealtimeSync(projectId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = supabase
      .channel(`project:${projectId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'approvals', filter: `project_id=eq.${projectId}` },
        () => {
          queryClient.invalidateQueries({ queryKey: approvalKeys.all });
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'artifacts', filter: `project_id=eq.${projectId}` },
        () => {
          queryClient.invalidateQueries({ queryKey: artifactKeys.list(projectId) });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId, queryClient]);
}
```

---

## Adaptive Layout System

### Three Modes

```
┌─────────────────────────────────────────────────────────────────┐
│                       LAYOUT MODES                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   CHAT MODE              HYBRID MODE           DASHBOARD MODE    │
│   ┌───────────────┐     ┌───────────────┐     ┌───────────────┐ │
│   │               │     │     │         │     │   │     │     │ │
│   │               │     │ Nav │         │     │   │     │     │ │
│   │     Chat      │     │     │  Chat   │     │Nav│Chat │Panel│ │
│   │     Only      │     │     │         │     │   │     │     │ │
│   │               │     │     │         │     │   │     │     │ │
│   └───────────────┘     └───────────────┘     └───────────────┘ │
│                                                                  │
│   grid-cols-[1fr]       grid-cols-[60px_1fr]  grid-cols-[60px_1fr_320px]
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Animated Layout Component

```typescript
// src/components/layout/AppLayout.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useAdaptiveMode } from '@/hooks/useAdaptiveMode';
import { useUIStore } from '@/stores/ui.store';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const gridTemplates = {
  chat: '1fr',
  hybrid: '60px 1fr',
  dashboard: '60px 1fr 320px',
};

interface AppLayoutProps {
  projectId: string;
  children: React.ReactNode;
  panel?: React.ReactNode;
}

export function AppLayout({ projectId, children, panel }: AppLayoutProps) {
  const mode = useAdaptiveMode(projectId);
  const { sidebarCollapsed } = useUIStore();

  return (
    <div className="h-screen flex flex-col">
      <Header projectId={projectId} />

      <motion.main
        className="flex-1 grid overflow-hidden"
        animate={{
          gridTemplateColumns: gridTemplates[mode]
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <AnimatePresence>
          {mode !== 'chat' && (
            <motion.aside
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 60 }}
              exit={{ opacity: 0, width: 0 }}
              className="border-r bg-muted/30"
            >
              <Sidebar collapsed={sidebarCollapsed} />
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="overflow-hidden">
          {children}
        </div>

        <AnimatePresence>
          {mode === 'dashboard' && panel && (
            <motion.aside
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 320 }}
              exit={{ opacity: 0, width: 0 }}
              className="border-l bg-muted/10 overflow-y-auto"
            >
              {panel}
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}
```

---

## Error Handling & Loading States

### Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    ERROR & LOADING HIERARCHY                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   App Root                                                       │
│   └─ ErrorBoundary (fatal errors → full-page error)             │
│      └─ Suspense (initial load → app skeleton)                  │
│         └─ AuthProvider                                          │
│            └─ ProjectDashboard                                   │
│               ├─ ErrorBoundary (chat errors → retry panel)      │
│               │  └─ Suspense (chat loading → message skeletons) │
│               │     └─ ChatContainer                            │
│               │                                                  │
│               └─ ErrorBoundary (panel errors → retry panel)     │
│                  └─ Suspense (panel loading → card skeletons)   │
│                     └─ ApprovalsPanel                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Error Boundary

```typescript
// src/components/layout/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <Card className="p-6 m-4 flex flex-col items-center gap-4">
          <AlertCircle className="h-10 w-10 text-destructive" />
          <p className="text-sm text-muted-foreground">
            Something went wrong loading this section.
          </p>
          <Button variant="outline" size="sm" onClick={this.handleReset}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try again
          </Button>
        </Card>
      );
    }

    return this.props.children;
  }
}
```

### Suspense with useSuspenseQuery

```typescript
// src/features/approvals/approvals.api.ts
import { useSuspenseQuery } from '@tanstack/react-query';

export function useApprovals(projectId: string) {
  return useSuspenseQuery({
    queryKey: approvalKeys.pending(projectId),
    queryFn: () => apiClient.get(`/approvals?project_id=${projectId}&status=pending`),
  });
}
```

---

## Routing

### Route Structure

```
/login                          → Login page
/signup                         → Signup page
/projects                       → Project list
/projects/:projectId            → Project dashboard (chat + panels)
/projects/:projectId/settings   → Project settings
```

### Router Configuration

```typescript
// src/app/Router.tsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppSkeleton } from '@/components/layout/AppSkeleton';
import { ProtectedRoute } from './ProtectedRoute';

const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
const SignupPage = lazy(() => import('@/features/auth/pages/SignupPage'));
const ProjectsPage = lazy(() => import('@/features/projects/pages/ProjectsPage'));
const ProjectDashboard = lazy(() => import('@/features/projects/pages/ProjectDashboard'));
const SettingsPage = lazy(() => import('@/features/settings/pages/SettingsPage'));

const router = createBrowserRouter([
  { path: '/login', element: <Suspense fallback={<AppSkeleton />}><LoginPage /></Suspense> },
  { path: '/signup', element: <Suspense fallback={<AppSkeleton />}><SignupPage /></Suspense> },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Navigate to="/projects" replace /> },
      { path: 'projects', element: <Suspense fallback={<AppSkeleton />}><ProjectsPage /></Suspense> },
      { path: 'projects/:projectId', element: <Suspense fallback={<AppSkeleton />}><ProjectDashboard /></Suspense> },
      { path: 'projects/:projectId/settings', element: <Suspense fallback={<AppSkeleton />}><SettingsPage /></Suspense> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
```

---

## Keyboard Shortcuts

### Shortcut Definitions

```typescript
// src/lib/keyboard-shortcuts.ts
export const SHORTCUTS = {
  FOCUS_CHAT: { key: 'k', meta: true, description: 'Focus chat input' },
  TOGGLE_SIDEBAR: { key: '/', meta: true, description: 'Toggle sidebar' },
  COMMAND_PALETTE: { key: '.', meta: true, description: 'Open command palette' },
  CLOSE: { key: 'Escape', description: 'Close modal/panel' },
  SEND_MESSAGE: { key: 'Enter', meta: true, description: 'Send message' },
  GO_APPROVALS: { key: 'a', meta: true, shift: true, description: 'View approvals' },
  GO_ARTIFACTS: { key: 'r', meta: true, shift: true, description: 'View artifacts' },
  GO_PROJECTS: { key: 'p', meta: true, shift: true, description: 'Go to projects' },
} as const;
```

### Global Hook

```typescript
// src/hooks/useKeyboardShortcuts.ts
import { useEffect, useCallback } from 'react';
import { useUIStore } from '@/stores/ui.store';
import { useAppNavigation } from './useAppNavigation';

export function useKeyboardShortcuts() {
  const { toggleSidebar, setActivePanel, setCommandPaletteOpen } = useUIStore();
  const { goToProjects } = useAppNavigation();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const meta = e.metaKey || e.ctrlKey;
    const shift = e.shiftKey;
    const target = e.target as HTMLElement;
    const isInput = ['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable;

    if (meta && e.key === 'k') {
      e.preventDefault();
      document.getElementById('chat-input')?.focus();
      return;
    }

    if (isInput && e.key !== 'Escape') return;

    if (e.key === 'Escape') {
      setActivePanel(null);
      setCommandPaletteOpen(false);
      return;
    }

    if (meta) {
      switch (e.key) {
        case '/': e.preventDefault(); toggleSidebar(); break;
        case '.': e.preventDefault(); setCommandPaletteOpen(true); break;
      }

      if (shift) {
        switch (e.key.toLowerCase()) {
          case 'a': e.preventDefault(); setActivePanel('approvals'); break;
          case 'r': e.preventDefault(); setActivePanel('artifacts'); break;
          case 'p': e.preventDefault(); goToProjects(); break;
        }
      }
    }
  }, [toggleSidebar, setActivePanel, setCommandPaletteOpen, goToProjects]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
```

---

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         DATA FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Backend API ──────────────────────────────────────────────┐    │
│       │                                                    │    │
│       ▼                                                    ▼    │
│  React Query                                    Supabase Realtime│
│  (fetch, cache)                                 (WebSocket)      │
│       │                                                    │    │
│       │◄───────────── invalidateQueries ◄──────────────────┘    │
│       │                                                          │
│       ▼                                                          │
│  Components ◄────────── useSuspenseQuery()                      │
│       │                                                          │
│       ▼                                                          │
│  Derived State ◄─────── useAdaptiveMode()                       │
│  (mode computed)                                                 │
│       │                                                          │
│       ▼                                                          │
│  Layout + Panels                                                 │
│                                                                  │
│  UI Actions ────────────────────────────────────────────────┐   │
│       │                                                     │   │
│       ▼                                                     ▼   │
│  Zustand Store                                    React Query    │
│  (sidebar, panels, theme)                         mutations      │
│       │                                                     │   │
│       ▼                                                     ▼   │
│  Instant UI update                                Backend API    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: Foundation
- Vite + React + TypeScript setup
- Tailwind + shadcn/ui configuration
- Supabase client + auth flow
- React Query + Zustand setup
- Basic routing

### Phase 2: Core Layout
- AppLayout with adaptive grid
- Header + Sidebar components
- Error boundaries + skeletons
- Keyboard shortcuts

### Phase 3: Chat System
- ChatContainer with streaming
- MessageList + MessageBubble
- ChatInput with shortcuts
- Realtime sync hook

### Phase 4: Features
- Approvals (cards, modal, list)
- Artifacts (gallery, viewers)
- Progress tracker
- Settings panel

### Phase 5: Polish
- Mobile responsive
- Command palette
- Animations refinement
- Accessibility audit

---

## Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React + Vite | No SSR needed, faster dev server |
| State management | React Query + Zustand | Clear server/client separation |
| Adaptive mode | Derived state | Single source of truth, no sync bugs |
| Real-time | Supabase Realtime → Query invalidation | Zero manual state updates |
| Layout transitions | CSS Grid + Framer Motion | GPU-accelerated, declarative |
| Error handling | Suspense + Error Boundaries | Composable, declarative |
| Folder structure | Feature-based co-location | Everything for a feature in one place |
