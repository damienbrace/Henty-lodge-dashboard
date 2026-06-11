# MVP Scope

## MVP name

**Henty Lodge Command Centre — Manual Data MVP**

---

## MVP goal

Create a useful daily operating dashboard before building deep integrations.

The first version should answer:

> What is happening today, what needs attention, and what should I do next?

---

## Included in MVP

### 1. Main dashboard

- Good morning header
- Weather/date placeholder
- KPI cards:
  - Check-ins
  - Check-outs
  - Current guests
  - Occupancy
  - Revenue this month
  - Review score
- Upcoming bookings card
- 30-day occupancy calendar
- Today’s tasks
- Guest messages placeholder
- Review request tracker
- Marketing overview card
- AI suggestion card

### 2. Bookings page

- Calendar view
- List view
- Booking details
- Booking source
- Stay dates
- Room/stay type
- Revenue
- Status
- Manual add/edit booking

### 3. Guests page

- Guest directory
- Guest profile panel
- Contact details
- Stay history
- Tags
- Notes
- Manual add/edit guest

### 4. Tasks page

- Task list
- Task type: cleaning, maintenance, marketing, admin
- Due date/time
- Priority
- Status
- Room/area association
- Manual add/edit/complete task

### 5. Reviews page

- Average rating
- Review count
- Recent reviews
- Pending review requests
- Mark review request as sent
- AI review reply draft later in MVP

### 6. Finance page

- Monthly revenue
- Occupancy
- Average nightly rate
- Direct booking percentage
- Revenue by source
- Simple trend chart

### 7. Marketing & AI page

- Website visitors
- Booking button clicks
- Enquiries
- Conversion rate
- Campaign/content ideas
- AI campaign draft generator
- AI content idea generator

---

## Excluded from MVP

Do not include these in the first version:

- Live Cloudbeds integration
- Live Google Ads campaign publishing
- Automatic ad budget changes
- Automatic email sending
- Social media posting
- Full accounting reconciliation
- Competitor price scraping
- Multi-property support
- Staff permissions beyond basic auth
- Complex reporting exports

---

## MVP data approach

Use this progression:

1. Seed data in code
2. Manual entry forms
3. Supabase persistence
4. CSV import/export
5. Read-only integrations
6. Controlled write actions

---

## MVP AI approach

AI can:

- Summarise dashboard data
- Suggest next actions
- Draft campaign ideas
- Draft social posts
- Draft review replies
- Draft guest follow-up messages

AI cannot in MVP:

- Send guest messages automatically
- Publish ads automatically
- Change budgets automatically
- Modify bookings automatically

---

## MVP demo flow

A strong demo should show:

1. Owner opens dashboard in the morning.
2. Sees today’s check-in/check-out and tasks.
3. Sees a 3-night mid-week gap.
4. Clicks AI suggestion.
5. AI drafts a mid-week escape campaign.
6. Owner edits/saves the campaign draft.
7. Owner marks review requests and tasks as done.
