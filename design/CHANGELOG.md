# Design Changelog

## v1.0 - 2026-07-04

**Initial Design - Rule-Based Lead Qualification System**

### Core Features
- Webhook-based lead intake from forms (Tally, Typeform, etc.)
- Rule-based scoring engine with 4 scoring rules
- Deterministic scoring with explainability
- Two-level routing (Qualified ≥80 / Unqualified <80)
- Three-tier classification for unqualified leads (Tier A, B, C)
- Google Sheets storage (Leads tab, Unqualified tab)
- Real-time lead processing

### Scoring Rules (v1.0)
- Healthcare industry: +30 points
- Company size ≥200 employees: +25 points
- Contains "AI": +20 points
- Contains "Automation": +20 points
- **Threshold:** 80 points for qualification

### Design Decisions
- **Rule-Based Over ML:** Explainability, speed, and easy tuning
- **Google Sheets:** Non-technical users can access, good for v1
- **Two-Level Routing:** Separates high-intent from warm leads
- **Dynamic Field Mapping:** Resilient to form structure changes

### Tech Stack
- n8n (orchestration)
- JavaScript (custom logic)
- Google Sheets API (storage)
- HTTP Webhooks (intake)

### Known Limitations
- No learning from outcomes
- No external data enrichment
- Keyword-only intent detection
- Dependent on consistent form labels
- Google Sheets scaling limit (~100k rows)
- No CRM integration

### Documentation
- Multi-page HTML design with light theme
- Professional SVG-based icons (no emoji/ROBO icons)
- Bootstrap styling
- Central menu component for DRY navigation
- Human-written, concise content

### Future Roadmap
- **Phase 2:** Enrichment APIs, feedback loop, CRM integration
- **Phase 3:** LLM-based intent, hybrid scoring, predictive models

---

## Versions

| Version | Date | Status | Notes |
|---------|------|--------|-------|
| v1.0 | 2026-07-04 | Current | Initial rule-based system |
| v2.0 | TBD | Planned | Enrichment & feedback |
| v3.0 | TBD | Planned | AI & hybrid scoring |

---

**Last Updated:** 2026-07-04
