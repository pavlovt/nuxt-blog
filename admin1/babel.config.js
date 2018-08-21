module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    ['wildcard', {
      'useCamelCase': true,
      'exts': ["js", "vue", "svg"]
    }]
  ],
}
