# MCP for Healthcare

### The First Physician-Vetted Healthcare MCP Marketplace

> **Healthcare organizations don't need more AI demos. They need safe, auditable, installable AI toolchains that touch FHIR endpoints, EDI transactions, and payer policy databases without detonating compliance.** MCP for Healthcare is building the trust layer the market is missing.

[![MCP for Healthcare](https://img.shields.io/badge/MCP%20for%20Healthcare-Marketplace-0D7377?style=for-the-badge)](https://github.com/rdmgator12/MCP-marketplace)
[![License](https://img.shields.io/badge/License-See%20Individual%20MCPs-blue?style=for-the-badge)]()
[![MCPs Listed](https://img.shields.io/badge/MCPs%20Listed-34-D4A843?style=for-the-badge)]()

---

## What Is This?

**MCP for Healthcare** is the definitive curated marketplace of Model Context Protocol (MCP) servers for healthcare. Every MCP listed here has been reviewed for clinical relevance, HIPAA compliance posture, and operational readiness by a board-certified physician and healthcare AI expert.

This isn't a flat list. Every server is categorized by healthcare workflow, rated for compliance and clinical validity, and installable with a single command.

**Built and maintained by Ralph Martello, MD** — Board-Certified Pediatric Hospitalist | Harvard/Stanford AI Certified | ACMA Certified | Medical-Legal Expert

---

## Quick Install

```bash
# Install the full Healthcare MCP Marketplace in Claude Code
/plugin marketplace add rdmgator12/healthcare-mcp-marketplace

# Or install individual MCPs by category
/plugin install rdmgator12/reimbursement-engine
```

---

## Why This Exists

The MCP ecosystem has exploded — 10,000+ public servers, 97M+ monthly SDK downloads, backed by Anthropic, OpenAI, Google, and Microsoft. But healthcare is underserved:

- **The problem**: A billing director who wants AI-assisted denial management today must evaluate tools with no standardized quality metrics, no HIPAA compliance rating, no clinical validity assessment, and no way to know whether the developer has ever seen the inside of a hospital.
- **The regulatory moment**: CMS-0057-F and HTI-1 are forcing payers and providers to expose FHIR APIs by 2026-2027. MCP is the middleware that connects AI agents to those APIs.
- **The gap**: No curated, physician-vetted, healthcare-specific MCP marketplace exists. Until now.

---

## Compliance Rating System

Every MCP on this marketplace carries two ratings:

### HIPAA Compliance Level (1-5)

| Level | Badge | Meaning | Use Case |
|-------|-------|---------|----------|
| **5** | 🟢 HIPAA-Ready | Full BAA, AES-256, audit logging, RBAC, pen-tested | Production clinical environments with PHI |
| **4** | 🔵 HIPAA-Aware | Encryption in transit, no PHI storage, privacy-by-design | Clinical reference, no PHI handling |
| **3** | 🟡 De-identified Safe | Aggregate/de-identified data only | Analytics, population health |
| **2** | ⚪ Reference Only | Public data sources only (FDA, NLM, CMS) | Education, reference lookup |
| **1** | ⬜ Unvetted | Not yet assessed | Use at own risk |

> **Important**: All compliance ratings are **Point-in-Time Architectural Assessments** as of the listed assessment date, not ongoing guarantees. See [Compliance Methodology](#compliance-methodology) for full details.

### Clinical Validity Score (A-D)

| Score | Meaning |
|-------|---------|
| **A** | Clinically Validated — evidence-based, peer-reviewed, physician-endorsed |
| **B** | Clinically Informed — built with clinical input, follows guidelines |
| **C** | Operationally Useful — administrative/financial tools, not clinical |
| **D** | Experimental — research-stage, community-developed |

---

## Healthcare MCP Taxonomy

### 📋 Categories at a Glance

| # | Category | MCPs | Description |
|---|----------|------|-------------|
| 1 | [Revenue Cycle Management](#1-revenue-cycle-management) | 8 | Billing, coding, denials, prior auth, payer policy |
| 2 | [Clinical Decision Support](#2-clinical-decision-support) | 11 | Drug info, guidelines, diagnostics, calculators, terminology |
| 3 | [FHIR & Interoperability](#3-fhir--health-data-interoperability) | 9 | FHIR connectors, EHR integration, data standards |
| 4 | [Quality & Compliance](#4-quality-compliance--regulatory) | 4 | HEDIS, MIPS, HIPAA, OMOP, accreditation |
| 5 | [Credentialing & Provider Ops](#5-credentialing--provider-operations) | 3 | NPI lookup, enrollment, practice ops |
| 6 | [Medical-Legal](#6-medical-legal--expert-witness) | 1 | Case analysis, record review, expert witness |
| 7 | [Medical Education](#7-medical-education--training) | 3 | Board review, residency training, CME |
| 8 | [Population Health](#8-population-health--value-based-care) | 2 | Risk stratification, care management, community health |
| 9 | [Life Sciences & Research](#9-life-sciences--research) | 10 | PubMed, bioRxiv, clinical trials, genomics |
| 10 | [Health Plan & Payer Ops](#10-health-plan--payer-operations) | 1 | UM, network management, member services |

---

## 1. Revenue Cycle Management

*Billing, coding, claims, denials, prior authorization, payer policy intelligence, and patient financial services.*

---

### ReimbursementEngine

> 18 tools covering Medicare coverage determination, ICD-10 coding, NPI validation, payer policy analysis, and more.

| Detail | Value |
|--------|-------|
| **Source** | `rdmgator12/reimbursement-engine` |
| **Tools** | 18 |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) — public CMS data, no PHI |
| **Clinical Score** | **C** — Operationally Useful |
| **Category** | Payer Policy Intelligence, Billing & Coding |

**Tools include:**
- `search_national_coverage` — Search NCDs by keyword
- `batch_get_ncds` — Retrieve multiple NCD details
- `search_local_coverage` — Search LCDs, proposed LCDs, articles by contractor
- `sad_exclusion_list` — Self-Administered Drug exclusion checking
- `search_codes` — ICD-10-CM diagnosis and ICD-10-PCS procedure search
- `lookup_code` — Detailed ICD-10 code lookup
- `validate_code` — HIPAA transaction validity checking
- `get_hierarchy` — ICD-10 code family exploration
- `get_by_category` — Browse codes by chapter/category
- `npi_search` — Provider search by name, specialty, location
- `npi_lookup` — Full provider details by NPI number
- `npi_validate` — NPI format and Luhn check validation
- `get_contractors` — Medicare Administrative Contractor lookup
- `get_whats_new_report` — Recent Medicare coverage policy changes
- `search_articles` — PubMed biomedical literature search
- `get_article_metadata` — Detailed article information
- `search_preprints` — bioRxiv/medRxiv preprint search
- `get_preprint` — Full preprint metadata by DOI

```bash
/plugin install rdmgator12/reimbursement-engine
```

---

### Medicare Coverage & Policy Tools

#### CMS Coverage Analysis MCP

| Detail | Value |
|--------|-------|
| **Source** | Included in ReimbursementEngine |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **C** — Operationally Useful |
| **Covers** | NCDs, LCDs, Articles, SAD Exclusion List, Medicare contractors, What's New reports |

---

### ICD-10 Coding Tools

#### ICD-10-CM/PCS Search & Validation MCP

| Detail | Value |
|--------|-------|
| **Source** | Included in ReimbursementEngine |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Covers** | Diagnosis code search, procedure code search, code validation, hierarchy browsing, category exploration |

---

### Provider Data & Credentialing

#### NPPES/NPI Registry MCP

| Detail | Value |
|--------|-------|
| **Source** | Included in ReimbursementEngine |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **C** — Operationally Useful |
| **Covers** | NPI search, lookup, validation, provider specialty, practice location, credential verification |

---

## 2. Clinical Decision Support

*Drug information, clinical guidelines, diagnostic support, and clinical calculators.*

---

### FDA Drug Information & Interactions

#### Medical-MCP (JamesANZ)

> Comprehensive medical information from FDA, WHO, PubMed, RxNorm, and Google Scholar.

| Detail | Value |
|--------|-------|
| **Source** | [`JamesANZ/medical-mcp`](https://github.com/JamesANZ/medical-mcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

```bash
# Install via pip
pip install medical-mcp
```

---

#### Healthcare Data Hub (Cicatriiz)

> All-in-one: FDA drug info, PubMed, medRxiv, NCBI Bookshelf, clinical trials, ICD-10, DICOM metadata, medical calculator.

| Detail | Value |
|--------|-------|
| **Source** | [`Cicatriiz/healthcare-mcp-public`](https://github.com/Cicatriiz/healthcare-mcp-public) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Node.js |

```bash
git clone https://github.com/Cicatriiz/healthcare-mcp-public.git
cd healthcare-mcp-public && npm install
```

---

### NICE Clinical Guidelines (UK)

#### NICE MCP Server

| Detail | Value |
|--------|-------|
| **Source** | [`kieran-heidi/medical-mcp-server`](https://github.com/kieran-heidi/medical-mcp-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated (NICE is a national guidelines body) |
| **Note** | UK guidelines only; not directly applicable to US practice |

---

### Medical Calculators

#### MedAdapt Content Server

> AI-assisted medical learning with adaptive content from PubMed, NCBI Bookshelf, and user documents.

| Detail | Value |
|--------|-------|
| **Source** | [`ryoureddy/medadapt-content-server`](https://github.com/ryoureddy/medadapt-content-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

### BioThings API (Genes, Variants, Drugs)

#### BioThings MCP

> Query genes, genetic variants, drugs, and taxonomic information via the BioThings API.

| Detail | Value |
|--------|-------|
| **Source** | [`longevity-genie/biothings-mcp`](https://github.com/longevity-genie/biothings-mcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

### Oncology Decision Support

#### NexOnco MCP

> Oncology clinical evidence for precision medicine decision support.

| Detail | Value |
|--------|-------|
| **Source** | [`Nexgene-Research/nexonco-mcp`](https://github.com/Nexgene-Research/nexonco-mcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

#### NCCN Guidelines MCP

> Access NCCN cancer treatment guidelines for oncology decision support.

| Detail | Value |
|--------|-------|
| **Source** | [`gscfwid/NCCN_guidelines_MCP`](https://github.com/gscfwid/NCCN_guidelines_MCP) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated |
| **Languages** | Python |

---

### Medical Terminology & Coding

#### MCP-LOINC

> LOINC API wrapper for medical terminology standardization and lab code lookup.

| Detail | Value |
|--------|-------|
| **Source** | [`Kryzo/mcp-Loinc`](https://github.com/Kryzo/mcp-Loinc) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

#### SNOMED CT MCP

> SNOMED CT concept lookup via FHIR R4 terminology server for clinical coding standardization.

| Detail | Value |
|--------|-------|
| **Source** | [`eigenbau/mcp-snomed-ct`](https://github.com/eigenbau/mcp-snomed-ct) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated |
| **Languages** | Python |

---

### Evidence-Based Medicine

#### Evidence-Based Medicine MCP

> Evidence-based medical advice MCP for clinical decision support workflows.

| Detail | Value |
|--------|-------|
| **Source** | [`chris-lovejoy/evidence-based-medicine-mcp`](https://github.com/chris-lovejoy/evidence-based-medicine-mcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | TypeScript |

---

## 3. FHIR & Health Data Interoperability

*FHIR server connectors, EHR integration, health information exchange, and data standards.*

---

### ⭐ WSO2 FHIR MCP Server

> Expose any FHIR Server or API as an MCP Server. SMART-on-FHIR authentication. Full CRUD on FHIR resources.

| Detail | Value |
|--------|-------|
| **Source** | [`wso2/fhir-mcp-server`](https://github.com/wso2/fhir-mcp-server) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) — SMART-on-FHIR auth, no PHI storage |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | TypeScript |
| **CMS-0057 Relevance** | Direct — enables AI agent access to mandated FHIR APIs |

```bash
npm install @anthropic/mcp-server-fhir-wso2
```

---

### Momentum FHIR MCP Server

> Natural language interface for healthcare data. Eliminates weeks of FHIR learning. Prevents LLM hallucination of medical codes.

| Detail | Value |
|--------|-------|
| **Source** | [`the-momentum/fhir-mcp-server`](https://github.com/the-momentum/fhir-mcp-server) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | TypeScript |

```bash
git clone https://github.com/the-momentum/fhir-mcp-server.git
```

---

### AWS HealthLake MCP Server

> MCP server for AWS HealthLake FHIR operations. 11 tools for FHIR resource management with automatic datastore discovery.

| Detail | Value |
|--------|-------|
| **Source** | [`awslabs/mcp` (HealthLake server)](https://awslabs.github.io/mcp/servers/healthlake-mcp-server) |
| **HIPAA Level** | 🟢 Level 5 (HIPAA-Ready) — AWS HealthLake is HIPAA-eligible with BAA |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |
| **Note** | Requires AWS account with HealthLake configured |

---

### Flexpa FHIR MCP

> Model Context Protocol implementation for FHIR. Connect to health plans and retrieve patient claims, coverage, and clinical data.

| Detail | Value |
|--------|-------|
| **Source** | [`flexpa/mcp-fhir`](https://github.com/flexpa/mcp-fhir) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **C** — Operationally Useful |
| **Languages** | TypeScript |

---

### Health Record MCP (Josh Mandel)

> Connect to an EHR and make clinical data available via MCP. By Josh Mandel (former SMART Health IT lead).

| Detail | Value |
|--------|-------|
| **Source** | [`jmandel/health-record-mcp`](https://github.com/jmandel/health-record-mcp) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **A** — Clinically Validated (author is a FHIR/SMART pioneer) |
| **Languages** | TypeScript |

---

### AgentCare MCP

> Healthcare tools and prompts for interacting with FHIR data and medical resources on EMRs like Cerner and Epic.

| Detail | Value |
|--------|-------|
| **Source** | [`Kartha-AI/agentcare-mcp`](https://github.com/Kartha-AI/agentcare-mcp) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | TypeScript |

---

### Azure FHIR MCP Server

> Azure Health Data Services FHIR MCP server for cloud-native health data integration.

| Detail | Value |
|--------|-------|
| **Source** | [`erikhoward/azure-fhir-mcp-server`](https://github.com/erikhoward/azure-fhir-mcp-server) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |
| **Note** | Requires Azure Health Data Services account |

---

### AEHRC FHIR Tools

> FHIR tools by Australian e-Health Research Centre (CSIRO) for health data interoperability.

| Detail | Value |
|--------|-------|
| **Source** | [`aehrc/mcp-fhir-tools`](https://github.com/aehrc/mcp-fhir-tools) |
| **HIPAA Level** | 🔵 Level 4 (HIPAA-Aware) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | TypeScript |

---

### DICOM MCP Server

> Query, read, and move medical images and reports from PACS and other DICOM-compliant systems.

| Detail | Value |
|--------|-------|
| **Source** | [`ChristianHinge/dicom-mcp`](https://github.com/ChristianHinge/dicom-mcp) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) — DICOM metadata only by default |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

## 4. Quality, Compliance & Regulatory

*Quality measures, regulatory compliance, HIPAA, and accreditation tools.*

---

### Innovaccer HMCP (Healthcare Model Context Protocol)

> Specialized MCP extension with HIPAA guardrails, OAuth2, audit trails, and compliance layer.

| Detail | Value |
|--------|-------|
| **Source** | [`innovaccer/Healthcare-MCP`](https://github.com/innovaccer/Healthcare-MCP) |
| **HIPAA Level** | 🟢 Level 5 (HIPAA-Ready) — enterprise-grade compliance layer |
| **Clinical Score** | **C** — Operationally Useful |
| **Note** | Proprietary enterprise product. SDK available but full platform requires Innovaccer licensing. |

---

### OMOP MCP (Mayo Clinic NLP)

> OMOP concept mapping via LLMs by Mayo Clinic NLP group for clinical data standardization.

| Detail | Value |
|--------|-------|
| **Source** | [`OHNLP/omop_mcp`](https://github.com/OHNLP/omop_mcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

### PyOMOP (OHDSI/OMOP)

> OHDSI/OMOP clinical data management with FHIR import for observational health data research.

| Detail | Value |
|--------|-------|
| **Source** | [`dermatologist/pyomop`](https://github.com/dermatologist/pyomop) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

## 5. Credentialing & Provider Operations

*Provider enrollment, credentialing, NPI management, and practice operations.*

---

### NPPES/NPI Tools

> See [ReimbursementEngine](#reimbursementengine) — includes NPI search, lookup, and validation tools.

---

## 6. Medical-Legal & Expert Witness

*Case analysis, medical record review, standard of care research, and expert witness support.*

---

> **Coming Soon**: Medical-Legal MCP — standard of care research, causation analysis, deposition preparation, and expert report generation tools. Built from active medical-legal expert witness practice.

---

## 7. Medical Education & Training

*Board review, residency training, CME tracking, and clinical knowledge tools.*

---

### MedAdapt Content Server

> Adaptive medical learning from PubMed, NCBI Bookshelf, and user-provided documents.

| Detail | Value |
|--------|-------|
| **Source** | [`ryoureddy/medadapt-content-server`](https://github.com/ryoureddy/medadapt-content-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |

---

## 8. Population Health & Value-Based Care

*Risk stratification, care management, and value-based analytics.*

---

### Apple Health MCP Server

> Access exported Apple Health data with built-in analytics. Consumer health data integration for population health workflows.

| Detail | Value |
|--------|-------|
| **Source** | [`the-momentum/apple-health-mcp-server`](https://github.com/the-momentum/apple-health-mcp-server) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) — consumer data, user-controlled |
| **Clinical Score** | **D** — Experimental |

---

### PopHIVE MCP Server

> Yale PopHIVE population health data for community health analysis and value-based care workflows.

| Detail | Value |
|--------|-------|
| **Source** | [`Cicatriiz/pophive-mcp-server`](https://github.com/Cicatriiz/pophive-mcp-server) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | JavaScript |

---

## 9. Life Sciences & Research

*PubMed, bioRxiv, clinical trials, genomics, and precision medicine.*

---

### PubMed MCP Servers

Multiple PubMed MCP implementations exist. The marketplace recommends:

#### PubMed Search & Full-Text (Included in ReimbursementEngine)

| Detail | Value |
|--------|-------|
| **Source** | Included in ReimbursementEngine |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated (NLM is the gold standard) |
| **Tools** | search_articles, get_article_metadata, find_related_articles, get_full_text_article, convert_article_ids |

#### Standalone PubMed MCP

| Detail | Value |
|--------|-------|
| **Source** | [`rikachu225/mcp-pubmed-server`](https://github.com/rikachu225/mcp-pubmed-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated |

---

#### MCP Simple PubMed

> Popular standalone PubMed MCP server for biomedical literature search and retrieval.

| Detail | Value |
|--------|-------|
| **Source** | [`andybrandt/mcp-simple-pubmed`](https://github.com/andybrandt/mcp-simple-pubmed) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated |
| **Languages** | Python |

---

### bioRxiv/medRxiv MCP (Included in ReimbursementEngine)

| Detail | Value |
|--------|-------|
| **Source** | Included in ReimbursementEngine |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed (preprints are not peer-reviewed) |
| **Tools** | search_preprints, get_preprint, search_published_preprints, get_content_statistics |

---

### Protein Structure Analyzer

| Detail | Value |
|--------|-------|
| **Source** | [`Augmented-Nature/AlphaFold-MCP-Server`](https://github.com/Augmented-Nature/AlphaFold-MCP-Server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **D** — Experimental |

---

### 3D Slicer MCP

| Detail | Value |
|--------|-------|
| **Source** | [`brainbloodbarrier/3dslicer-claude-bridge`](https://github.com/brainbloodbarrier/3dslicer-claude-bridge) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) |
| **Clinical Score** | **B** — Clinically Informed |
| **Note** | Requires 3D Slicer installation |

---

### BioMCP

> Clinical trials, genomics, PubMed, and variant annotation in Rust for biomedical research workflows.

| Detail | Value |
|--------|-------|
| **Source** | [`genomoncology/biomcp`](https://github.com/genomoncology/biomcp) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Rust |

---

### ClinicalTrials.gov MCP

> ClinicalTrials.gov REST API for searching and retrieving clinical trial data.

| Detail | Value |
|--------|-------|
| **Source** | [`cyanheads/clinicaltrialsgov-mcp-server`](https://github.com/cyanheads/clinicaltrialsgov-mcp-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **A** — Clinically Validated |
| **Languages** | TypeScript |

---

### M3 MIMIC MCP

> Query MIMIC-IV medical data via natural language for clinical research and analysis.

| Detail | Value |
|--------|-------|
| **Source** | [`rafiattrach/m3`](https://github.com/rafiattrach/m3) |
| **HIPAA Level** | 🟡 Level 3 (De-identified Safe) — MIMIC-IV is de-identified |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

### TealFlow MCP

> Build Teal R Shiny clinical trial analysis apps with AI assistance.

| Detail | Value |
|--------|-------|
| **Source** | [`Appsilon/TealFlowMCP`](https://github.com/Appsilon/TealFlowMCP) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | Python |

---

### CDISC Library MCP

> CDISC Library access for clinical data standards and regulatory submissions.

| Detail | Value |
|--------|-------|
| **Source** | [`Cicatriiz/cdisc-library-mcp-server`](https://github.com/Cicatriiz/cdisc-library-mcp-server) |
| **HIPAA Level** | ⚪ Level 2 (Reference Only) |
| **Clinical Score** | **B** — Clinically Informed |
| **Languages** | JavaScript |

---

## 10. Health Plan & Payer Operations

*Utilization management, network management, and member services.*

---

> **Coming Soon**: Payer operations MCPs including UM criteria tools, network adequacy analysis, and fee schedule modeling.

---

## Workflow Bundles

Pre-configured MCP stacks for specific healthcare workflows:

### 🔥 Denial Fighter Bundle
*Everything you need to analyze, appeal, and prevent claim denials.*
- ReimbursementEngine (NCD/LCD lookup, ICD-10 validation, payer policy)
- PubMed MCP (clinical evidence for appeals)
- NPI Registry (provider verification)

### 🔥 Prior Auth Stack
*CMS-0057 aligned prior authorization workflow.*
- ReimbursementEngine (coverage determination, medical necessity)
- FHIR MCP Server (electronic PA submission via FHIR)
- ICD-10/CPT tools (coding accuracy)

### 🔥 Clinical Reference Kit
*Point-of-care reference tools for clinicians.*
- Medical-MCP (FDA drug info, interactions, RxNorm)
- PubMed MCP (literature search)
- Healthcare Data Hub (clinical trials, medical calculator)
- BioThings MCP (genomics, pharmacogenomics)

### 🔥 FHIR Interoperability Suite
*Complete FHIR integration toolkit for CMS-0057/HTI-1 compliance.*
- WSO2 FHIR MCP Server
- Momentum FHIR MCP Server
- Health Record MCP
- AgentCare MCP
- DICOM MCP Server

### 🔥 Compliance Suite
*Quality reporting and regulatory compliance.*
- ReimbursementEngine (Medicare policy)
- Innovaccer HMCP (if licensed)
- NPI Registry (credentialing verification)

---

## For Developers: Submit Your Healthcare MCP

We want every healthcare MCP on this marketplace. Submission is **free**.

### How to Submit

1. **Open an issue** on this repository with the `[MCP Submission]` tag
2. Include: GitHub repo URL, brief description, category, and whether your MCP handles PHI
3. Our team reviews for clinical relevance and assigns preliminary compliance ratings
4. Accepted MCPs appear on the marketplace within 5 business days

### What We Evaluate

| Criteria | What We Look For |
|----------|-----------------|
| **Clinical Relevance** | Does this serve a real healthcare workflow? |
| **Code Quality** | Is it well-documented, maintained, and stable? |
| **Security Posture** | Encryption, access controls, data handling |
| **PHI Handling** | Does it touch, store, or transmit PHI? |
| **Licensing** | Is the license compatible with healthcare use? |

### Achieving Level 4/5 HIPAA Rating

MCPs seeking Level 4 or Level 5 designation must meet additional requirements:

- **Cyber-Liability Insurance**: Minimum $1M per occurrence / $2M aggregate
- **Indemnification Agreement**: Standard template provided
- **Breach Notification**: 24-hour notification commitment to marketplace maintainers
- **Self-Attestation**: Accuracy of all security representations
- **Annual Pen Test** (Level 5 only): Independent third-party penetration testing

### HIPAA-Compliant MCP Development Templates

Coming soon — starter templates with healthcare-specific scaffolding:
- FHIR resource handling patterns
- EDI (835/837/270/271) processing
- PHI encryption and audit logging
- HIPAA-compliant error handling (no PHI in logs)

---

## Compliance Methodology

### Point-in-Time Architectural Assessment

All compliance ratings are **Point-in-Time Architectural Assessments**, not ongoing guarantees.

Each rating reflects an evaluation of the MCP's disclosed security architecture, documented controls, and self-attested compliance posture **as of a specific assessment date**. The rating does not constitute:

- A warranty of ongoing HIPAA compliance
- A legal opinion on regulatory status
- A guarantee of operational security
- An assurance against vulnerabilities discovered after assessment

All ratings carry a visible **assessment date** and recommended **reassessment interval** (typically 12 months or upon major version release).

### Level 5 Gating Criteria

To earn the highest trust designation, an MCP must pass **all seven** checks:

1. **BAA**: Executed Business Associate Agreement available. Breach notification within 60 days per HIPAA. Subprocessor obligations specified.
2. **Encryption**: AES-256 at rest. TLS 1.2+ in transit. No unencrypted PHI in logs/errors.
3. **Audit Logging**: Immutable, timestamped logs of all PHI access. 6-year minimum retention. Exportable.
4. **Access Controls**: RBAC with least-privilege. MFA for admin access. API key rotation. Session timeout.
5. **Data Retention & Disposal**: Documented policy. Cryptographic erasure on termination. No PHI persistence beyond retention period.
6. **Subprocessor Disclosure**: Complete subprocessor list. Change notification process. BAAs with each subprocessor.
7. **Security Testing**: Annual independent pen test. SAST in pipeline. Vulnerability disclosure policy. Critical/high patched within 30/90 days.

### Disclaimer

MCP for Healthcare provides compliance ratings as informational assessments to assist buyer evaluation. They are not legal opinions, HIPAA certifications, or guarantees of regulatory compliance. Users should conduct their own due diligence and legal review before deploying any MCP in a production environment handling PHI. The marketplace does not act as a Business Associate to users by virtue of providing compliance ratings for third-party MCPs.

---

## About

### Why a Physician-Built Marketplace?

Generic MCP directories list healthcare servers next to Spotify playlist managers. They have no clinical expertise, no HIPAA assessment capability, and no understanding of healthcare workflows.

This marketplace is built by a **board-certified pediatric hospitalist** with:
- Harvard/Stanford AI certifications
- ACMA (American Case Management Association) certification
- Active medical-legal expert witness practice
- Deep CMS regulatory expertise (CMS-0057-F, HTI-1, Conditions of Participation)
- Founder of MCP for Healthcare — physician-vetted healthcare MCP marketplace

When this marketplace rates an MCP as clinically valid or HIPAA-appropriate, that assessment carries the weight of actual medical licensure and regulatory expertise.

### The Regulatory Moment

Two federal mandates are creating massive demand for healthcare AI integration:

- **CMS-0057-F** (Interoperability & Prior Authorization): Mandates FHIR-based APIs for Patient Access, Provider Access, Provider Directory, Payer-to-Payer, and Prior Authorization. Operational requirements effective January 2026; all APIs mandated by January 2027.
- **HTI-1** (Health Data, Technology & Interoperability): Mandates USCDI v3 with FHIR US Core profiles for all certified health IT by January 2026.

MCP is the bridge between these mandated APIs and AI-powered healthcare workflows. This marketplace exists at exactly the right time.

### The One-Liner

**MCP for Healthcare is the Plaid for Healthcare AI.** As federal mandates force health systems and payers to expose FHIR APIs, this marketplace provides the trusted, physician-vetted, HIPAA-compliant MCP directory and middleware that allows AI agents to actually use them.

---

## Roadmap

- [x] Launch marketplace with 34 curated MCPs across 10 categories
- [x] ReimbursementEngine (18 tools) live
- [x] HIPAA compliance rating framework published
- [x] Clinical validity scoring methodology published
- [ ] Developer submission portal live
- [ ] PriorAuthEngine (proprietary MCP) — Q2 2026
- [ ] DenialEngine (proprietary MCP) — Q3 2026
- [ ] HIPAA-compliant MCP development templates
- [ ] Healthcare MCP Certification program
- [ ] Managed gateway hosting for Level 4/5 MCPs
- [ ] Private marketplace deployment for enterprise customers
- [ ] Annual Healthcare MCP Ecosystem Report

---

## Contributing

This is an open marketplace. We welcome:

- **MCP submissions** — [Open an issue](https://github.com/rdmgator12/MCP-marketplace/issues) with the `[MCP Submission]` tag
- **Category suggestions** — Help us refine the taxonomy
- **Bug reports** — Found an issue with a listing? Let us know
- **Compliance feedback** — Help us improve the rating methodology

---

## License

The marketplace itself is open source. Individual MCPs carry their own licenses as noted in each listing. Proprietary MCPs (ReimbursementEngine, PriorAuthEngine, DenialEngine) are licensed under separate commercial terms.

---

## Star This Repo ⭐

If this marketplace is useful to you, star the repo. It helps other healthcare teams find these tools.

---

*Built with ❤️ by Ralph Martello, MD | MCP for Healthcare*
