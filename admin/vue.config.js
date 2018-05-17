module.exports = {
  // configure webpack-dev-server behavior
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  configureWebpack: config => {
    /*if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }*/

    const use = ['raw-loader',
            {
              loader: "easy-html-webpack-loader",
              options: {
                // macros: macros,
              }
            }
          ]

    config.module.rules.push({
          test: /\.ehtml$/,
          oneOf: [
				    {
				      resourceQuery: /^\?vue/,
				      use: use
				    },
	          // use: ['raw-loader', 'easy-html'],
	          {use: use}
          ]
        })

  }
}