import React from 'react';
import circle from '../images/circle-124.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Framing Working group
            </h3>
            <p>
            Work will focus defining and refining the specification of SBOMs, with attention to obstacles to broader, more scalable adoption. Topics identified include: component identity and naming, how to share SBOMs, how to characterize non-exploitability vs. vulnerability, SBOM integrity and high assurance data, SBOMs for Cloud/SAAS, and others.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Awareness and Adoption
            </h3>
            <p>
            Work will focus on promoting SBOM as an idea and a practice. Tasks identified include: building a broader outreach strategy with outreach targets; shorter documents with specific outreach goals for sectors, organizational role, etc; coordinating with related efforts; more explicit business cases for SBOM adoption.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Formats & Tooling
            </h3>
            <p>
            Working group will focus on how to automate SBOM production and use. Initial goals are to catalog existing tools for SBOMs in the different identified standards (SPDX, SWID, CycloneDX) and develop a translator between these formats. Further work will include a gap analysis in SBOM tools, and potentially explore SBOM processes and playbooks.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Healthcare Proof of Concept
            </h3>
            <p>
            Working group will plan and execute a second proof-of-concept exercise, with an expanded set of healthcare participants and the inclusion of IT and security industry partners. The group will also advise other industry players interested in SBOM demonstrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
