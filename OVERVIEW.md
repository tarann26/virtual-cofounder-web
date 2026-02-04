# Frontend Implementation Plans

> **Status:** DEFERRED - Implement after backend microservices are stable
> **Dependencies:** All backend services (Features 01-09)

This document consolidates all frontend/UI work to be implemented later.

---

## Tech Stack (When Ready)

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| State | React Query (server state), Zustand (client state) |
| API Client | Generated from OpenAPI spec |

---

## Backend API Contract

The frontend will consume REST APIs from the Python backend services.

```typescript
// Auto-generate types from backend OpenAPI spec
// npx openapi-typescript http://localhost:8000/openapi.json -o src/types/api.ts
```

---

## UI Features (Consolidated from Feature Plans)

### From Feature 10: Dashboard UI

> **Full details:** See `PLAN.md` for complete implementation tasks

**Core Components:**
- App layout shell (sidebar, header, main content)
- Chat interface with streaming
- Phase progress indicator
- Approval request cards and modals
- Artifact viewer (documents, code, images)
- Project overview panel
- Settings panel
- Adaptive mode switching (chat → hybrid → dashboard)
- Mobile responsive design
- Keyboard shortcuts

### From Feature 04: Discovery Phase
- Idea exploration chat flow
- Audience definition forms
- Scope setting interface

### From Feature 05: Branding Phase
- Name suggestion cards
- Domain availability checker UI
- Color palette picker
- Brand voice configurator

### From Feature 06: Validation Phase
- Landing page preview
- Waitlist dashboard
- Deployment status indicators

### From Feature 07: Development Pipeline
- Task progress tracker
- Code diff viewer
- Test results display
- Preview deployment links

### From Feature 08: Marketing & Outreach
- Content calendar view
- Ad variant preview
- Campaign metrics dashboard

### From Feature 09: Fundraising
- Pitch deck builder
- Investor pipeline kanban
- Outreach email composer
- Meeting scheduler

---

## Implementation Order (When Ready)

1. **API Client Setup** - Generate types from OpenAPI, configure React Query
2. **Auth Flow** - Login, signup, session management
3. **Layout Shell** - Sidebar, header, responsive nav
4. **Chat Interface** - Core interaction layer
5. **Phase Views** - One view per phase
6. **Approval System** - Cards, modals, notifications
7. **Artifact Management** - Viewer, gallery, export
8. **Settings & Admin** - User preferences, integrations

---

## Design System Notes

```
- Chat-first: All phases start with conversational UI
- Progressive disclosure: Dashboard elements appear as project matures
- Approval gates: Clear visual distinction for actions needing consent
- Real-time: Streaming responses, live progress updates
```

---

## API Endpoints to Consume

Each backend service exposes REST endpoints. Frontend will need clients for:

| Service | Base URL | Key Endpoints |
|---------|----------|---------------|
| Auth | `/api/auth` | login, signup, session |
| Projects | `/api/projects` | CRUD, phases |
| Chat | `/api/chat` | messages, stream |
| Memory | `/api/memory` | search, context |
| Approvals | `/api/approvals` | pending, approve, reject |
| Phases | `/api/phases/{phase}` | status, artifacts |

---

## Placeholder Until Implementation

For now, backend services can be tested via:
- Swagger UI at `http://localhost:8000/docs`
- curl / httpie
- Postman collection (generate from OpenAPI)

---

## Checklist (For Later)

- [ ] Generate TypeScript types from OpenAPI
- [ ] Set up Next.js project with Tailwind + shadcn
- [ ] Implement auth flow
- [ ] Build layout shell
- [ ] Create chat interface
- [ ] Add phase-specific views
- [ ] Implement approval UI
- [ ] Add artifact viewer
- [ ] Mobile responsive pass
- [ ] Accessibility audit
