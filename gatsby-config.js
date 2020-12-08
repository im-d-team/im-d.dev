const path = require('path');

module.exports = {
  siteMetadata: {
    title: `IMD_Tech`,
    googleVerification: `abcdefz`,
    disqus: `gatsby-typescript`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IMD_tech`,
        short_name: `IMD`,
        start_url: `/`,
        background_color: `#fcdab7`,
        theme_color: `#1d2d50`,
        display: `standalone`,
        icon: path.join(__dirname, 'data/img/imd_logo.png'),
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
          '@css': 'src/assets/css',
        },
        extensions: ['ts', 'tsx', 'js', 'css'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              backgroundColor: `#f7f0eb`,
              showCaptions: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/assets/css/valuable.scss";`,
      }
    },
    `gatsby-plugin-typescript`,
  ],
};
