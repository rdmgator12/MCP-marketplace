# Healthcare MCP Developer Guide

Build MCP servers that are ready for the healthcare marketplace. This guide covers healthcare-specific requirements, security patterns, and best practices for building MCPs that can earn Level 4/5 compliance ratings.

---

## Quick Start

### MCP Basics

A Model Context Protocol (MCP) server exposes tools that AI agents can call. In healthcare, these tools connect AI to:

- **FHIR endpoints** (patient data, claims, prior auth)
- **Public registries** (NPI, ICD-10, NCD/LCD, FDA)
- **Clinical databases** (PubMed, ClinicalTrials.gov, drug databases)
- **EDI transactions** (835, 837, 270/271, 278)

### Minimum Requirements for Marketplace Listing

1. **Public GitHub repository** with clear README
2. **Working MCP server** that responds to tool calls
3. **Healthcare relevance** — serves a real clinical, operational, or research workflow
4. **No hardcoded credentials** or PHI in source code
5. **Input validation** on all tool parameters

---

## Healthcare-Specific Patterns

### PHI-Safe Error Handling

Never include PHI in error messages, logs, or stack traces.

```typescript
// BAD - PHI leaks into error message
throw new Error(`Patient ${patientName} (MRN: ${mrn}) not found in system`);

// GOOD - Generic error, PHI stays in audit log only
logger.audit({ event: 'patient_lookup_failed', mrn: hash(mrn), timestamp: Date.now() });
throw new Error('Patient record not found. Verify the identifier and try again.');
```

### FHIR Resource Handling

When building FHIR-connected MCPs:

```typescript
// Always validate FHIR resource types
const ALLOWED_RESOURCES = ['Patient', 'Observation', 'Condition', 'MedicationRequest'];

function validateResourceType(resourceType: string): void {
  if (!ALLOWED_RESOURCES.includes(resourceType)) {
    throw new Error(`Unsupported FHIR resource type: ${resourceType}`);
  }
}

// Always use SMART-on-FHIR scopes with least privilege
const SCOPES = [
  'patient/Patient.read',
  'patient/Observation.read',
  // Only request what you need
];
```

### ICD-10 / Medical Code Validation

```typescript
// Validate code format before API calls
function isValidICD10CM(code: string): boolean {
  // ICD-10-CM: Letter + 2 digits + optional decimal + up to 4 more chars
  return /^[A-Z]\d{2}(\.\d{1,4})?$/.test(code);
}

function isValidNPI(npi: string): boolean {
  // 10 digits + Luhn check with 80840 prefix
  if (!/^\d{10}$/.test(npi)) return false;
  return luhnCheck('80840' + npi);
}
```

### EDI Transaction Patterns

For MCPs handling EDI (835/837/270/271):

```typescript
// Never log raw EDI content (contains PHI)
// Always validate segment structure
// Use typed parsers, not regex, for production EDI

interface EDI270Request {
  subscriberId: string;        // Encrypted in transit
  serviceTypeCode: string;     // e.g., '30' for health benefit plan coverage
  dateOfService: string;       // YYYYMMDD format
}
```

---

## Security Architecture

### Level 2 (Reference Only) Minimum

```
[ AI Agent ] --TLS 1.2+--> [ MCP Server ] --HTTPS--> [ Public API ]
                                                       (FDA, NLM, CMS)
```

- HTTPS for all external API calls
- Input validation and sanitization
- Rate limiting to prevent abuse
- No PHI handling capability

### Level 4 (HIPAA-Aware) Architecture

```
[ AI Agent ] --TLS 1.2+--> [ MCP Server ] --SMART-on-FHIR--> [ FHIR Server ]
                                |
                                +-- No PHI storage
                                +-- PHI-safe error handling
                                +-- Audit logging (access events)
                                +-- API key authentication
```

### Level 5 (HIPAA-Ready) Architecture

```
[ AI Agent ] --mTLS--> [ API Gateway ] --OAuth2--> [ MCP Server ] --SMART-on-FHIR--> [ FHIR Server ]
                           |                           |
                           +-- WAF                     +-- AES-256 at rest
                           +-- Rate limiting           +-- Immutable audit logs
                           +-- DDoS protection         +-- RBAC with MFA
                                                       +-- PHI encryption
                                                       +-- 6-year log retention
```

---

## Testing Your Healthcare MCP

### Functional Testing

```bash
# Test each tool responds correctly
# Use synthetic/test data only - never real PHI

# Example: Test ICD-10 lookup
echo '{"tool": "lookup_code", "params": {"code": "E11.65", "code_type": "diagnosis"}}' | mcp-test

# Example: Test NPI validation
echo '{"tool": "npi_validate", "params": {"npi": "1234567893"}}' | mcp-test
```

### Security Testing Checklist

- [ ] No PHI in error messages (test with invalid inputs)
- [ ] No PHI in server logs (review log output)
- [ ] TLS 1.2+ enforced (test with SSLyze or similar)
- [ ] Input validation rejects malformed data
- [ ] Rate limiting prevents abuse
- [ ] API keys are not exposed in responses
- [ ] Dependencies scanned for vulnerabilities (npm audit / pip audit)

### Compliance Self-Assessment

Before submitting to the marketplace, complete this checklist:

| Question | Level 2 | Level 4 | Level 5 |
|----------|---------|---------|---------|
| Uses only public data sources? | Required | - | - |
| TLS 1.2+ for all connections? | Yes | Yes | Yes |
| No PHI in logs/errors? | Yes | Yes | Yes |
| Input validation on all params? | Yes | Yes | Yes |
| SMART-on-FHIR or OAuth2 auth? | - | Yes | Yes |
| BAA available? | - | - | Yes |
| AES-256 encryption at rest? | - | - | Yes |
| Immutable audit logging? | - | - | Yes |
| RBAC with least privilege? | - | - | Yes |
| Annual pen test? | - | - | Yes |

---

## Submission Checklist

Before submitting your MCP to the marketplace:

- [ ] README with clear description and install instructions
- [ ] All tools documented with parameter types and descriptions
- [ ] No hardcoded credentials or PHI in source code
- [ ] Input validation on all tool parameters
- [ ] Error handling that never exposes PHI
- [ ] Dependencies up to date and vulnerability-free
- [ ] License file included
- [ ] Works with Claude Code or other MCP-compatible clients
- [ ] Tested with synthetic healthcare data

**Submit via**: [MCP Submission Issue Template](https://github.com/easypa-ai/healthcare-mcp-marketplace/issues/new?template=mcp-submission.yml)

---

## Resources

- [MCP Specification](https://modelcontextprotocol.io)
- [SMART on FHIR](https://smarthealthit.org)
- [HL7 FHIR R4](https://hl7.org/fhir/R4)
- [CMS-0057-F Final Rule](https://www.cms.gov/regulations-and-guidance)
- [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security)
- [EasyPA.ai](https://easypa.ai)
