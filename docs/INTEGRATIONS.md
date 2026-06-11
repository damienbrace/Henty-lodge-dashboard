# Integrations Plan

## Principle

Integrations should be added after the manual MVP is useful.

Do not make the MVP dependent on external APIs.

---

## Integration phases

### Phase 1 — Manual and seed data

- Use demo data
- Allow manual data entry
- Store data in Supabase
- Build all screens and workflows

### Phase 2 — Import/export

- CSV import for bookings, guests and metrics
- CSV export for reports
- Manual Google Ads/GA4 data import if needed

### Phase 3 — Read-only sync

Connect to external APIs and pull data into local tables.

### Phase 4 — Controlled write actions

Allow the app to create drafts or paused items only.

Examples:

- Create a paused Google Ads campaign
- Create an email campaign draft
- Draft a review reply

### Phase 5 — Human-approved automation

Allow limited automation with approval gates and budget/safety rules.

---

## Cloudbeds

### Purpose

Cloudbeds should become the source of truth for:

- Bookings
- Guests
- Rooms
- Availability
- Blocked dates
- Revenue
- Booking source

### Sync direction

Start read-only.

```txt
Cloudbeds → Henty Lodge dashboard
```

Avoid writing back to Cloudbeds in the first integration phase.

### Local tables affected

- `rooms`
- `guests`
- `bookings`
- `marketing_metrics` where source attribution is relevant
- `activity_log`

### MVP fallback

Manual bookings and rooms must work before Cloudbeds is connected.

---

## Google Analytics 4

### Purpose

GA4 should power website and funnel metrics.

Useful metrics:

- Website visitors
- Top landing pages
- Traffic source
- Booking button clicks
- Enquiry form submissions
- Gift voucher clicks
- Conversion events

### Required setup

Website events should be intentionally tracked.

Suggested events:

- `view_accommodation_page`
- `click_book_now`
- `check_availability`
- `submit_enquiry`
- `click_gift_voucher`
- `booking_confirmed` if available

### Important note

Use Cloudbeds as the source of truth for final booking/revenue numbers. Use GA4 for marketing behaviour and funnel analysis.

---

## Google Search Console

### Purpose

Search Console should power SEO insights.

Useful metrics:

- Search queries
- Clicks
- Impressions
- CTR
- Average position
- Top pages
- Low CTR opportunities

### Dashboard use

AI can suggest:

- Better page titles
- Better meta descriptions
- New SEO pages
- Content updates
- Landing page improvements

---

## Google Business Profile

### Purpose

Google Business Profile should power local marketing and reputation.

Useful data:

- Google reviews
- Rating
- Website clicks
- Calls
- Direction requests
- Local search performance

### Dashboard use

- Review tracking
- Review reply drafting
- Local visibility summary
- Google profile improvement checklist

---

## Google Ads

### Purpose

Google Ads should power paid campaign performance and later AI campaign creation.

Useful data:

- Spend
- Impressions
- Clicks
- Conversions
- Cost per conversion
- Conversion value
- ROAS
- Campaigns
- Ad groups
- Keywords
- Ads
- Search terms

### MVP approach

MVP should only draft campaigns in the dashboard.

### Later safe approach

1. AI generates campaign draft.
2. User edits and approves.
3. Backend creates a paused campaign in Google Ads.
4. User manually launches it from the dashboard or Google Ads.
5. AI monitors performance and suggests improvements.

AI must not launch live campaigns or increase budgets without explicit approval.

---

## Email platform

Possible options later:

- Mailchimp
- Brevo
- Klaviyo
- ConvertKit
- Resend/custom email

Useful data:

- Email list size
- Segments
- Opens
- Clicks
- Unsubscribes
- Campaign results
- Bookings from campaigns where attribution exists

### MVP approach

Generate email drafts only.

---

## Integration storage pattern

Use local tables with optional `external_id` fields.

For each integration sync, store:

- Source name
- External ID
- Last synced timestamp
- Raw data where useful
- Normalised fields used by UI

---

## Error handling

Each integration should have:

- Last successful sync time
- Last error message
- Manual re-sync button
- Connection status
- Clear fallback to existing local data

