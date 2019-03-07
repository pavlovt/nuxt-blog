module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    "@babel/plugin-proposal-optional-chaining",
    ['wildcard', {
      'useCamelCase': true,
      'exts': ["js", "vue", "svg"]
    }]
  ],
}
