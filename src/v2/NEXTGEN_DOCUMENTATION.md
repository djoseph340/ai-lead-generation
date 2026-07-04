 
**Output Structure:**

```json
{
  "leadId": "LEAD-1720000000000-abc123def",
  "contact": {
    "name": "John Smith",
    "email": "john@company.com",
    "phone": "+1-555-123-4567",
    "title": "VP of Operations"
  },
  "company": {
    "name": "Acme Corp",
    "website": "acme.com",
    "employees": 850,
    "industry": "Healthcare",
    "country": "United States"
  },
  "engagement": {
    "inquiry": "We're looking to automate our supply chain...",
    "source": "tally_form",
    "userAgent": "Mozilla/5.0...",
    "ipAddress": "192.168.1.1"
  },
  "scoring": {
    "totalScore": 87,
    "confidence": 85,
    "breakdown": {
      "industry": 100,
      "companySize": 90,
      "intent": 95,
      "engagement": 75,
      "role": 85,
      "geography": 100
    },
    "factors": [
      "Industry 'healthcare': 100 pts",
      "Large enterprise (850+ employees): 90 pts",
      "Intent signal 'automation': +16 pts",
      "Decision-maker role identified: +15 pts",
      ...
    ]
  },
  "qualification": {
    "tier": "Tier 1 - Highly Qualified",
    "status": "ready_for_sales",
    "priority": "CRITICAL",
    "recommendedAction": "immediate_outreach",
    "reasoning": [
      "High score with strong confidence indicators",
      "Intent signals and company profile align well (87/100)"
    ],
    "nextSteps": [
      "Assign to Sales team",
      "Schedule discovery call within 24h",
      "Prepare industry-specific pitch"
    ],
    "nurturePath": "direct_sales"
  },
  "quality": {
    "isDuplicate": false,
    "riskLevel": "low",
    "riskScore": 8,
    "suspiciousPatterns": [],
    "dataCompleteness": 95
  },
  "audit": {
    "receivedAt": "2026-07-04T14:30:00.000Z",
    "processedAt": "2026-07-04T14:30:02.123Z",
    "version": "2.0.0",
    "workflow": "NextGenLeadGen",
    "statusHistory": [
      {
        "status": "ready_for_sales",
        "timestamp": "2026-07-04T14:30:02.123Z",
        "reason": "Initial processing"
      }
    ]
  },
  "crmReady": {
    "salesforceId": null,
    "hubspotId": null,
    "readyForSync": true
  },
  "enrichment": {
    "companyEnriched": false,
    "clearbitId": null,
    "technographics": null,
    "firmographics": null,
    "enrichedAt": null
  }
}
```
 