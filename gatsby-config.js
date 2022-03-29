console.log('dirname', __dirname);
module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    // 'gatsby-transformer-json',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `products`,
    //     path: `${__dirname}/src/data/products`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `categories`,
    //     path: `${__dirname}/src/data/categories`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `keywords`,
    //     path: `${__dirname}/src/data/keywords`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node }) => node.name.charAt(0).toUpperCase() + node.name.slice(1)
      }
    },

  ]
};