# Security and Approval Rules

## Core principle

The app should help the owner move faster without giving AI uncontrolled authority over bookings, guest communication, ad spend or public content.

---

## Secrets and credentials

Never expose these to the browser:

- OpenAI API key
- Cloudbeds credentials
- Google OAuth tokens
- Google Ads developer token
- Meta credentials
- Email platform keys
- Supabase service role key

Use server-side API routes, server actions or backend jobs.

---

## AI approval rules

AI can create drafts for:

- Google Ads campaigns
- Social posts
- Emails
- Review replies
- Guest messages
- Blog posts
- Tasks

AI should not automatically:

- Send emails
- Send guest messages
- Publish social posts
- Launch Google Ads campaigns
- Increase ad budgets
- Change bookings
- Change pricing
- Reply publicly to reviews

---

## Google Ads safety

### MVP

AI creates campaign drafts only.

### Later

AI may create paused campaigns only after the user approves.

### Must show before approval

- Campaign name
- Goal
- Budget
- Target dates
- Target locations
- Keywords
- Negative keywords
- Headlines
- Descriptions
- Landing page
- Expected action

### Never without approval

- Launch campaign
- Increase budget
- Change bidding strategy
- Expand targeting
- Add broad keywords
- Remove negative keywords

---

## Guest privacy

Do not expose private guest details unnecessarily.

Avoid putting sensitive guest information into AI prompts unless needed.

For AI prompts, include only:

- First name where useful
- Stay type
- Public review text
- Non-sensitive notes
- General preferences where needed

Avoid sending:

- Full payment details
- Private complaints unless needed for a response
- Sensitive personal information
- Unnecessary contact details

---

## Audit logging

Log important actions:

- AI generated a suggestion
- AI generated a campaign draft
- User approved a campaign
- User launched a campaign later
- User generated review reply
- User marked task complete
- Integration sync ran
- Integration sync failed

Each log should store:

- Actor
- Action
- Entity type
- Entity ID
- Summary
- Timestamp

---

## Error handling

If an integration fails:

- Do not delete local data
- Show connection status
- Show last successful sync
- Show retry option
- Log the error

---

## Data backups

Later production version should include:

- Supabase backup plan
- Export bookings/guests/tasks
- Export campaign and AI draft history
- Token rotation procedure
