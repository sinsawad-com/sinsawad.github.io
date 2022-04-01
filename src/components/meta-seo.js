import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
        title
        description
        author
        siteUrl
        }
      }
    }
  `,
  );
  return site.siteMetadata;
};

const MetaSeo = ({ title, description, image, location }) => {
  const siteMetadata = useSiteMetadata();
  console.log(siteMetadata);
  console.log(location);
  const { title: siteTitle, description: siteDescription, author, siteUrl } = siteMetadata;
  return (
    <Helmet title={`${siteTitle} - ${title ? title : siteDescription}`} defer={false}>
      <meta name="author" content={author} />
      <meta name="description" content={description || siteDescription} />
      <meta name="og:locale" content="th_TH" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title || description || siteDescription} />
      <meta name="og:description" content={description || siteDescription} />
      <meta name="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="og:site_name" content="สินสวัสดิ์" />
      <meta name="og:image" content={image || `${siteUrl}/images/sinsawad-logo-square.jpeg`} />
    </Helmet>
  );
};

export default MetaSeo;
