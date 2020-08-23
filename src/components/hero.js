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
        A Software Bill of Materials (SBOM) is a formally structured list of components, libraries, and modules that were used to build (i.e. compile and link) a given piece of software and the supply chain relationships between them. These components can be open source or proprietary, free or paid, and the data can be widely available or access-restricted. 
        </p>

      </div>
    </div>
  </section>
);

export default Hero;
