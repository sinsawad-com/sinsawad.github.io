module.exports = {
  siteMetadata: {
    title: `สินสวัสดิ์`,
    description: `บริษัท สินสวัสดิ์ จำกัด จำหน่ายสินค้าประเภทยางสำหรับงานวิศวกรรมก่อสร้าง`,
    author: `Praphan Oranphanlert <praphan.o@gmail.com>`,
    siteUrl: `https://www.sinsawad.com`
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