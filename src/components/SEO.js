import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteDesc: description
        author
        twitterUsername
        image
        siteTitle: title
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata

  return <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
    <meta name="description" conent={description || siteDesc} />
    <meta name="image" content={image} />
  </Helmet>
}

export default SEO
