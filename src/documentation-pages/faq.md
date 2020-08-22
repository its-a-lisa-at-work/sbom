---
title: FAQ
sidenav: false
---

# SBOM FAQ
## Table of Contents
### OVERVIEW 
#### What is an SBOM?
#### Who should have an SBOM? 
#### Who uses an SBOM and for what?
### BENEFITS 
#### What are the benefits of an SBOM?
#### How does an SBOM help in the event of a cyberattack?
#### In addition to vulnerability management, how can SBOMs help me?
#### How have bills of material and supply chain transparency been helpful elsewhere?
### COMMON MISCONCEPTIONS & CONCERNS
####  Won’t SBOMs be a “roadmap to the attacker”?
#### Does an SBOM require source code disclosure?
#### Does a list of the software components I include expose my intellectual property?
####  Does an SBOM increase my exposure to license violations?
#### Does an SBOM enable patent or license “trolls”?
#### Will SBOMs increase my licensing costs or licensing commitments?
### CREATION
####  Who creates and maintains an SBOM?
####  What should be included in an SBOM?
####  When is an SBOM created, changed, or maintained?
####  Some software components are made up of other software components themselves. Can an SBOM show that hierarchy?
####  How deep in the dependency graph should an SBOM enumerate?
### DISTRIBUTION & SHARING
####  If I make an SBOM, do I have to make it public?
####  How will SBOM data be shared?
### ROLE SPECIFIC
#### Q: How can SBOMs be leveraged as a Purchaser?
#### Q: How can SBOMs help an engineer provide surveillance for deployed technology in the field for emerging vulnerabilities?
### GET INVOLVED
#### Q: Where can I find more information about the NTIA SBOM process? How do I get involved?
### OVERVIEW
#### Q: What is an SBOM?
A: A Software Bill of Materials (SBOM) is a formally structured list of components, libraries, and modules that were used to build (i.e. compile and link) a given piece of software and the supply chain relationships between them. These components can be open source or proprietary, free or paid, and the data can be widely available or access-restricted. 

