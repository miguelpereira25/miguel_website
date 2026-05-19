---
title: "What Does a PSIRT Actually Do?"
date: 2026-04-06
tags: ["explainer"]
description: "A plain-language breakdown of what a Product Security Incident Response Team does, why it exists, and how it fits into the broader vulnerability ecosystem."
---

The term gets used a lot in vendor security communications. What it actually means — and what the people inside one spend their time doing — is less often explained.

## The short version

A Product Security Incident Response Team (PSIRT) is the function inside a technology vendor responsible for receiving, investigating, and coordinating the response to vulnerability reports affecting its products. If a researcher finds a bug in your router firmware, your industrial controller, or your enterprise software, the PSIRT is the team they talk to — and the team that decides what happens next.

## Why vendors need a dedicated function

Security vulnerabilities in products are not the same as security incidents in infrastructure. When someone reports a bug in your network monitoring platform, the response isn't "patch the server" — it's a multi-month process involving engineering triage, fix development, coordinated disclosure with the reporter, advisory publication, and CVE assignment. That process touches legal, product management, engineering, and communications. Someone has to own it.

Without a PSIRT, reports fall into inboxes nobody monitors, get forwarded to engineers who aren't sure what to do with them, and occasionally surface six months later as public exploits against unpatched systems. A functioning PSIRT is what prevents that.

## The intake process

Most PSIRTs operate a published vulnerability disclosure policy and a dedicated intake channel — typically a security email address or a web form. The policy tells researchers what to expect: how quickly they'll receive an acknowledgement, what the handling timeline looks like, whether the organisation offers bug bounties or recognition, and how coordinated disclosure works.

When a report comes in, the first job is triage. Is this actually a vulnerability? Does it affect a product in scope? Has it been reported before? What's the initial severity assessment? This stage is faster than it sounds for an experienced team, but it requires both technical depth and familiarity with the product portfolio.

## Working with reporters

The relationship between a PSIRT and the researcher who filed a report matters more than most vendors acknowledge. A researcher who gets a prompt, substantive response is far more likely to work collaboratively toward a coordinated disclosure timeline. One who gets silence, form letter rejections, or legal threats is far more likely to go public — or simply stop reporting.

Good PSIRT practice means treating researchers as partners. That includes keeping them updated as the fix progresses, negotiating disclosure timelines in good faith, and crediting them appropriately in the published advisory if they want it.

## CVE assignment and CNA operations

Many PSIRTs at larger organisations operate as a CVE Numbering Authority (CNA). This means they have the authority to assign CVE IDs to vulnerabilities within their product scope without going through MITRE — the root authority for the CVE Program.

In practice this means the PSIRT is responsible for more than just coordinating a fix. It's also responsible for the quality of the public record: writing accurate CVE descriptions, mapping vulnerabilities to the right CWE entries, scoring them with CVSS, and publishing them in the CVE JSON 5.0 format that downstream consumers (NVD, SIEM vendors, vulnerability scanners) rely on. Poor records propagate downstream. A vague description in a CVE entry becomes a vague detection rule in a scanner, which becomes a missed vulnerability on an operator's dashboard.

## The advisory

When a fix is ready, the PSIRT publishes a security advisory. This is the formal record of the vulnerability: what it is, which products and versions are affected, what the fix is, and how to get it. Advisories vary enormously in quality across the industry. The best ones include enough technical detail to help operators assess risk, clear version information, direct links to patches, and CVSS scores with environmental guidance. The worst ones say "a security issue was fixed" and leave everyone to guess.

The advisory and the CVE record are published simultaneously with the patched software — this is coordinated disclosure. The timing matters: you don't want operators scrambling without a fix available, but you also don't want the fix to ship quietly without operators knowing they need to deploy it.

## What keeps a PSIRT busy

Beyond the headline cases — the high-severity vulns that require rapid response — most of the work is operational: maintaining the disclosure policy, responding to lower-severity reports, tracking remediation timelines across engineering teams, managing the CVE ID pipeline, handling duplicate reports, and monitoring public sources for vulnerabilities that haven't been reported through the official channel but are clearly affecting your products.

There's also the coordination overhead. A vulnerability in a shared component affects multiple products. A vulnerability disclosed by one vendor may have an equivalent in a related product from a different team. A coordinated disclosure involving multiple vendors requires synchronising patch timelines and advisory publication across organisations that move at different speeds.

## PSIRT vs. CSIRT vs. SOC

A common point of confusion: a PSIRT is not a CSIRT (Computer Security Incident Response Team) and is not a SOC (Security Operations Centre). A CSIRT typically handles security incidents affecting the organisation's own infrastructure — breaches, compromises, data loss. A SOC monitors for and responds to threats in real time. A PSIRT handles vulnerabilities in the products the organisation *ships to customers*. The focus is outward — on the security of things other people depend on — rather than inward on the organisation's own environment.

In practice, the functions sometimes overlap, especially in smaller organisations. But the disciplines are distinct.

## Why it matters

The CVE ecosystem, patch management, vulnerability scanning, SBOM tooling — all of it depends on PSIRTs doing their job well. When a PSIRT is slow, opaque, or hostile to researchers, vulnerabilities stay unpatched longer, operators lack the information they need to make decisions, and the overall security posture of systems built on that vendor's products degrades.

When a PSIRT functions well, it's a genuine part of the security infrastructure. Not just for the vendor's customers, but for the broader ecosystem that relies on accurate, timely vulnerability information to make decisions.

It's unglamorous work most of the time. But it's load-bearing.
