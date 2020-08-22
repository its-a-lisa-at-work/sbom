import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const OverviewPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {frontmatter.sidenav && <Sidenav />}
            <div className="grid-container">
          <h1 className="text-normal text-white margin-0">Blog</h1>
          <span className="text-base-lighter display-block padding-top-1 text-light">
            This is a description of the page.
          </span>
        </div>
      </div>

            <main id="main-content" className="usa-layout-docs__main desktop:grid-col-9 usa-prose"
              dangerouslySetInnerHTML={{ __html: html }}>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(
      fields: {
        sourceName: { eq: "overview-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
      }
    }
  }
`;

export default OverviewPage;
