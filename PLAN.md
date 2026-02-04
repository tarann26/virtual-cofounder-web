# Feature 10: Dashboard UI

> **For Claude:** REQUIRED: Follow TDD methodology (see CLAUDE.md)
> **Core Principles:** See `principles/approval_gates.md`, `principles/references.md`
> **Dependencies:** Features 01-03 (Foundation, AI, Memory)

**Goal:** Build the adaptive chat-first interface that evolves into a full dashboard as the project matures.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| State | React Context + Server Components |
| Real-time | Vercel AI SDK streaming |
| Auth | Supabase Auth |

---

## DTOs & Types

```typescript
// src/types/ui/dashboard.ts
export interface DashboardState {
  mode: 'chat' | 'hybrid' | 'dashboard';
  active_phase: PhaseType;
  sidebar_collapsed: boolean;
  active_panel: PanelType | null;
}

export type PhaseType =
  | 'discovery'
  | 'branding'
  | 'validation'
  | 'development'
  | 'marketing'
  | 'fundraising';

export type PanelType =
  | 'project_overview'
  | 'phase_details'
  | 'approvals'
  | 'artifacts'
  | 'settings';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  phase: PhaseType | null;
  artifacts: Artifact[];
  approval_request: ApprovalRequest | null;
}

export interface Artifact {
  id: string;
  type: ArtifactType;
  title: string;
  content: string;
  preview_url: string | null;
  created_at: string;
}

export type ArtifactType =
  | 'document'
  | 'code'
  | 'image'
  | 'link'
  | 'data';

export interface ProjectProgress {
  phase: PhaseType;
  completion_percentage: number;
  milestones: Milestone[];
  blockers: Blocker[];
}

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  completed_at: string | null;
}

export interface Blocker {
  id: string;
  type: 'approval_needed' | 'user_input_needed' | 'external_dependency';
  description: string;
  action_required: string;
}
```

---

## Implementation Tasks

### Task 1: App Layout Shell [PENDING]

**Files:**
- Create: `src/app/(dashboard)/layout.tsx`
- Create: `src/components/layout/sidebar.tsx`
- Create: `src/components/layout/header.tsx`
- Test: `tests/unit/components/layout/sidebar.test.tsx`

**Layout Structure:**
```
┌─────────────────────────────────────────────────┐
│ Header (Project Name, Phase Indicator, User)    │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │                                      │
│ (phases, │           Main Content               │
│ settings,│                                      │
│ help)    │                                      │
├──────────┴──────────────────────────────────────┤
│ Chat Input (always visible)                     │
└─────────────────────────────────────────────────┘
```

### Task 2: Chat Interface [PENDING]

**Files:**
- Create: `src/components/chat/chat-container.tsx`
- Create: `src/components/chat/message-list.tsx`
- Create: `src/components/chat/message-bubble.tsx`
- Create: `src/components/chat/chat-input.tsx`
- Test: `tests/unit/components/chat/chat-container.test.tsx`

**Features:**
- Streaming message display
- Markdown rendering
- Code syntax highlighting
- Artifact inline preview

### Task 3: Phase Progress Indicator [PENDING]

**Files:**
- Create: `src/components/progress/phase-tracker.tsx`
- Create: `src/components/progress/milestone-list.tsx`
- Test: `tests/unit/components/progress/phase-tracker.test.tsx`

**Visual States:**
```
Discovery ───●─── Branding ───○─── Validation ───○─── Development
            ▲
       Current Phase

● Completed  ◐ In Progress  ○ Pending
```

### Task 4: Approval Request UI [PENDING]

**Files:**
- Create: `src/components/approvals/approval-card.tsx`
- Create: `src/components/approvals/approval-modal.tsx`
- Create: `src/components/approvals/pending-approvals.tsx`
- Test: `tests/unit/components/approvals/approval-card.test.tsx`

**Approval Card:**
```
┌─────────────────────────────────────────────────┐
│ 🔒 Approval Required                            │
├─────────────────────────────────────────────────┤
│ Action: Purchase domain "example.com"           │
│ Cost: $12.99/year                               │
│ Provider: Cloudflare                            │
├─────────────────────────────────────────────────┤
│ [Approve]  [Reject]  [Ask Questions]            │
└─────────────────────────────────────────────────┘
```

### Task 5: Artifact Viewer [PENDING]

**Files:**
- Create: `src/components/artifacts/artifact-gallery.tsx`
- Create: `src/components/artifacts/artifact-preview.tsx`
- Create: `src/components/artifacts/artifact-modal.tsx`
- Test: `tests/unit/components/artifacts/artifact-gallery.test.tsx`

