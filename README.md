# Virtual Co-founder Web

> The adaptive chat-first frontend for the Virtual Co-founder platform—an AI co-founder that takes entrepreneurs from idea to revenue.

[![Status](https://img.shields.io/badge/status-planning-yellow)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-black)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4)]()

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Type Definitions](#type-definitions)
- [Components](#components)
- [Implementation Tasks](#implementation-tasks)
- [API Integration](#api-integration)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

---

## Overview

### What is Virtual Co-founder?

Virtual Co-founder is an AI-powered platform that guides entrepreneurs through the entire startup journey:

1. **Discovery** - Explore and refine your idea
2. **Branding** - Create name, domain, visual identity
3. **Validation** - Build landing pages, collect waitlist signups
4. **Development** - AI-assisted product development pipeline
5. **Marketing** - Automated outreach, ads, content
6. **Fundraising** - Pitch decks, investor outreach

### What is This Repository?

This is the **frontend web application** that provides the user interface for the Virtual Co-founder platform. It is designed as a **chat-first adaptive interface** that evolves into a full dashboard as the user's project matures.

### Design Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│                     DESIGN PRINCIPLES                           │
├─────────────────────────────────────────────────────────────────┤
│ 1. Chat-first: All phases start with conversational UI          │
│ 2. Progressive disclosure: Dashboard appears as project grows   │
│ 3. Approval gates: Clear visual distinction for consent actions │
│ 4. Real-time: Streaming responses, live progress updates        │
│ 5. Adaptive: Interface complexity matches project complexity    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Architecture

### Adaptive Mode System

The interface automatically transitions between three modes based on project state:

```
┌─────────────────────────────────────────────────────────────────┐
│                       MODE PROGRESSION                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   CHAT MODE          HYBRID MODE           DASHBOARD MODE       │
│   ┌─────────┐        ┌─────────────┐       ┌─────────────────┐  │
│   │         │        │ Side │      │       │ Side │  Panels  │  │
│   │  Chat   │   →    │ bar  │ Chat │   →   │ bar  ├──────────┤  │
│   │  Only   │        │      │      │       │      │   Chat   │  │
│   │         │        │      │      │       │      │          │  │
│   └─────────┘        └─────────────┘       └─────────────────┘  │
│                                                                 │
│   Discovery          Branding/Validation   Dev/Marketing/Fund   │
│   0-5 artifacts      5-20 artifacts        20+ artifacts        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mode Trigger Logic

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

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ Header (Project Name, Phase Indicator, User Menu)               │
├──────────────┬──────────────────────────────────────────────────┤
│              │                                                  │
│   Sidebar    │                                                  │
│              │              Main Content Area                   │
│  - Phases    │                                                  │
│  - Settings  │     (Chat / Panels / Artifacts / Approvals)      │
│  - Help      │                                                  │
│              │                                                  │
├──────────────┴──────────────────────────────────────────────────┤
│ Chat Input (always visible, pinned to bottom)                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

### Core Framework

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Framework** | Next.js | 14.x | React framework with App Router |
| **Language** | TypeScript | 5.x | Type-safe development |
| **Runtime** | Node.js | 20.x LTS | Server-side rendering |

### Styling & UI

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **CSS Framework** | Tailwind CSS | 3.x | Utility-first styling |
| **Component Library** | shadcn/ui | latest | Accessible, customizable components |
| **Icons** | Lucide React | latest | Consistent iconography |
| **Animations** | Framer Motion | 10.x | Smooth transitions |

### State Management

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Server State** | React Query (TanStack Query) | 5.x | API data fetching, caching |
| **Client State** | Zustand | 4.x | Local UI state |
| **Form State** | React Hook Form | 7.x | Form handling |
| **Validation** | Zod | 3.x | Schema validation |

### Real-time & Streaming

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **AI Streaming** | Vercel AI SDK | 3.x | Claude response streaming |
| **WebSockets** | Supabase Realtime | latest | Live updates |

### Authentication

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Auth Provider** | Supabase Auth | latest | JWT-based authentication |
| **Session** | Next.js Middleware | - | Server-side session validation |

### API Client

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **HTTP Client** | Axios / Fetch | - | REST API calls |
| **Type Generation** | openapi-typescript | latest | Auto-generate types from OpenAPI |

---

## Project Structure

```
virtual-cofounder-web/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Continuous integration
│       └── deploy.yml                # Deployment pipeline
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── og-image.png                  # Social sharing image
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                   # Auth route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (dashboard)/              # Main app route group
│   │   │   ├── projects/
│   │   │   │   ├── [projectId]/
│   │   │   │   │   ├── page.tsx      # Project dashboard
│   │   │   │   │   ├── chat/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── artifacts/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── approvals/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── settings/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── page.tsx          # Project list
│   │   │   └── layout.tsx            # Dashboard layout
│   │   │
│   │   ├── api/                      # API routes (if needed)
│   │   │   └── chat/
│   │   │       └── route.ts          # Streaming proxy
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Landing page
│   │   └── globals.css               # Global styles
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── command.tsx           # Command palette
│   │   │   └── textarea.tsx
│   │   │
│   │   ├── layout/                   # Layout components
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-nav.tsx
│   │   │
│   │   ├── chat/                     # Chat components
│   │   │   ├── chat-container.tsx
│   │   │   ├── message-list.tsx
│   │   │   ├── message-bubble.tsx
│   │   │   ├── chat-input.tsx
│   │   │   ├── typing-indicator.tsx
│   │   │   └── streaming-text.tsx
│   │   │
│   │   ├── progress/                 # Progress tracking
│   │   │   ├── phase-tracker.tsx
│   │   │   ├── milestone-list.tsx
│   │   │   └── blocker-card.tsx
│   │   │
│   │   ├── approvals/                # Approval system
│   │   │   ├── approval-card.tsx
│   │   │   ├── approval-modal.tsx
│   │   │   ├── pending-approvals.tsx
│   │   │   └── approval-history.tsx
│   │   │
│   │   ├── artifacts/                # Artifact management
│   │   │   ├── artifact-gallery.tsx
│   │   │   ├── artifact-preview.tsx
│   │   │   ├── artifact-modal.tsx
│   │   │   ├── document-viewer.tsx
│   │   │   ├── code-viewer.tsx
│   │   │   ├── image-viewer.tsx
│   │   │   └── data-table.tsx
│   │   │
│   │   ├── panels/                   # Side panels
│   │   │   ├── project-overview.tsx
│   │   │   ├── phase-details.tsx
│   │   │   └── activity-feed.tsx
│   │   │
│   │   ├── settings/                 # Settings components
│   │   │   ├── automation-settings.tsx
│   │   │   ├── notification-settings.tsx
│   │   │   ├── integration-settings.tsx
│   │   │   └── danger-zone.tsx
│   │   │
│   │   ├── mobile/                   # Mobile-specific
│   │   │   ├── mobile-nav.tsx
│   │   │   └── swipe-panels.tsx
│   │   │
│   │   └── phases/                   # Phase-specific views
│   │       ├── discovery/
│   │       │   ├── idea-explorer.tsx
│   │       │   ├── audience-form.tsx
│   │       │   └── scope-selector.tsx
│   │       ├── branding/
│   │       │   ├── name-suggestions.tsx
│   │       │   ├── domain-checker.tsx
│   │       │   ├── color-picker.tsx
│   │       │   └── voice-config.tsx
│   │       ├── validation/
│   │       │   ├── landing-preview.tsx
│   │       │   ├── waitlist-dashboard.tsx
│   │       │   └── deploy-status.tsx
│   │       ├── development/
│   │       │   ├── task-tracker.tsx
│   │       │   ├── code-diff.tsx
│   │       │   ├── test-results.tsx
│   │       │   └── preview-links.tsx
│   │       ├── marketing/
│   │       │   ├── content-calendar.tsx
│   │       │   ├── ad-preview.tsx
│   │       │   └── campaign-metrics.tsx
│   │       └── fundraising/
│   │           ├── pitch-builder.tsx
│   │           ├── investor-kanban.tsx
│   │           ├── email-composer.tsx
│   │           └── meeting-scheduler.tsx
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAdaptiveMode.ts
│   │   ├── useKeyboardShortcuts.ts
│   │   ├── useChat.ts
│   │   ├── useProject.ts
│   │   ├── useApprovals.ts
│   │   ├── useArtifacts.ts
│   │   └── useAuth.ts
│   │
│   ├── lib/                          # Utilities and helpers
│   │   ├── api/
│   │   │   ├── client.ts             # API client setup
│   │   │   ├── auth.ts               # Auth API calls
│   │   │   ├── projects.ts           # Project API calls
│   │   │   ├── chat.ts               # Chat API calls
│   │   │   ├── approvals.ts          # Approvals API calls
│   │   │   └── artifacts.ts          # Artifacts API calls
│   │   │
│   │   ├── ui/
│   │   │   ├── mode-detection.ts     # Adaptive mode logic
│   │   │   ├── keyboard-shortcuts.ts # Shortcut definitions
│   │   │   └── breakpoints.ts        # Responsive breakpoints
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                 # Class name utility
│   │   │   ├── format.ts             # Formatters
│   │   │   └── validators.ts         # Validation helpers
│   │   │
│   │   └── supabase/
│   │       ├── client.ts             # Browser client
│   │       ├── server.ts             # Server client
│   │       └── middleware.ts         # Auth middleware
│   │
│   ├── types/                        # TypeScript definitions
│   │   ├── api.ts                    # Auto-generated from OpenAPI
│   │   ├── ui/
│   │   │   ├── dashboard.ts          # Dashboard state types
│   │   │   ├── chat.ts               # Chat message types
│   │   │   ├── artifacts.ts          # Artifact types
│   │   │   └── approvals.ts          # Approval types
│   │   └── index.ts                  # Re-exports
│   │
│   ├── stores/                       # Zustand stores
│   │   ├── dashboard-store.ts
│   │   ├── chat-store.ts
│   │   └── notification-store.ts
│   │
│   └── config/
│       ├── site.ts                   # Site metadata
│       ├── navigation.ts             # Nav items
│       └── phases.ts                 # Phase definitions
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── sidebar.test.tsx
│   │   │   ├── chat/
│   │   │   │   └── chat-container.test.tsx
│   │   │   ├── progress/
│   │   │   │   └── phase-tracker.test.tsx
│   │   │   ├── approvals/
│   │   │   │   └── approval-card.test.tsx
│   │   │   ├── artifacts/
│   │   │   │   └── artifact-gallery.test.tsx
│   │   │   ├── panels/
│   │   │   │   └── project-overview.test.tsx
│   │   │   └── mobile/
│   │   │       └── mobile-nav.test.tsx
│   │   ├── hooks/
│   │   │   └── useAdaptiveMode.test.ts
│   │   └── lib/
│   │       └── ui/
│   │           ├── mode-detection.test.ts
│   │           └── keyboard-shortcuts.test.ts
│   │
│   ├── integration/
│   │   ├── auth-flow.test.tsx
│   │   ├── chat-flow.test.tsx
│   │   └── approval-flow.test.tsx
│   │
│   └── e2e/
│       ├── onboarding.spec.ts
│       └── project-lifecycle.spec.ts
│
├── .env.example                      # Environment template
├── .env.local                        # Local environment (gitignored)
├── .eslintrc.json                    # ESLint configuration
├── .prettierrc                       # Prettier configuration
├── components.json                   # shadcn/ui configuration
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies
├── OVERVIEW.md                       # Architecture overview
├── PLAN.md                           # Implementation plan
└── README.md                         # This file
```

---

## Type Definitions

### Core Dashboard Types

```typescript
// src/types/ui/dashboard.ts

/**
 * Dashboard display mode - adapts based on project complexity
 */
export interface DashboardState {
  /** Current display mode */
  mode: 'chat' | 'hybrid' | 'dashboard';
  /** Active phase in the project lifecycle */
  active_phase: PhaseType;
  /** Whether sidebar is collapsed */
  sidebar_collapsed: boolean;
  /** Currently open side panel (if any) */
  active_panel: PanelType | null;
}

/**
 * Project lifecycle phases
 */
export type PhaseType =
  | 'discovery'
  | 'branding'
  | 'validation'
  | 'development'
  | 'marketing'
  | 'fundraising';

/**
 * Side panel types
 */
export type PanelType =
  | 'project_overview'
  | 'phase_details'
  | 'approvals'
  | 'artifacts'
  | 'settings';
```

### Chat Types

```typescript
// src/types/ui/chat.ts

/**
 * Chat message structure
 */
export interface ChatMessage {
  /** Unique message identifier */
  id: string;
  /** Message sender role */
  role: 'user' | 'assistant' | 'system';
  /** Message content (markdown supported) */
  content: string;
  /** ISO 8601 timestamp */
  timestamp: string;
  /** Phase context for this message (if any) */
  phase: PhaseType | null;
  /** Artifacts attached to this message */
  artifacts: Artifact[];
  /** Approval request embedded in message (if any) */
  approval_request: ApprovalRequest | null;
}

/**
 * Streaming state for real-time responses
 */
export interface StreamingState {
  /** Whether currently receiving a stream */
  is_streaming: boolean;
  /** Partial content received so far */
  partial_content: string;
  /** Stream error (if any) */
  error: string | null;
}
```

### Artifact Types

```typescript
// src/types/ui/artifacts.ts

/**
 * Artifact types supported by the platform
 */
export type ArtifactType =
  | 'document'   // Markdown documents, specs, plans
  | 'code'       // Source code files
  | 'image'      // Generated images, logos, screenshots
  | 'link'       // External URLs with metadata
  | 'data';      // Structured data, tables, JSON

/**
 * Artifact structure
 */
export interface Artifact {
  /** Unique artifact identifier */
  id: string;
  /** Artifact category */
  type: ArtifactType;
  /** Human-readable title */
  title: string;
  /** Raw content (markdown, code, JSON, etc.) */
  content: string;
  /** Preview URL for images/deployed artifacts */
  preview_url: string | null;
  /** ISO 8601 creation timestamp */
  created_at: string;
  /** File extension (for code artifacts) */
  file_extension?: string;
  /** Language (for code syntax highlighting) */
  language?: string;
  /** Size in bytes */
  size_bytes?: number;
}
```

### Approval Types

```typescript
// src/types/ui/approvals.ts

/**
 * Approval request requiring user consent
 */
export interface ApprovalRequest {
  /** Unique approval identifier */
  id: string;
  /** Type of action requiring approval */
  type: ApprovalType;
  /** Human-readable action description */
  action_description: string;
  /** Detailed context for the user */
  context: Record<string, unknown>;
  /** Cost in USD (if applicable) */
  cost_usd: number | null;
  /** Whether action is reversible */
  is_reversible: boolean;
  /** Current approval status */
  status: 'pending' | 'approved' | 'rejected';
  /** ISO 8601 creation timestamp */
  created_at: string;
  /** ISO 8601 resolution timestamp */
  resolved_at: string | null;
}

/**
 * Categories of actions requiring approval
 */
export type ApprovalType =
  | 'financial'      // Purchases, subscriptions
  | 'deployment'     // Publishing, going live
  | 'communication'  // Sending emails, posting
  | 'integration'    // Connecting external services
  | 'destructive';   // Deleting, removing
```

### Progress Types

```typescript
// src/types/ui/progress.ts

/**
 * Project progress tracking
 */
export interface ProjectProgress {
  /** Current phase */
  phase: PhaseType;
  /** Completion percentage (0-100) */
  completion_percentage: number;
  /** Completed and pending milestones */
  milestones: Milestone[];
  /** Active blockers */
  blockers: Blocker[];
}

/**
 * Milestone within a phase
 */
export interface Milestone {
  /** Unique milestone identifier */
  id: string;
  /** Milestone title */
  title: string;
  /** Whether milestone is complete */
  completed: boolean;
  /** ISO 8601 completion timestamp */
  completed_at: string | null;
}

/**
 * Blocker preventing progress
 */
export interface Blocker {
  /** Unique blocker identifier */
  id: string;
  /** Blocker category */
  type: 'approval_needed' | 'user_input_needed' | 'external_dependency';
  /** Description of the blocker */
  description: string;
  /** Action user needs to take */
  action_required: string;
}
```

---

## Components

### Required shadcn/ui Components

Install these components from shadcn/ui:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add command
```

### Component Specifications

#### Approval Card

Visual specification for approval requests:

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔒 Approval Required                              [PENDING]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Action: Purchase domain "example.com"                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Provider:     Cloudflare                                │   │
│  │ Cost:         $12.99/year                               │   │
│  │ Reversible:   Yes (within 5 days)                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [✓ Approve]    [✗ Reject]    [? Ask Questions]                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Phase Progress Tracker

Visual specification for phase progress:

```
Discovery ───●─── Branding ───◐─── Validation ───○─── Development ───○─── Marketing ───○─── Fundraising
            ✓        ▲ Current       Locked          Locked            Locked           Locked

Legend:
● Completed    ◐ In Progress    ○ Pending/Locked
```

---

## Implementation Tasks

### Task 1: App Layout Shell

**Status:** PENDING

**Files to Create:**
- `src/app/(dashboard)/layout.tsx` - Dashboard layout wrapper
- `src/components/layout/sidebar.tsx` - Collapsible sidebar
- `src/components/layout/header.tsx` - Top header bar
- `tests/unit/components/layout/sidebar.test.tsx` - Unit tests

**Requirements:**
- Responsive layout with collapsible sidebar
- Header shows project name, phase indicator, user avatar
- Chat input pinned to bottom
- Smooth transitions between collapsed/expanded states

---

### Task 2: Chat Interface

**Status:** PENDING

**Files to Create:**
- `src/components/chat/chat-container.tsx` - Main chat wrapper
- `src/components/chat/message-list.tsx` - Scrollable message list
- `src/components/chat/message-bubble.tsx` - Individual message
- `src/components/chat/chat-input.tsx` - Input with send button
- `tests/unit/components/chat/chat-container.test.tsx` - Unit tests

**Requirements:**
- Streaming message display with typing indicator
- Markdown rendering with syntax highlighting
- Code block copy functionality
- Artifact inline preview
- Auto-scroll to newest message
- Keyboard shortcuts (Cmd+Enter to send)

---

### Task 3: Phase Progress Indicator

**Status:** PENDING

**Files to Create:**
- `src/components/progress/phase-tracker.tsx` - Horizontal progress bar
- `src/components/progress/milestone-list.tsx` - Milestone checklist
- `tests/unit/components/progress/phase-tracker.test.tsx` - Unit tests

**Requirements:**
- Visual distinction between completed, in-progress, and locked phases
- Clickable phases (if accessible)
- Milestone list with checkmarks
- Blocker indicators

---

### Task 4: Approval Request UI

**Status:** PENDING

**Files to Create:**
- `src/components/approvals/approval-card.tsx` - Individual approval card
- `src/components/approvals/approval-modal.tsx` - Detail modal
- `src/components/approvals/pending-approvals.tsx` - List of pending
- `tests/unit/components/approvals/approval-card.test.tsx` - Unit tests

**Requirements:**
- Clear visual hierarchy for action, cost, reversibility
- Three-button action: Approve, Reject, Ask Questions
- Modal for additional context
- Toast notification on approval/rejection

---

### Task 5: Artifact Viewer

**Status:** PENDING

**Files to Create:**
- `src/components/artifacts/artifact-gallery.tsx` - Grid view
- `src/components/artifacts/artifact-preview.tsx` - Thumbnail preview
- `src/components/artifacts/artifact-modal.tsx` - Full view modal
- `tests/unit/components/artifacts/artifact-gallery.test.tsx` - Unit tests

**Artifact Type Handling:**
| Type | Viewer | Features |
|------|--------|----------|
| Document | Markdown preview | Copy, download |
| Code | Syntax-highlighted | Copy, line numbers, file tree |
| Image | Thumbnail grid | Lightbox, download |
| Link | Preview card | Metadata, open in new tab |
| Data | Table view | Sort, filter, export CSV |

---

### Task 6: Project Overview Panel

**Status:** PENDING

**Files to Create:**
- `src/components/panels/project-overview.tsx` - Overview panel
- `src/components/panels/phase-details.tsx` - Phase-specific details
- `tests/unit/components/panels/project-overview.test.tsx` - Unit tests

**Contents:**
- Project summary (name, description, created date)
- Current phase status with progress bar
- Recent activity feed
- Pending blockers list
- Key metrics (artifacts count, messages, approvals)

---

### Task 7: Settings Panel

**Status:** PENDING

**Files to Create:**
- `src/components/panels/settings.tsx` - Settings container
- `src/components/settings/automation-settings.tsx` - Automation level
- `src/components/settings/notification-settings.tsx` - Notifications
- `tests/unit/components/panels/settings.test.tsx` - Unit tests

**Settings Sections:**
| Section | Options |
|---------|---------|
| Automation Level | Conservative ↔ Autonomous slider |
| Notifications | Email, push, in-app toggles |
| Integrations | Connected services list |
| API Keys | Managed via Invoke integration |
| Danger Zone | Delete project button |

---

### Task 8: Adaptive Mode Switching

**Status:** PENDING

**Files to Create:**
- `src/lib/ui/mode-detection.ts` - Mode calculation logic
- `src/hooks/useAdaptiveMode.ts` - React hook
- `tests/unit/lib/ui/mode-detection.test.ts` - Unit tests

**Logic:**
```typescript
function detectMode(project: Project): DashboardMode {
  const artifactCount = project.artifacts.length;
  const phase = project.current_phase;

  if (phase === 'discovery' || artifactCount < 5) {
    return 'chat';
  }

  if (['branding', 'validation'].includes(phase) || artifactCount < 20) {
    return 'hybrid';
  }

  return 'dashboard';
}
```

---

### Task 9: Mobile Responsive Design

**Status:** PENDING

**Files to Create:**
- `src/components/mobile/mobile-nav.tsx` - Bottom navigation
- `src/components/mobile/swipe-panels.tsx` - Swipeable side panels
- `tests/unit/components/mobile/mobile-nav.test.tsx` - Unit tests

**Breakpoints:**
```typescript
const BREAKPOINTS = {
  mobile: '< 640px',    // Single column, bottom nav, no sidebar
  tablet: '640-1024px', // Collapsible sidebar, compact header
  desktop: '> 1024px'   // Full layout with all panels
};
```

**Mobile Behavior:**
- Bottom navigation bar (Chat, Artifacts, Approvals, Settings)
- Swipe left/right between panels
- Pull-to-refresh for updates
- Floating action button for quick chat input

---

### Task 10: Keyboard Shortcuts

**Status:** PENDING

**Files to Create:**
- `src/lib/ui/keyboard-shortcuts.ts` - Shortcut definitions
- `src/hooks/useKeyboardShortcuts.ts` - Global shortcut hook
- `tests/unit/lib/ui/keyboard-shortcuts.test.ts` - Unit tests

**Shortcut Map:**
| Shortcut | Action |
|----------|--------|
| `Cmd + K` | Focus chat input |
| `Cmd + /` | Toggle sidebar |
| `Cmd + .` | Open command palette |
| `Escape` | Close modal/panel |
| `Cmd + Enter` | Send message |
| `Cmd + Shift + A` | View pending approvals |
| `Cmd + Shift + P` | Go to project overview |
| `Cmd + 1-6` | Jump to phase (1=Discovery, 6=Fundraising) |

---

## API Integration

### Backend Services

The frontend consumes REST APIs from the Python backend microservices:

| Service | Base URL | Description |
|---------|----------|-------------|
| **Auth** | `/api/auth` | Authentication and sessions |
| **Projects** | `/api/projects` | Project CRUD and phases |
| **Chat** | `/api/chat` | Messages and streaming |
| **Memory** | `/api/memory` | Context search |
| **Approvals** | `/api/approvals` | Approval queue |
| **Phases** | `/api/phases/{phase}` | Phase-specific operations |

### Type Generation

Auto-generate TypeScript types from the backend OpenAPI specification:

```bash
# Generate types from running backend
npx openapi-typescript http://localhost:8000/openapi.json -o src/types/api.ts

# Or from a static spec file
npx openapi-typescript ./openapi.json -o src/types/api.ts
```

### API Client Setup

```typescript
// src/lib/api/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// REST API base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Authenticated fetch wrapper
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}
```

### Key API Endpoints

#### Authentication

```typescript
// Login
POST /api/auth/login
Body: { email: string, password: string }
Response: { user: User, session: Session }

// Signup
POST /api/auth/signup
Body: { email: string, password: string, name: string }
Response: { user: User, session: Session }

// Get current session
GET /api/auth/session
Response: { user: User, session: Session } | null
```

#### Projects

```typescript
// List projects
GET /api/projects
Response: { projects: Project[] }

// Get project
GET /api/projects/:id
Response: { project: Project }

// Create project
POST /api/projects
Body: { name: string, description?: string }
Response: { project: Project }

// Get project phases
GET /api/projects/:id/phases
Response: { phases: PhaseProgress[] }
```

#### Chat

```typescript
// Send message (streaming)
POST /api/chat/messages
Body: { project_id: string, content: string }
Response: Server-Sent Events stream

// Get message history
GET /api/chat/messages?project_id=:id&limit=50&offset=0
Response: { messages: ChatMessage[], total: number }
```

#### Approvals

```typescript
// List pending approvals
GET /api/approvals?status=pending&project_id=:id
Response: { approvals: ApprovalRequest[] }

// Approve
POST /api/approvals/:id/approve
Response: { approval: ApprovalRequest }

// Reject
POST /api/approvals/:id/reject
Body: { reason?: string }
Response: { approval: ApprovalRequest }
```

---

## Design System

### Color Palette

```css
:root {
  /* Primary - Used for main actions and emphasis */
  --primary-50: #f0f9ff;
  --primary-100: #e0f2fe;
  --primary-500: #0ea5e9;
  --primary-600: #0284c7;
  --primary-700: #0369a1;

  /* Success - Completed, approved states */
  --success-50: #f0fdf4;
  --success-500: #22c55e;
  --success-700: #15803d;

  /* Warning - Pending, needs attention */
  --warning-50: #fffbeb;
  --warning-500: #f59e0b;
  --warning-700: #b45309;

  /* Danger - Errors, destructive actions */
  --danger-50: #fef2f2;
  --danger-500: #ef4444;
  --danger-700: #b91c1c;

  /* Neutral - Text, backgrounds, borders */
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-500: #737373;
  --neutral-700: #404040;
  --neutral-900: #171717;
}
```

### Typography

```css
:root {
  /* Font families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem;   /* 8px */
  --radius-xl: 0.75rem;  /* 12px */
  --radius-2xl: 1rem;    /* 16px */
  --radius-full: 9999px;
}
```

---

## Accessibility

### Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|----------------|
| **Keyboard Navigation** | Full keyboard access to all interactive elements |
| **Screen Reader** | ARIA labels on all interactive elements |
| **Color Contrast** | Minimum 4.5:1 for normal text, 3:1 for large text |
| **Focus Indicators** | Visible focus rings (2px solid, offset) |
| **Reduced Motion** | Respect `prefers-reduced-motion` preference |
| **Touch Targets** | Minimum 44x44px for touch targets |

### ARIA Patterns

```tsx
// Chat message
<div
  role="log"
  aria-label="Chat messages"
  aria-live="polite"
  aria-relevant="additions"
>
  {messages.map(msg => (
    <article
      key={msg.id}
      aria-label={`${msg.role} message`}
    >
      {msg.content}
    </article>
  ))}
</div>

// Approval card
<div
  role="alertdialog"
  aria-labelledby="approval-title"
  aria-describedby="approval-description"
>
  <h2 id="approval-title">Approval Required</h2>
  <p id="approval-description">{action}</p>
  <div role="group" aria-label="Approval actions">
    <button>Approve</button>
    <button>Reject</button>
  </div>
</div>
```

### Focus Management

```typescript
// Focus trap for modals
import { useFocusTrap } from '@mantine/hooks';

function Modal({ children }) {
  const focusTrapRef = useFocusTrap();

  return (
    <div ref={focusTrapRef} role="dialog" aria-modal="true">
      {children}
    </div>
  );
}
```

---

## Development

### Prerequisites

- Node.js 20.x LTS
- pnpm 8.x (recommended) or npm 10.x
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/virtual-cofounder-web.git
cd virtual-cofounder-web

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
# NEXT_PUBLIC_API_URL=

# Start development server
pnpm dev
```

### Environment Variables

```bash
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_SENTRY=false
```

### Scripts

```bash
# Development
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Run Prettier

# Testing
pnpm test         # Run unit tests
pnpm test:watch   # Watch mode
pnpm test:cov     # With coverage
pnpm e2e          # Run E2E tests (Playwright)

# Type generation
pnpm gen:types    # Generate API types from OpenAPI
```

---

## Testing

### Test Stack

| Tool | Purpose |
|------|---------|
| **Vitest** | Unit test runner |
| **React Testing Library** | Component testing |
| **MSW** | API mocking |
| **Playwright** | E2E testing |

### Unit Test Example

```typescript
// tests/unit/components/approvals/approval-card.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ApprovalCard } from '@/components/approvals/approval-card';

describe('ApprovalCard', () => {
  const mockApproval = {
    id: '1',
    type: 'financial',
    action_description: 'Purchase domain "example.com"',
    cost_usd: 12.99,
    is_reversible: true,
    status: 'pending',
  };

  it('renders approval details', () => {
    render(<ApprovalCard approval={mockApproval} />);

    expect(screen.getByText('Purchase domain "example.com"')).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText('Reversible')).toBeInTheDocument();
  });

  it('calls onApprove when approve button clicked', () => {
    const onApprove = vi.fn();
    render(<ApprovalCard approval={mockApproval} onApprove={onApprove} />);

    fireEvent.click(screen.getByRole('button', { name: /approve/i }));

    expect(onApprove).toHaveBeenCalledWith('1');
  });

  it('calls onReject when reject button clicked', () => {
    const onReject = vi.fn();
    render(<ApprovalCard approval={mockApproval} onReject={onReject} />);

    fireEvent.click(screen.getByRole('button', { name: /reject/i }));

    expect(onReject).toHaveBeenCalledWith('1');
  });
});
```

### E2E Test Example

```typescript
// tests/e2e/approval-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Approval Flow', () => {
  test('user can approve a pending action', async ({ page }) => {
    // Login
    await page.goto('/login');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="password"]', 'password');
    await page.click('button[type="submit"]');

    // Navigate to project
    await page.click('text=My Project');

    // Find and approve pending approval
    await page.click('[data-testid="approvals-tab"]');
    await page.click('text=Approve');

    // Verify approval was successful
    await expect(page.locator('text=Approved')).toBeVisible();
  });
});
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Environment Variables in Vercel

Set these in the Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_API_URL` | Backend API URL |

### Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t virtual-cofounder-web .
docker run -p 3000:3000 virtual-cofounder-web
```

---

## Roadmap

### Phase 1: Foundation (Current)
- [ ] Project scaffolding and configuration
- [ ] Auth flow implementation
- [ ] Basic layout shell
- [ ] Chat interface with streaming

### Phase 2: Core Features
- [ ] Approval system UI
- [ ] Artifact viewer
- [ ] Phase progress tracking
- [ ] Settings panel

### Phase 3: Adaptive Experience
- [ ] Mode detection and switching
- [ ] Mobile responsive design
- [ ] Keyboard shortcuts
- [ ] Command palette

### Phase 4: Polish
- [ ] Dark mode
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Error boundaries and fallbacks

### Future Enhancements

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| Dark Mode | System preference + manual toggle | High |
| Themes | Customizable color schemes | Medium |
| Widgets | Draggable dashboard widgets | Low |
| Collaboration | Multi-user presence indicators | Low |
| Export | PDF/PNG export of dashboards | Medium |
| Offline | Service worker for offline support | Low |

---

## Completion Checklist

### Setup
- [ ] Next.js 14 project initialized
- [ ] TypeScript configured
- [ ] Tailwind CSS configured
- [ ] shadcn/ui installed
- [ ] ESLint + Prettier configured
- [ ] Vitest configured
- [ ] Playwright configured

### Components
- [ ] All shadcn/ui components installed
- [ ] Layout shell complete
- [ ] Chat interface complete
- [ ] Phase tracker complete
- [ ] Approval UI complete
- [ ] Artifact viewer complete
- [ ] Settings panel complete
- [ ] Mobile components complete

### Features
- [ ] Authentication flow
- [ ] API client setup
- [ ] Type generation pipeline
- [ ] Adaptive mode switching
- [ ] Keyboard shortcuts
- [ ] Real-time updates

### Quality
- [ ] All unit tests passing
- [ ] E2E tests passing
- [ ] Accessibility audit passed
- [ ] Mobile testing complete
- [ ] Performance benchmarks met

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

---

## Support

- **Documentation:** [docs.virtualcofounder.ai](https://docs.virtualcofounder.ai)
- **Issues:** [GitHub Issues](https://github.com/yourusername/virtual-cofounder-web/issues)
- **Discord:** [Join our community](https://discord.gg/virtualcofounder)
