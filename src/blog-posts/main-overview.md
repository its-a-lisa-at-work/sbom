---
title: Main Overview
date: 'August 22, 2020'
author: Alyssa
---

A **Software Bill of Materials (SBOM)** is a complete, formally structured list of components, libraries, and modules that are required to build (i.e. compile and link) a given piece of software and the supply chain relationships between them. These components can be open source or proprietary, free or paid, and widely available or restricted access. 

Who uses an SBOM and for what?
For those who produce software, SBOMs are used to assist in the building and maintenance of their supplied software.
For those who choose or purchase software, SBOMs are used to inform pre-purchase assurance, negotiate discounts, or plan implementation strategies.
For those who operate software, SBOMs are used to inform vulnerability management, asset management, to manage licensing and compliance, and to quickly identify software or component dependencies and supply chain risks.

Why we need SBOM: Myth vs Reality

Myth: I don't need an SBOM. I can just -- my vendor -- can tell me if they're vulnerable." 
Reality: Pointed out how many devices they have where there isn't a vendor. The vendor's out of business.

Who should have an SBOM?
In today’s world, software touches every part of our life and spans across industries, with much of it built on third-party code and open source software. 
SBOMS are for...
anyone who is concerned about better supporting their software products internally
anyone that needs to support their customers
anyone wanting to positively differentiating themselves in the marketplace 
Over time, more SBOM requirements may emerge, such as the FDA mandate for medical device manufacturers. For additional information on use cases and benefits of SBOMs. 

Who creates and maintains an SBOM?
An SBOM is created and maintained by the manufacturer or supplier of the software.

A new SBOM should be created for every new release of a component. Changes to components require corresponding changes to SBOMs to be valid. 

How will SBOM data be shared?
Readme in the distribution kit, on disk next to the binary
Manufacturer website
Some centralized or trusted third party’s website
Full content from device
Pointer from device (MUD)
Human-readable files provided to the purchaser


How does an SBOM help in the event of a cyberattack?
When flaws or vulnerabilities are discovered in a given component, SBOMs are used to quickly identify software that is affected by the vulnerable component, to assess its usage, and to understand the risk introduced by the vulnerable component. The ability to identify vulnerabilities allows software suppliers to produce patches or provide other remediation options; allows consumers to apply mitigations independently of the software supplier; and allows the identification of software that is not affected. This enables focusing on the software that may be affected.

Use Cases from Industry
Some of the hospitals currently take the SBOMs they've been given from their partial list of suppliers that provide them, and they have scripts that just watch the national vulnerability database and give them a local alert -- that type of automation.

Banks would track the metrics of when there's a new vulnerability in projects and track the Mean Time to Remediate (MTTR). With SBOM, you’ll be able to see which projects take 30 days opposed to over a year. So as you start to track performance over time, because now you're able to measure them, it becomes much easier to know good from bad vendors or good from bad open source projects.

Use Cases (Overviews)
Procurement
Cross-team exercise to explore how the SBOM impacts the purchasing decision, including the development of contract language. 
Risk Management
Leverage manual processes and automated eGRC technologies to identify new vulnerabilities and risks over time and implement risk mitigation techniques. 
Asset Management
Demonstrate the inventorying of application components using both manual processes and CMDB/CMMS technologies. 
Vulnerability Management
Identify ways to supplement and integrate SBOM data into vulnerability identification and security scanning activities. 


