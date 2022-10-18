module.exports = {
  siteMetadata: {
    title: `Client-Only Paths`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
