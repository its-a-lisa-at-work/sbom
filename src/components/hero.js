import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">SBOM</span>Software Transparency
        </h2>
        <p>
        A “Software Bill of Materials” (SBOM) is effectively a nested inventory, a list of ingredients that make up software components. The following documents were drafted by stakeholders in an open and transparent process to address transparency around software components, and were approved by a consensus of participating stakeholders.
        </p>
        <a className="usa-button" href="/">
          Call to action
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
