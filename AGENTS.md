# AGENTS.md — Henty Lodge Command Centre

## Project purpose

Build an MVP dashboard for **Henty Lodge** that acts as a small accommodation operating system.

The product should answer this every morning:

> What is happening at Henty Lodge today, what needs attention, and what should I do next to improve bookings, guest experience, and profit?

The first version is a **manual-data MVP** with clean UI and useful AI suggestions. External integrations such as Cloudbeds, Google Analytics, Google Search Console, Google Business Profile, and Google Ads should be designed as later adapters, not hard requirements for the first build.

---

## Product name

**Henty Lodge Command Centre**

---

## MVP priority

Build the core dashboard shown in the mockup first.

Required MVP pages:

1. **Dashboard** — daily command centre
2. **Bookings** — calendar/list view of upcoming stays
3. **Guests** — guest directory and profile notes
4. **Tasks** — cleaning, maintenance, marketing and admin tasks
5. **Reviews** — ratings, recent reviews and review request tracker
6. **Finance** — revenue, occupancy, source mix and basic trends
7. **Marketing & AI** — marketing metrics, content ideas and AI campaign drafts

Do not overbuild the first version. The MVP should feel useful even with sample/manual data.

---

## Recommended tech stack

Use this unless the user explicitly changes direction.

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI components:** shadcn/ui
- **Database:** Supabase Postgres
- **Auth:** Supabase Auth
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod
- **AI:** OpenAI API through server-side routes only
- **Hosting:** Vercel
- **Automation later:** n8n or Make

---

## Non-negotiable product rules

1. **Manual data first.** Every integration-backed feature must work with manually entered or seed data before API work begins.
2. **No direct client-side API secrets.** Cloudbeds, Google, OpenAI, Meta, email, and any third-party credentials must only be used server-side.
3. **AI suggestions are advisory by default.** AI can draft campaigns, emails, posts and tasks, but the user approves before sending, publishing or launching.
4. **Google Ads must use human approval.** The AI may generate a campaign draft. Later it may create a paused campaign. It must not launch live ads or increase budgets without explicit approval.
5. **Cloudbeds remains the booking source of truth later.** When integrated, bookings, guests, rooms, revenue and availability should sync from Cloudbeds rather than being re-created as a competing PMS.
6. **Keep UI simple.** Prioritise readable cards, clear status labels, simple charts, and fast daily decision-making.
7. **Every AI output should be editable.** The user should be able to edit campaign copy, email text, review replies and task suggestions.
8. **Log important actions.** Store when a campaign, email, review reply, booking note, or task was generated, edited, approved or completed.
9. **Use Australian business context.** Henty Lodge is in the Ferguson Valley / Bunbury / South West WA context. Campaign examples should naturally reference Perth, Bunbury, Ferguson Valley and South West WA where relevant.
10. **Use the included mockups as visual direction.** See `docs/UI_MOCKUPS.md` and `assets/mockups/`.

---

## Development approach

Work in small vertical slices.

Preferred order:

1. Create layout, sidebar, topbar and design system.
2. Add seeded demo data.
3. Build the main dashboard cards.
4. Build the bookings page.
5. Build guests, tasks and reviews.
6. Build finance snapshot.
7. Build marketing and AI page.
8. Add Supabase persistence.
9. Add AI generation endpoints.
10. Add integrations later.

Each feature should have:

- UI state
- Loading state
- Empty state
- Error state where relevant
- Seed/sample data
- Clear type definitions

---

## Suggested app structure

```txt
src/
  app/
    dashboard/
      page.tsx
    bookings/
      page.tsx
    guests/
      page.tsx
    tasks/
      page.tsx
    reviews/
      page.tsx
    finance/
      page.tsx
    marketing/
      page.tsx
    settings/
      page.tsx
    api/
      ai/
        daily-briefing/route.ts
        campaign-draft/route.ts
        review-reply/route.ts
      integrations/
        cloudbeds/route.ts
        google-analytics/route.ts
        google-ads/route.ts
  components/
    layout/
    dashboard/
    bookings/
    guests/
    tasks/
    reviews/
    finance/
    marketing/
    ai/
    ui/
  lib/
    db/
    seed/
    ai/
    integrations/
    utils/
  types/
```

