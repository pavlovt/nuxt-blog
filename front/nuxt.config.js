module.exports = {
  modules: [
    '@nuxtjs/markdownit'
  ],

  router: {
    middleware: ['core']
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-container',
      'markdown-it-attrs'
    ]
  }
}