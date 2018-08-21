export default {
	user: {},
  // html head
  head: {
    preTitle: 'Admin Panel - ', 
    postTitle: '', 
    title: 'z', 
    charset: 'utf8',
    ie: {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
    viewport: { content: 'width=device-width,initial-scale=1.0'},
  },
  server: {
    url: 'https://jsonplaceholder.typicode.com',
    apis: {
      posts: '/posts',
    }
  },
  mock: {

  }
}