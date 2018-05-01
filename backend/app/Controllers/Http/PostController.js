const db = use('App/Models/Post')

class PostController {
  async index () {
    return await db.query().with('user').fetch()
  }

  async store () {
  }

  async show ({params, resource}) {
    let data = await db.find(params.id)
    data.user = await data.user().fetch();
    return data;
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = PostController
