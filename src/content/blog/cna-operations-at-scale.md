---
title: "CNA Operations at Scale: Lessons from the Trenches"
date: 2025-02-10
tags: ["insight"]
description: "Hard-won lessons from running CVE Numbering Authority operations in a large enterprise environment."
---

Running a CVE Numbering Authority inside a large organisation is a different discipline than vulnerability research. The technical side is straightforward. The operational side — triaging inbound reports, coordinating with product teams, hitting disclosure timelines, maintaining accurate scope — is where most CNAs struggle.

Here are the patterns I've found useful.

## Treat the intake queue like a production system

The moment your CNA's contact information is public, you have an SLA. Researchers expect acknowledgement within 24–72 hours. A queue that isn't actively managed is a queue that loses trust.

The practical fix is to treat intake like an on-call rotation rather than a shared inbox. Someone is the primary responder each week. That person owns acknowledgement, initial triage, and routing to the right product team. Everyone else is backup.

## The scope document is your first line of defence

Unclear scope is the root cause of most intake friction. Researchers send reports on products you don't own. Adjacent vendors forward issues because they don't know who should handle them. Internal teams assume you cover components you don't.

A precise, publicly reachable scope document — and the willingness to redirect clearly out-of-scope reports rather than absorbing them — saves significant operational overhead.

## CVSS is a communication tool, not an objective measure

The score exists to communicate severity in a standardised way. The argument about whether a given base score should be 7.8 or 8.1 is almost always less important than getting the record published with enough context for operators to make a patching decision.

Spend the analytical energy on CWE classification — that has more operational value than debating base vector components.

## Disclosure timelines are coordination problems

The 90-day standard (or whatever your policy states) is a coordination deadline, not a technical one. The hard work is getting the fix, the advisory, and the CVE record ready to ship simultaneously. That requires building relationships with the product teams before you need to move fast.

The CNAs that struggle with timelines are usually the ones who engage product teams only when a disclosure deadline is approaching. The ones who succeed have made vulnerability communication a routine part of the development cycle.

## Record quality compounds over time

A CVE record published with a vague description and no references is worse than a delayed record with good context. Operators who query the CVE List for your products will form an impression of your programme from the quality of your records.

References, affected version ranges, patch links, and CWE mappings are not optional extras. They are the product.

## AI-generated reports are changing the intake problem

The volume of AI-assisted vulnerability reports is growing, and the pattern is consistent: well-structured prose, plausible-sounding technical framing, and reproduction steps that either can&#x2019;t be followed or were never tested. Triage time goes up; confirmed findings do not.

This is not an argument against researchers using AI tooling. AI can sharpen a report&#x2019;s structure, help classify a weakness, or surface a CWE that fits the behaviour. That is legitimate and useful.

The accountability question doesn&#x2019;t change, though. The researcher&#x2019;s name is on the report. If the reproduction steps are generated and untested, that is the researcher&#x2019;s problem when the triage analyst can&#x2019;t reproduce the issue. If the impact statement is speculative, the report will be deprioritised behind ones where the evidence is clear.

Embrace the tooling. Own the output. A report that can be reproduced in a clean environment in under an hour will always move faster through a queue than one that requires interpretation.