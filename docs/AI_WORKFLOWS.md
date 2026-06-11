# AI Workflows

## AI role

The AI should act as a business assistant for Henty Lodge.

It should:

- Explain what matters
- Suggest practical next actions
- Draft marketing and guest communication
- Save time
- Keep the owner in control

It should not:

- Send messages without approval
- Launch ads without approval
- Change budgets without approval
- Modify bookings automatically
- Make up business facts not present in the data

---

## Workflow 1 — Daily briefing

### Trigger

Owner opens the dashboard or clicks **Generate daily briefing**.

### Input data

- Today’s check-ins
- Today’s check-outs
- Current guests
- Tasks due today
- Review requests pending
- Booking gaps
- Revenue this month
- Occupancy this month
- Marketing metrics

### Output

A short daily summary:

```txt
Today you have 1 check-in, 1 checkout, 3 current guests and 4 tasks due.
Revenue for May is $7,320 and occupancy is 67%.
You have a 3-night mid-week gap next week. Consider creating a Mid-week Escape campaign.
```

### UI placement

Main dashboard AI suggestion card and optional expanded modal.

---

## Workflow 2 — Booking gap campaign suggestion

### Trigger

Dashboard detects empty mid-week or weekend dates.

### Input data

- Empty dates
- Existing bookings
- Season/month
- Previous campaign performance if available
- Guest segments
- Local context

### Output

Campaign idea:

- Campaign title
- Reason
- Target audience
- Suggested channel
- Suggested budget
- Campaign copy
- Landing page suggestion

### Example

```txt
Campaign: Mid-week Ferguson Valley Escape
Reason: 3 empty weeknights detected next week.
Audience: Perth and Bunbury couples looking for a quiet getaway.
Suggested channels: Google Ads, Facebook post, past guest email.
```

---

## Workflow 3 — AI Google Ads campaign draft

### Trigger

Owner clicks **Create campaign** from an AI opportunity.

### Output fields

- Campaign name
- Goal
- Target dates
- Target locations
- Daily budget
- Keywords
- Negative keywords
- Headlines
- Descriptions
- Final URL
- Call-to-action

### Approval model

MVP:

- Save draft only

Later:

- Create paused Google Ads campaign
- Require user approval before launch

### Safety rules

- Never auto-launch ads
- Never increase budget without approval
- Always show budget and target dates clearly
- Warn if landing page is missing
- Store an activity log entry

---

## Workflow 4 — Review reply draft

### Trigger

New review is added or selected.

### Input data

- Review text
- Rating
- Guest name if available
- Stay context if available

### Output

- Warm reply
- Short, professional tone
- No overpromising
- No private guest details

### Example

```txt
Thank you so much for your lovely review. We’re glad you enjoyed the peaceful setting and your stay at Henty Lodge. We’d love to welcome you back again next time you’re visiting the Ferguson Valley.
```

---

## Workflow 5 — Social post generator

### Trigger

Owner clicks **Create social post** or AI suggests content.

### Inputs

- Booking gaps
- Season
- Local events
- Recent reviews
- Photos if available
- Campaign type

### Output

- Caption
- Short CTA
- Hashtags
- Image suggestion
- Suggested channel

### Example themes

- Winter fireplace escape
- Romantic weekend
- Ferguson Valley wine weekend
- Last-minute availability
- Gift vouchers
- Guest review quote

---

## Workflow 6 — Email draft generator

### Trigger

Owner chooses a guest segment or campaign idea.

### Inputs

- Segment
- Offer
- Booking dates
- Tone
- Call-to-action

### Output

- Subject line
- Preview text
- Email body
- CTA

### Example segments

- Past guests 6+ months ago
- Enquiries not booked
- Gift voucher buyers
- Anniversary guests
- Perth guests

---

## Workflow 7 — What should I do next?

### Trigger

Owner clicks **What should I focus on this week?**

### Input data

All dashboard sections.

### Output

Ranked action list:

1. Fill empty dates
2. Send review requests
3. Follow up enquiries
4. Create content
5. Fix operational tasks
6. Improve landing page

### Format

Each recommendation should include:

- Priority
- Why it matters
- Suggested action
- Button to create task/campaign/draft