---

## Core UI style

Use the mockups as the main design direction.

- Dark forest-green sidebar
- Warm off-white content background
- White cards with subtle borders and soft shadows
- Rounded cards, generous spacing and calm typography
- Green for positive/available/booked
- Soft red/salmon for gaps, warnings and negative trends
- Gold/amber for revenue, reviews and opportunity states
- Purple/indigo for AI suggestions and marketing intelligence

See `docs/DESIGN_SYSTEM.md` for more detail.

---

## Data model guidance

Start with these core tables/entities:

- `rooms`
- `guests`
- `bookings`
- `tasks`
- `reviews`
- `marketing_metrics`
- `campaigns`
- `campaign_ideas`
- `ai_suggestions`
- `activity_log`
- `settings`

See `docs/DATA_MODEL.md` for suggested fields.

---

## AI feature rules

AI should help the owner decide and draft, not act recklessly.

MVP AI features:

1. **Daily briefing**
   - Summarise check-ins, check-outs, tasks, revenue, reviews, empty dates and urgent actions.

2. **AI suggestion card**
   - Identify the most useful next action from current dashboard data.

3. **Campaign draft generator**
   - For empty dates, create draft Google Ads/social/email campaign copy.

4. **Review reply drafter**
   - Draft warm, professional replies to guest reviews.

5. **Content idea generator**
   - Suggest social posts, emails and blog ideas based on season, booking gaps and local context.

Every AI output should include:

- Title
- Reason it was suggested
- Draft output
- Editable fields
- Approval/save action
- Activity log entry

See `docs/AI_WORKFLOWS.md`.

---

## Integration strategy

Do not build integrations first. Build adapters after the manual MVP works.

Integration phases:

1. **Manual data and seed data**
2. **CSV/import support**
3. **Read-only API sync**
4. **Controlled write actions**
5. **Human-approved automation**

Later integrations:

- Cloudbeds: bookings, rooms, guests, availability, revenue
- GA4: visitors, booking clicks, enquiries, top pages, traffic sources
- Google Search Console: search queries, clicks, impressions, CTR and position
- Google Business Profile: reviews, calls, website clicks, directions
- Google Ads: spend, clicks, conversions, campaigns, ads, keywords
- Email platform: campaigns, segments, opens, clicks and booking outcomes

See `docs/INTEGRATIONS.md`.

---

## MVP definition of done

The MVP is done when:

- The main dashboard matches the supplied visual direction.
- The owner can see today’s check-ins, check-outs, current guests, occupancy, revenue, review score and tasks.
- The owner can view bookings in a calendar/list style.
- The owner can add/edit guests, bookings, tasks and reviews manually.
- The owner can see a basic marketing and finance snapshot.
- The AI can generate at least one useful suggestion from the data.
- The AI can draft a campaign for empty dates.
- The system works with sample data and can be demoed without external API keys.

---

## What not to build in MVP

Do not build these in the first version unless explicitly requested:

- Full PMS replacement
- Fully autonomous Google Ads launching
- Automatic budget increases
- Complex channel manager logic
- Accounting reconciliation
- Advanced competitor scraping
- Multi-property support
- Staff payroll
- Full email campaign sending
- Full social media publishing

---

## File references

Use these project reference files:

- `README.md`
- `docs/PROJECT_OVERVIEW.md`
- `docs/MVP_SCOPE.md`
- `docs/FEATURES.md`
- `docs/DATA_MODEL.md`
- `docs/INTEGRATIONS.md`
- `docs/AI_WORKFLOWS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/UI_MOCKUPS.md`
- `docs/ROADMAP.md`
- `docs/DEVELOPMENT_TASKS.md`
- `docs/SECURITY_AND_APPROVALS.md`
- `docs/PROMPTS.md`

