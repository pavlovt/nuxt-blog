export default {
  install(Vue, options) {
    // Vue.component(MyComponent.name, MyComponent)
    // Vue.directive(MyDirective.name, MyDirective)
    /*Vue.mixin({
      mounted() {
        console.log('Mounted!', this);
      }
    })*/

    Vue.filter('capitalize', function (value) {
		  if (!value) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		})
  }
}