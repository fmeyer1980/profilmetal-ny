const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/css/global.scss')]
    });
}

module.exports = {
  siteName: 'Profilmetal',
  siteDescription: 'A WordPress starter for Gridsome',
  plugins: [
    // {
    //   use: '@gridsome/source-wordpress',
    //   options: {
    //     baseUrl: 'http://fmeyer.dk.linux223.unoeuro-server.com/', // required
    //     typeName: 'WordPress', // GraphQL schema name (Optional)
    //     perPage: 100, // How many posts to load from server per request (Optional)
    //     concurrent: 10, // How many requests to run simultaneously (Optional)
    //     routes: {
    //       post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    //       post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
    //     }
    //   }
    // }
  ],

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    );
  }
}
