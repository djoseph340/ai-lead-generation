# Claude.md - Lead Qualification AI Project

## Project Overview

This is an automated lead qualification system built in n8n. It ingests form submissions, scores them based on rules, and routes them to Google Sheets based on qualification level.

**Current Version:** v1.0 (Rule-based scoring)
**Status:** Active development
**Language:** Non-AI (human-written documentation)

## Key Features

- **Webhook Intake:** Receives leads from Tally, Typeform, or similar form tools
- **Rule-Based Scoring:** Deterministic scoring system (no ML in v1)
- **Two-Level Routing:** Qualified (≥80) and Unqualified (<80)
- **Real-Time Processing:** Leads appear in Google Sheets immediately
- **Explainable:** Every score is traceable to specific rules

## Project Structure

```
ai-lead-generation/
├── design/v1/              # Multi-page HTML design (Bootstrap)
│   ├── index.html          # Home page
│   ├── pages/
│   │   ├── overview.html   # What this system does
│   │   ├── architecture.html # System flow diagram
│   │   ├── scoring.html    # Scoring rules & logic
│   │   ├── routing.html    # Where leads go
│   │   ├── schema.html     # Data output format
│   │   ├── stack.html      # Tech stack
│   │   └── future.html     # Roadmap
│   ├── assets/
│   │   ├── menu.js         # Shared navigation component
│   │   └── icons.js        # SVG icon definitions
│   └── CHANGELOG.md        # Design version history
├── src/v1/                 # n8n workflow export
│   └── Lead Qualification Assistant.json
├── docs/
│   └── design.md           # Original design (deprecated)
└── CLAUDE.md               # This file
```

## Design Guidelines Applied

✓ Non-AI language (human-written, concise)
✓ Professional light-themed styling
✓ Bootstrap framework
✓ SVG-based icons only (no emoji/ROBO icons)
✓ Multi-page design (one page = one responsibility)
✓ Central menu component (DRY principle)
✓ Version control in design/ folder structure
✓ Changelog maintained
✓ Reduced verbosity, crisp content

## Scoring System (v1.0)

```
Healthcare industry        → +30 points
Company size ≥200 employees → +25 points
Contains "AI"             → +20 points
Contains "Automation"     → +20 points
───────────────────────────────────────
Threshold                 → 80 points

≥80  = Qualified (High Priority)
50-79 = Medium Priority (Tier B)
<50   = Low Priority (Tier C)
```

## Data Schema

Output leads as JSON with these fields:
- name, company, email, industry, employees
- message, lead_score, priority
- tier, reason_codes (unqualified only)
- timestamp (ISO 8601)

Two Google Sheets tabs:
1. **Leads:** Qualified leads (score ≥80)
2. **Unqualified:** Below-threshold leads with tiers

## Future Enhancements

**Phase 2 (6+ months):**
- External enrichment APIs (Clearbit, Apollo)
- Feedback loop from conversions
- CRM integration (HubSpot, Salesforce)

**Phase 3 (12+ months):**
- LLM-based intent classification
- Hybrid scoring (rules + ML)
- Predictive conversion modeling

## Tech Stack

| Component | Technology |
|-----------|------------|
| Orchestrator | n8n |
| Scoring Logic | JavaScript |
| Data Storage | Google Sheets |
| Lead Intake | HTTP Webhook |
| Design | Bootstrap + SVG |

## Important Guidelines

1. **No AI-Generated Language:** Keep documentation human-written and concise
2. **Icons:** Always use SVG. Never use emoji or ROBO icons
3. **Design Versioning:** Place designs in `/design/v{version}/` folders
4. **Design Files:** Each page focuses on one responsibility
5. **Menu Component:** Import the shared menu from `assets/menu.js` on all pages
6. **Changelog:** Update `design/CHANGELOG.md` when changing versions

## Working with the Design

### View the Design
Open `design/v1/index.html` in a browser to see the full documentation.

### Update the Design
1. Edit the relevant HTML page in `design/v1/pages/`
2. Update `design/CHANGELOG.md` with version notes
3. Never modify emoji/text icons—use SVG only
4. Keep the menu component consistent (imported from `assets/menu.js`)

### Create New Version
1. Create new folder: `design/v2/`
2. Copy v1 structure
3. Make changes
4. Update version in footer and CHANGELOG.md

## Implementation Plan

**Phase 1 (Current):** Design & architecture complete
- [x] Define scoring rules
- [x] Design data schema
- [x] Create system flow
- [x] Multi-page HTML documentation
- [ ] n8n workflow deployment (in src/v1/)
- [ ] Google Sheets setup
- [ ] Form webhook configuration

**Phase 2:** Testing & Feedback
- [ ] Test with sample leads
- [ ] Measure scoring accuracy
- [ ] Gather sales feedback
- [ ] Refine rules

## Notes for Claude

- This project follows the user's design guidelines strictly
- Always prioritize clarity over features
- Keep documentation concise and human-written
- Use SVG for all icons (critical requirement)
- Design versioning is important—maintain `design/v{version}/` structure
- See `C:\Dhanya\GitHub\djoseph340\Guidelines\` for complete project guidelines

---

**Last Updated:** 2026-07-04
**Maintainer:** djoseph340