**Artifact Types:**
- Documents: Markdown preview with copy
- Code: Syntax-highlighted with file tree
- Images: Thumbnail grid with lightbox
- Links: Preview cards with metadata
- Data: Tables with export options

### Task 6: Project Overview Panel [PENDING]

**Files:**
- Create: `src/components/panels/project-overview.tsx`
- Create: `src/components/panels/phase-details.tsx`
- Test: `tests/unit/components/panels/project-overview.test.tsx`

**Overview Contents:**
- Project summary
- Current phase status
- Recent activity
- Pending blockers
- Key metrics

### Task 7: Settings Panel [PENDING]

**Files:**
- Create: `src/components/panels/settings.tsx`
- Create: `src/components/settings/automation-settings.tsx`
- Create: `src/components/settings/notification-settings.tsx`
- Test: `tests/unit/components/panels/settings.test.tsx`

**Settings Sections:**
- Automation level (conservative ↔ autonomous)
- Notification preferences
- Connected integrations
- API keys (via Invoke)
- Danger zone (delete project)

### Task 8: Adaptive Mode Switching [PENDING]

**Files:**
- Create: `src/lib/ui/mode-detection.ts`
- Create: `src/hooks/useAdaptiveMode.ts`
- Test: `tests/unit/lib/ui/mode-detection.test.ts`

**Mode Triggers:**
```typescript
const MODE_TRIGGERS = {
  // Start in chat mode
  chat: {
    phases: ['discovery'],
    artifact_count: { max: 5 }
  },

  // Switch to hybrid when artifacts accumulate
  hybrid: {
    phases: ['branding', 'validation'],
    artifact_count: { min: 5, max: 20 }
  },

  // Full dashboard for complex phases
  dashboard: {
    phases: ['development', 'marketing', 'fundraising'],
    artifact_count: { min: 20 }
  }
};
```

### Task 9: Mobile Responsive Design [PENDING]

**Files:**
- Create: `src/components/mobile/mobile-nav.tsx`
- Create: `src/components/mobile/swipe-panels.tsx`
- Test: `tests/unit/components/mobile/mobile-nav.test.tsx`

**Breakpoints:**
```typescript
const BREAKPOINTS = {
  mobile: '< 640px',   // Single column, bottom nav
  tablet: '640-1024px', // Collapsible sidebar
  desktop: '> 1024px'   // Full layout
};
```

### Task 10: Keyboard Shortcuts [PENDING]

**Files:**
- Create: `src/lib/ui/keyboard-shortcuts.ts`
- Create: `src/hooks/useKeyboardShortcuts.ts`
- Test: `tests/unit/lib/ui/keyboard-shortcuts.test.ts`

**Shortcuts:**
```typescript
const SHORTCUTS = {
  'cmd+k': 'Focus chat input',
  'cmd+/': 'Toggle sidebar',
  'cmd+.': 'Open command palette',
  'esc': 'Close modal/panel',
  'cmd+enter': 'Send message',
  'cmd+shift+a': 'View pending approvals'
};
```

---

## Component Library (shadcn/ui)

```typescript
// Required components from shadcn/ui
const SHADCN_COMPONENTS = [
  'button',
  'input',
  'textarea',
  'card',
  'dialog',
  'dropdown-menu',
  'avatar',
  'badge',
  'progress',
  'skeleton',
  'toast',
  'tooltip',
  'tabs',
  'scroll-area',
  'separator',
  'command'  // For command palette
];
```

---

## Accessibility Requirements

```typescript
const A11Y_REQUIREMENTS = {
  keyboard_navigation: 'Full keyboard access to all features',
  screen_reader: 'ARIA labels on all interactive elements',
  color_contrast: 'WCAG AA minimum (4.5:1)',
  focus_indicators: 'Visible focus rings on all focusable elements',
  reduced_motion: 'Respect prefers-reduced-motion'
};
```

---

## Future Enhancements

| Enhancement | Description |
|-------------|-------------|
| Dark Mode | System preference + manual toggle |
| Themes | Customizable color schemes |
| Widgets | Draggable dashboard widgets |
| Collaboration | Multi-user presence indicators |
| Export | PDF/PNG export of dashboards |

---

## Completion Checklist

- [ ] Task 1: App Layout Shell
- [ ] Task 2: Chat Interface
- [ ] Task 3: Phase Progress Indicator
- [ ] Task 4: Approval Request UI
- [ ] Task 5: Artifact Viewer
- [ ] Task 6: Project Overview Panel
- [ ] Task 7: Settings Panel
- [ ] Task 8: Adaptive Mode Switching
- [ ] Task 9: Mobile Responsive Design
- [ ] Task 10: Keyboard Shortcuts
- [ ] All shadcn/ui components installed
- [ ] All tests passing
- [ ] Accessibility audit passed
- [ ] Mobile testing complete
