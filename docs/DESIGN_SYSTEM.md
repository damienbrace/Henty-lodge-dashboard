# Design System

## Visual direction

Use the supplied mockups as the visual foundation.

The design should feel:

- Boutique
- Calm
- Premium but not corporate
- Operationally clear
- Warm and local
- Easy to scan in the morning

---

## Layout

### Sidebar

- Fixed left sidebar
- Dark forest green background
- Henty Lodge logo at top
- Main navigation:
  - Dashboard
  - Bookings
  - Guests
  - Marketing
  - Reviews
  - Tasks
  - Finance
  - Local Guide
  - Reports
  - AI Assistant
  - Settings
- Owner profile near bottom
- Sign out at bottom

### Page content

- Off-white background
- Max-width content area
- Cards arranged in responsive grid
- Top header with title, subtitle, date range and action button

---

## Colour palette

Suggested CSS variables:

```css
:root {
  --background: #f7f5ef;
  --card: #ffffff;
  --sidebar: #062f25;
  --sidebar-muted: #0f4437;
  --primary: #0b5a45;
  --primary-soft: #d9eee5;
  --success: #2f8f5b;
  --warning: #d89a2b;
  --danger: #d96b6b;
  --ai: #6d4aff;
  --text: #111827;
  --muted: #6b7280;
  --border: #e7e2d8;
}
```

---

## Typography

- Use a clean sans-serif for app UI.
- Headings should be clear and slightly bold.
- Cards should favour large numbers and short labels.
- Avoid dense tables where cards would be easier.

Suggested hierarchy:

- Page title: 28–34px, bold
- Section title: 16–18px, semibold
- Card metric: 26–34px, bold
- Card label: 12–14px, uppercase or semibold
- Body text: 14–16px
- Muted text: 12–14px

---

## Components

### KPI cards

Each KPI card should include:

- Label
- Main value
- Icon or small badge
- Subtext
- Trend indicator where useful

Examples:

- Check-ins: `1 today`
- Occupancy: `67% this month`
- Revenue: `$7,320 +12% vs last month`
- Review score: `4.9 from 24 reviews`

### Status badges

Suggested statuses:

- Booked
- Available
- Gap
- Blocked
- Active
- Draft
- Pending
- Sent
- Completed

### AI cards

AI cards should stand out subtly.

Use:

- Soft purple/cream tint
- Sparkle icon
- Clear recommendation title
- Short reason
- Primary action button
- Secondary link to view all suggestions

### Tables

Tables should be used for:

- Campaign performance
- Booking lists
- Finance breakdown
- Review requests

Keep rows compact and readable.

### Charts

Use simple Recharts components:

- Line chart for trends
- Donut chart for source mix
- Bar/funnel style for marketing funnel
- Calendar heatmap for occupancy

---

## Mockup references

Main dashboard:

![Main dashboard and sub dashboards](../assets/mockups/main-dashboard-and-subdashboards.png)

Marketing dashboard:

![Marketing dashboard](../assets/mockups/marketing-dashboard.png)

Google Ads overview:

![Google Ads overview](../assets/mockups/google-ads-overview.png)

AI Google Ads builder:

![AI Google Ads builder](../assets/mockups/ai-google-ads-builder.png)
