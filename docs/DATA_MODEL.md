# Data Model

This is the suggested MVP database structure.

Use UUID primary keys unless the final implementation chooses another convention.

---

## rooms

Stores rooms/stay spaces.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| name | text | Example: Deluxe King Suite |
| type | text | Room type/category |
| capacity | integer | Number of guests |
| status | text | available, occupied, blocked, maintenance |
| notes | text | Internal notes |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## guests

Stores guest CRM records.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| first_name | text |  |
| last_name | text |  |
| email | text | Optional |
| phone | text | Optional |
| location | text | Example: Perth, WA |
| tags | text[] | Guest tags |
| preferences | jsonb | Wine, dietary, room, occasion notes |
| notes | text | Internal notes |
| last_stay_at | date | Derived or stored |
| last_contacted_at | timestamp |  |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## bookings

Stores bookings for manual MVP and later Cloudbeds sync.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| external_id | text | Cloudbeds ID later |
| guest_id | uuid | References guests |
| room_id | uuid | References rooms |
| check_in | date |  |
| check_out | date |  |
| nights | integer | Can be calculated |
| source | text | direct, booking_com, airbnb, phone, manual |
| status | text | booked, checked_in, checked_out, cancelled, no_show |
| total_value | numeric | Booking value |
| paid_amount | numeric | Optional |
| commission_amount | numeric | Optional |
| notes | text | Internal notes |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## tasks

Stores operational tasks.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| title | text |  |
| description | text | Optional |
| type | text | cleaning, maintenance, marketing, admin, guest_follow_up, supplies |
| priority | text | low, medium, high, urgent |
| status | text | todo, in_progress, done, cancelled |
| due_at | timestamp | Optional |
| room_id | uuid | Optional |
| booking_id | uuid | Optional |
| guest_id | uuid | Optional |
| created_by | text | user, ai, integration |
| completed_at | timestamp | Optional |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## reviews

Stores guest reviews and review requests.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| guest_id | uuid | Optional |
| booking_id | uuid | Optional |
| platform | text | google, airbnb, booking_com, facebook, manual |
| rating | numeric | 1–5 |
| review_text | text | Optional |
| reply_text | text | Optional |
| reply_status | text | not_needed, draft, approved, posted |
| review_request_status | text | not_ready, ready, sent, received, no_response |
| requested_at | timestamp | Optional |
| received_at | timestamp | Optional |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## marketing_metrics

Stores daily/weekly marketing metrics. Initially manual or seeded; later synced from GA4/Search Console/GBP.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| date | date | Metric date |
| source | text | ga4, search_console, business_profile, manual |
| website_visitors | integer | Optional |
| booking_clicks | integer | Optional |
| enquiries | integer | Optional |
| direct_bookings | integer | Optional |
| conversion_rate | numeric | Optional |
| impressions | integer | Optional |
| clicks | integer | Optional |
| ctr | numeric | Optional |
| average_position | numeric | Optional |
| raw_data | jsonb | Store source payload if needed |
| created_at | timestamp |  |

---

## campaigns

Stores campaign drafts and later launched campaigns.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| name | text |  |
| type | text | google_ads, email, social, website, gbp_post |
| status | text | idea, draft, approved, active, paused, completed, archived |
| goal | text | bookings, awareness, review_requests, vouchers |
| target_dates | daterange | Optional |
| audience | text | Example: Perth couples |
| budget_daily | numeric | Optional |
| budget_total | numeric | Optional |
| landing_page | text | Optional |
| copy | jsonb | Headlines, descriptions, posts, emails |
| keywords | text[] | Optional |
| negative_keywords | text[] | Optional |
| performance | jsonb | Spend, clicks, conversions, revenue |
| created_by | text | user, ai |
| approved_at | timestamp | Optional |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## ai_suggestions

Stores AI-generated recommendations.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| title | text |  |
| category | text | bookings, marketing, reviews, finance, tasks |
| priority | text | low, medium, high |
| reason | text | Why AI suggested it |
| recommended_action | text | What to do |
| payload | jsonb | Structured suggestion data |
| status | text | new, saved, dismissed, completed |
| created_at | timestamp |  |
| updated_at | timestamp |  |

---

## activity_log

Stores audit trail.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| actor | text | user, ai, integration |
| action | text | created, updated, approved, dismissed, completed |
| entity_type | text | booking, task, campaign, review, suggestion |
| entity_id | uuid | Optional |
| summary | text | Human-readable log entry |
| metadata | jsonb | Optional |
| created_at | timestamp |  |

---

## settings

Stores lodge settings and integration config references.

| Field | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| key | text | Unique setting key |
| value | jsonb | Setting value |
| created_at | timestamp |  |
| updated_at | timestamp |  |
