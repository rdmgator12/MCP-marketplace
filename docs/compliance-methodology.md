# Compliance Rating Methodology

## Overview

Every MCP listed on the Healthcare MCP Marketplace receives two independent ratings assessed by EasyPA.ai:

1. **HIPAA Compliance Level (1-5)** — Security architecture and PHI handling posture
2. **Clinical Validity Score (A-D)** — Clinical evidence basis and expert endorsement

All ratings are **Point-in-Time Architectural Assessments** as of the listed assessment date.

---

## HIPAA Compliance Level (1-5)

### Level 5: HIPAA-Ready

**Badge**: HIPAA-Ready | **Use Case**: Production clinical environments with PHI

**Requirements (all seven must be met):**

| # | Control | Criteria |
|---|---------|----------|
| 1 | **BAA** | Executed Business Associate Agreement available. Breach notification within 60 days per HIPAA. Subprocessor obligations specified. |
| 2 | **Encryption** | AES-256 at rest. TLS 1.2+ in transit. No unencrypted PHI in logs/errors. |
| 3 | **Audit Logging** | Immutable, timestamped logs of all PHI access. 6-year minimum retention. Exportable. |
| 4 | **Access Controls** | RBAC with least-privilege. MFA for admin access. API key rotation. Session timeout. |
| 5 | **Data Retention & Disposal** | Documented policy. Cryptographic erasure on termination. No PHI persistence beyond retention period. |
| 6 | **Subprocessor Disclosure** | Complete subprocessor list. Change notification process. BAAs with each subprocessor. |
| 7 | **Security Testing** | Annual independent pen test. SAST in pipeline. Vulnerability disclosure policy. Critical/high patched within 30/90 days. |

**Additional Level 5 Gating Requirements:**
- Cyber-Liability Insurance: Minimum $1M per occurrence / $2M aggregate
- Indemnification Agreement with EasyPA
- 24-hour breach notification commitment
- Self-attestation of all security representations

### Level 4: HIPAA-Aware

**Badge**: HIPAA-Aware | **Use Case**: Clinical reference, no PHI handling

**Requirements:**
- TLS 1.2+ encryption in transit
- No PHI storage or persistence
- Privacy-by-design architecture
- Input validation and sanitization
- No PHI in error messages or logs
- Documented security architecture

### Level 3: De-identified Safe

**Badge**: De-identified Safe | **Use Case**: Analytics, population health

**Requirements:**
- Handles only aggregate or de-identified data
- Compliant with Safe Harbor or Expert Determination de-identification standards
- No mechanism to re-identify individuals
- Documented data handling procedures

### Level 2: Reference Only

**Badge**: Reference Only | **Use Case**: Education, reference lookup

**Characteristics:**
- Accesses only public data sources (FDA, NLM, CMS, NIH)
- No PHI handling capability
- No authentication required for data sources
- Read-only operations

### Level 1: Unvetted

**Badge**: Unvetted | **Use Case**: Use at own risk

**Characteristics:**
- Not yet assessed by EasyPA
- May be newly submitted or awaiting review
- No compliance representations made

---

## Clinical Validity Score (A-D)

### Score A: Clinically Validated

- Evidence-based content from peer-reviewed sources
- Endorsed or built by credentialed clinical professionals
- Aligns with published clinical practice guidelines
- Data sources are recognized clinical authorities (NLM, WHO, FDA, specialty societies)

### Score B: Clinically Informed

- Built with clinical input or advisory
- Follows general clinical guidelines
- Data sources are reputable but may not be primary clinical authorities
- Appropriate for clinical reference with clinician oversight

### Score C: Operationally Useful

- Administrative, financial, or operational tools
- Not intended for direct clinical decision-making
- Useful in healthcare business workflows (billing, credentialing, compliance)
- No clinical validity claim made

### Score D: Experimental

- Research-stage or community-developed
- Limited or no clinical validation
- May be useful for research or education
- Requires significant caution in any clinical-adjacent use

---

## Assessment Process

### Initial Assessment

1. **Submission**: MCP developer submits via GitHub issue template
2. **Technical Review**: Code review for security architecture, PHI handling, and dependencies
3. **Clinical Review**: Physician assessment of clinical relevance and data source quality
4. **Rating Assignment**: HIPAA level and Clinical score assigned
5. **Publication**: MCP listed with ratings, assessment date, and reassessment interval

### Reassessment Triggers

Ratings are reassessed when:
- 12 months have elapsed since last assessment
- Major version release of the MCP
- Security vulnerability disclosed
- Material change in architecture or data handling
- Request from MCP maintainer
- Community-reported compliance concern

### Assessment Limitations

- Ratings reflect **disclosed** architecture and **self-attested** controls
- EasyPA does not perform runtime security testing (unless Level 5 pen test is provided)
- Ratings are not legal opinions or HIPAA certifications
- Users must perform their own due diligence for production PHI deployments
- EasyPA does not act as a Business Associate by virtue of providing ratings

---

## Disclaimer

EasyPA.ai provides compliance ratings as informational assessments to assist buyer evaluation. They are not legal opinions, HIPAA certifications, or guarantees of regulatory compliance. Users should conduct their own due diligence and legal review before deploying any MCP in a production environment handling Protected Health Information (PHI).
