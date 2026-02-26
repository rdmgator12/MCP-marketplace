# Contributing to the Healthcare MCP Marketplace

Thank you for your interest in contributing to the first physician-vetted Healthcare MCP Marketplace. We welcome MCP submissions, taxonomy improvements, compliance feedback, and bug reports.

## Submitting a Healthcare MCP

### Requirements

- Your MCP must serve a **real healthcare workflow** (clinical, operational, financial, or research)
- The repository must be **publicly accessible** (or you must provide access for review)
- Your MCP must have a **clear README** with installation instructions and tool documentation

### How to Submit

1. [Open a new issue](../../issues/new?template=mcp-submission.yml) using the **MCP Submission** template
2. Fill out all required fields including:
   - Repository URL
   - Description and target workflow
   - Primary category
   - PHI handling disclosure
   - Security checklist
3. Our team reviews submissions within **5 business days**

### What We Evaluate

| Criteria | What We Look For |
|----------|-----------------|
| **Clinical Relevance** | Does this serve a real healthcare workflow? |
| **Code Quality** | Well-documented, maintained, stable, tested |
| **Security Posture** | Encryption, access controls, input validation |
| **PHI Handling** | Does it touch, store, or transmit PHI? How? |
| **Licensing** | Compatible with healthcare/enterprise deployment |

### Compliance Ratings

All accepted MCPs receive two ratings:

- **HIPAA Compliance Level (1-5)**: Based on security architecture, PHI handling, and documented controls
- **Clinical Validity Score (A-D)**: Based on clinical evidence, guideline alignment, and expert endorsement

See [docs/compliance-methodology.md](docs/compliance-methodology.md) for full rating criteria.

### Achieving Level 4/5 HIPAA Rating

MCPs seeking elevated compliance designations must provide:

| Requirement | Level 4 | Level 5 |
|-------------|---------|---------|
| Cyber-Liability Insurance ($1M/$2M) | Recommended | Required |
| Indemnification Agreement | Recommended | Required |
| Breach Notification (24hr to maintainers) | Required | Required |
| Self-Attestation of Security Representations | Required | Required |
| Annual Independent Pen Test | - | Required |

## Other Contributions

### Taxonomy Suggestions

Help us improve how healthcare MCPs are categorized. [Open an issue](../../issues/new?template=category-suggestion.yml) with the **Category Suggestion** template.

### Bug Reports

Found incorrect information, dead links, or data issues? [Report it](../../issues/new?template=bug-report.yml).

### Compliance Feedback

Have expertise in HIPAA, healthcare security, or regulatory compliance? We welcome feedback on our rating methodology. Open a general issue to start a discussion.

## Pull Request Guidelines

If you're submitting a PR:

1. **Both files must be updated**: If adding/modifying an MCP, update both `README.md` and `registry/mcps.json`
2. **Validate JSON**: Run `python -m json.tool registry/mcps.json` before submitting
3. **No PHI**: Never include patient data, credentials, or API keys in any submission
4. **Follow existing format**: Match the style and structure of existing entries

## Code of Conduct

This marketplace serves healthcare professionals and patients. All contributors are expected to:

- Act with integrity and accuracy in all submissions
- Never misrepresent compliance or security capabilities
- Respect patient privacy in all interactions
- Provide honest disclosures about PHI handling

## Questions?

- Open an issue for public discussion
- Use the repository's security advisory feature for sensitive reports
