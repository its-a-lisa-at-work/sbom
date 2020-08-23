import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        The Software Component Transparency initiative welcomes participation.
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
        NTIA’s next cybersecurity multistakeholder process focuses on Software Component Transparency. Participants explore how manufacturers and vendors can communicate useful and actionable information about the third-party software components that comprise modern software and IoT devices, and how this data can be used by enterprises to foster better security decisions and practices.  The first meeting was held on July 19, 2018 and brought stakeholders together to share the range of views on software and IoT component transparency, and to establish desired stakeholder outcomes and a structure for this process.  The goal of this initiative is to foster a market offering greater transparency to organizations, who can then integrate this data into their risk management approach.
        </p>

      </div>
    </div>
  </section>
);

export default Tagline;