For details, see Section 2 of [Framing Software Component Transparency: Establishing a Common Software Bill of Material (SBOM)](https://www.ntia.gov/files/ntia/publications/framingsbom_20191112.pdf)
#### Q: Who should have an SBOM?
A: In today’s world, software touches every part of our life and spans across industries, with much of it built on third-party code and open source software. Anyone who is concerned about better supporting their software products internally, supporting their customers, and positively differentiating themselves in the marketplace should consider creating SBOMs and providing them to support their customers. Over time, more SBOM requirements may emerge, such as the FDA’s mandate for medical device manufacturers in the draft [Pre-Market Guidance for Cybersecurity](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-premarket-submissions-management-cybersecurity-medical-devices) 

For additional information on use cases and benefits of SBOMs, see:
[NTIA SBOM Use Cases Roles Benefits](https://www.ntia.gov/files/ntia/publications/ntia_sbom_use_cases_roles_benefits-nov2019.pdf)
#### Q: Who uses an SBOM and for what?
A: Most SBOM usage fits under one or more of three perspectives: those who produce
software, those who choose software, and those who operate software.
- For those who produce software, SBOMs are used to assist in the building and maintenance of their software, including upstream components.
- For those who choose or purchase software, SBOMs are used to inform pre-purchase assurance, negotiate discounts, or plan implementation strategies.
- For those who operate software, SBOMs are used to inform vulnerability management, asset management, to manage licensing and compliance, and to quickly identify software or component dependencies and supply chain risks.
### BENEFITS
#### Q: What are the benefits of an SBOM?
A: Benefits of SBOMs accrue to both software suppliers and consumers, and are similar for both. They include:
- Identifying and avoiding known vulnerabilities
- Quantifying and managing licenses
- Identifying both security and license compliance requirements
- Enabling quantification of the risks inherent in a software package
- Managing mitigations for vulnerabilities (including patching and compensating controls for new vulnerabilities)
- Lower operating costs due to improved efficiencies and reduced unplanned and unscheduled work.
These benefits can be seen by those who develop software, those who select or purchase software, and those who operate software, across every sector. 

For a complete discussion of all the benefits please see the [Roles and Benefits for SBOM Across the Supply Chain Report](https://www.ntia.gov/files/ntia/publications/ntia_sbom_use_cases_roles_benefits-nov2019.pdf)
#### Q: How does an SBOM help in the event of a cyberattack?
A: When flaws or vulnerabilities are discovered in a given component, SBOMs are used to quickly identify software that is affected by the vulnerable component, to assess its usage, and to understand the risk introduced by the vulnerable component. The ability to identify vulnerabilities allows software suppliers to produce patches or provide other remediation options; allows consumers to apply mitigations independently of the software supplier; and allows the identification of software that is not affected. This enables focusing on the software that may be affected.
#### Q: In addition to vulnerability management, how can SBOMs help me?
A: With SBOMs, many parts of the organization – from procurement to operations – have the same understanding of their software assets. The benefits of increased visibility and accountability translate into providing more reliable services to their customers. Better visibility into software allows for additional business advantages such
as consolidating assets, licensing clarity, reviewing impact of new policies and regulations and responding in a timely fashion to the ever-changing business environment.
#### Q: How have bills of material and supply chain transparency been helpful elsewhere?
A: Bills of Materials and supply chain management principles have been transformative to the automotive industry, the food industry, and general manufacturing for decades.
Many of these principles were pioneered by Toyota in the 1940s and have been improved continuously across a growing list of industries. A key aspect of this revolution is transparency of the supply chain and knowledge of source, quality, and how to address defects efficiently . A promise of this SBOM initiative is to apply proven supply chain principles to modern software development. In fact, the financial sector has been experimenting with software supply chain transparency since as early as 2013.
### COMMON MISCONCEPTIONS & CONCERNS
#### Q: Won’t SBOMs be a “roadmap to the attacker”?
A: Theoretically, yes. In reality, the defensive benefits of transparency far outweigh this common concern as SBOMs serve more as a “roadmap for the defender”. All
information is dual-edged, but insufficient software transparency affords attackers
asymmetrical advantages.
- First, attackers don’t need SBOMs; mass, indiscriminate attacks like WannaCry serve to remind us that foreknowledge is not a prerequisite to cause harm.
- Second, attackers and their tools can more easily identify software components; conversely, it is often quite challenging, disruptive, inefficient, and even unlawful for defenders to determine the same.
- Third, attackers of any single product can already find human-readable target components – licensing requirements have been increasingly requiring disclosure for decades. SBOMs seek to level the playing field for defenders by providing additional transparency at enterprise scale – with standard, machine-readable decision support.
#### Q: Does an SBOM require source code disclosure?
A: No. Your proprietary source code remains yours to share or to keep confidential at your discretion. Concerns about exposing the internals of your code’s operation are likewise unfounded, as these software components are just “a piece of the puzzle”, not anything close to the “whole completed puzzle” that represents your program.
#### Q: Does a list of the software components I include expose my intellectual property?
A: No. First, there is a big difference between knowing the 3rd party ingredients and the ultimate recipe or execution. Further, any intellectual property associated with these supply chain components belongs to those upstream, 3rd party, commercial and open source software suppliers. In fact, the licenses those suppliers attached to their components may obligate you to publicly disclose that you include their software in any form.
#### Q: Does an SBOM increase my exposure to license violations?
A: No. License obligations are incurred whenever licensed software is present and these obligations are independent of SBOMs. SBOMs provide inventory of software that may otherwise be hidden. They therefore make visible potential license violations, and the awareness necessary to mitigate them.
#### Q: Does an SBOM enable patent or license “trolls”?
A: See: “Does an SBOM increase my exposure to license violations?” above.
#### Q: Will SBOMs increase my licensing costs or licensing commitments?
A: No. The awareness gained by creating an SBOM allows the manufacturer to address unknown licensing commitments that may be lurking in your programs. This permits the manufacturer to address these issues, either through licensing fees or securing more favorable licensing terms, thus avoiding fines, lawsuits, and licensing commitments such as exposure of your proprietary code.
### CREATION
#### Q: Who creates and maintains an SBOM?
A: An SBOM is created and maintained by the producers of software. “Producers” includes manufacturers, suppliers, and individual authors. Ideally, producers assemble SBOMs provided to them by their suppliers; in the absence of SBOM data, producers may have to generate the SBOM data for some components.
#### Q: What should be included in an SBOM?
A: An SBOM should contain some combination of the following baseline information: author name, supplier name, component name, version string, component hash, unique identifier, and relationship. Licensing, pedigree, provenance, should also be included, if available. For detailed information about SBOM baseline component information, see
section 2.2 of [Framing Software Component Transparency: Establishing a Common Software Bill of Material (SBOM)”](https://www.ntia.gov/files/ntia/publications/framingsbom_20191112.pdf)

#### Q: When is an SBOM created, changed, or maintained?
A: A new SBOM should be created for every new release of a component. Changes to components require corresponding changes to SBOMs to be valid. For details on when to create an SBOM, see Section 4.2 of [Framing Software Component Transparency: Establishing a Common Software Bill of Material (SBOM)”](https://www.ntia.gov/files/ntia/publications/framingsbom_20191112.pdf)


#### Q: Some software components are made up of other software components themselves. Can an SBOM show that hierarchy?
A: Yes. SBOMs can provide hierarchical information. Each component that is included in an SBOM should have an SBOM of its own if it also includes components. The SBOMs supplied with each software component taken together represent all levels of the hierarchy required to sufficiently understand the software and its various parts. Such
an SBOM is analogous to a [manufactured product multilevel bill of materials](https://en.wikipedia.org/wiki/Bill_of_materials#Multi-level_BOM).
#### Q: How deep in the dependency graph should an SBOM enumerate?
A: It depends on the intended audience and the medium of communication. In the case of a machine-readable SBOM, the minimum viable model is one layer deep with the goal of recursing up the supply chain. Many use cases (e.g. the FDA Premarket Submissions for Management of Cybersecurity in Medical Devices) would like to see it as complete as possible, but they understand that complete SBOMs will take time. For
most use cases, more complete SBOMs result in greater value.
### DISTRIBUTION & SHARING
#### Q: If I make an SBOM, do I have to make it public?
A: No. The act of making an SBOM is seperate from sharing it with those who can use this data constructively. The author may advertise and share the SBOM at their discretion. In the case of publicly available open source software, it makes sense to make the SBOM public. In other cases, sector specific regulations or legal requirements may require more or less access to the SBOM. Moreover, SBOM data that is more broadly available is more likely to have a positive impact across the supply chain for the myriad benefits discussed above.
#### Q: How will SBOM data be shared?
A: Since SBOMs will be used by a wide range of software, in a diversity of contexts, there may not be a single way to share SBOM data. However, the data can be advertised, shared, and access-controlled (if needed) in a set of predictable and discoverable ways, including:
- Distributed with the source or binary
- Manufacturer website
- Some centralized or trusted third party’s website
- Full content from device (e.g. OpenC2)
- Pointer from device (e.g. [Manufacturer Usage Description Specification](https://tools.ietf.org/id/draft-ietf-opsawg-mud-22.html))
- Human-readable files provided to the purchaser (e.g. OpenChain)
Note the sharing mechanism is independent of who the SBOM is shared with. NTIA stakeholders continue to review how SBOM data can be shared effectively.
### ROLE SPECIFIC
#### Q: How can SBOMs be leveraged as a Purchaser?
Having an SBOM informs and enables the following, prior to purchasing decisions:
- Catalog various parts of the software and their inter-relationships
- Understand chain of licensing of the software product
- Understand complexity of the software (dates, versions of various parts of the software)
#### Q: How can SBOMs help an engineer provide surveillance for deployed technology in the field for emerging vulnerabilities?
A: Periodic (ideally automated) comparisons against disclosed vulnerabilities (NVD, Vulners, etc.) can provide an early alert to a potential risk lurking in your environment. A subsequent investigation into the impact of the disclosed vulnerability upon your program can be performed so that, if necessary, a patch can be distributed to the field before your product is ever attacked. This improves customer satisfaction and can improve your position in the market. For additional benefits for engineers and other personas, see:
[NTIA SBOM Use Cases Roles Benefits](https://www.ntia.gov/files/ntia/publications/ntia_sbom_use_cases_roles_benefits-nov2019.pdf)
### GET INVOLVED
#### Q: Where can I find more information about the NTIA SBOM process? How do I get involved?
A: To learn more about the NTIA Multistakeholder process for SBOM – including scope, definitions, tools, formats, community-drafted documents, and existing state of practices – visit: www.ntia.gov/sbom, www.ntia.gov/softwareTransparency, or reach out to Allan Friedman at afriedman@ntia.gov.