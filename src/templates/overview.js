import React from 'react';
import { graphql, Link } from 'gatsby';
import circle from '../images/circle-124.png';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Overview = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/overview/' + node.fields.name,
  }));
  return (
    <Layout>
      <SEO title="Overview" />
      <div
        id="overview"
        className="bg-primary-darker usa-content font-serif-lg padding-y-6"
      >
        <div className="grid-container">
          <h1 className="text-normal text-white margin-0">Overview</h1>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-row">
          <div className="desktop:grid-col-8 usa-prose">
            <main id="main-content">
              <div className="usa-graphic-list__row grid-row grid-gap">
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                    <p>
                      A Software Bill of Materials (SBOM) is a complete,
                      formally structured list of components, libraries, and
                      modules that are required to build (i.e. compile and link)
                      a given piece of software and the supply chain
                      relationships between them. These components can be open
                      source or proprietary, free or paid, and widely available
                      or restricted access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="usa-graphic-list__row grid-row grid-gap">
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">Procurement</h3>
                    <p>
                      Cross-team exercise to explore how the SBOM impacts the
                      purchasing decision, including the development of contract
                      language.{' '}
                    </p>
                  </div>
                </div>
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">
                      Risk Management
                    </h3>
                    <p>
                      Leverage manual processes and automated eGRC technologies
                      to identify new vulnerabilities and risks over time and
                      implement risk mitigation techniques.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="usa-graphic-list__row grid-row grid-gap">
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">
                      Asset Management
                    </h3>
                    <p>
                      Demonstrate the inventorying of application components
                      using both manual processes and CMDB/CMMS technologies.
                    </p>
                  </div>
                </div>
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">
                      Vulnerability Management
                    </h3>
                    <p>
                      Identify ways to supplement and integrate SBOM data into
                      vulnerability identification and security scanning
                      activities.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="usa-graphic-list__row grid-row grid-gap">
                <div className="usa-media-block tablet:grid-col">
                  <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">
                      What are SBOM used for?
                    </h3>
                    <p>
                      In today’s world, software touches every part of our life
                      and spans across industries, with much of it built on
                      third-party code and open source software.{' '}
                    </p>
                    <p>
                      SBOMS are for...
                      <ul>
                        anyone who is concerned about better supporting their
                        software{' '}
                      </ul>
                      <ul>
                        {' '}
                        products internally anyone that needs to support their
                        customers
                      </ul>
                      <ul>
                        {' '}
                        anyone wanting to positively differentiating themselves
                        in the marketplace
                      </ul>
                      <p>
                        Over time, more SBOM requirements may emerge, such as
                        the FDA mandate for medical device manufacturers. For
                        additional information on use cases and benefits of
                        SBOMs.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="usa-graphic-list__row grid-row grid-gap">
                <div>
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">
                      Who uses an SBOM and for what?
                    </h3>
                    <div className="usa-media-block tablet:grid-col">
                      <div className="usa-media-block__body">
                        <p>
                          For those who operate software, SBOMs are used to
                          inform vulnerability management, asset management, to
                          manage licensing and compliance, and to quickly
                          identify software or component dependencies and supply
                          chain risks.{' '}
                        </p>
                      </div>
                    </div>
                    <div className="usa-media-block tablet:grid-col">
                      <div className="usa-media-block__body">
                        <p>
                          For those who produce software, SBOMs are used to
                          assist in the building and maintenance of their
                          supplied software.{' '}
                        </p>
                      </div>
                    </div>
                    <div className="usa-media-block tablet:grid-col">
                      <div className="usa-media-block__body">
                        <p>
                          For those who choose or purchase software, SBOMs are
                          used to inform pre-purchase assurance, negotiate
                          discounts, or plan implementation strategies.{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              <div className="usa-graphic-list__row grid-row grid-gap">
                  <div className="usa-media-block tablet:grid-col">
                    <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">
                      Use Cases
                    </h3>
                      <p>
                        <ul>
                          Some of the hospitals currently take the SBOMs they've
                          been given from their partial list of suppliers that
                          provide them, and they have scripts that just watch
                          the national vulnerability database and give them a
                          local alert -- that type of automation.
                        </ul>
                        <ul>
                          {' '}
                          Banks would track the metrics of when there's a new
                          vulnerability in projects and track the Mean Time to
                          Remediate (MTTR). With SBOM, you’ll be able to see
                          which projects take 30 days opposed to over a year. So
                          as you start to track performance over time, because
                          now you're able to measure them, it becomes much
                          easier to know good from bad vendors or good from bad
                          open source projects.
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "overview-posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
          }
          fields {
            name
          }
        }
      }
    }
  }
`;

export default Overview;
