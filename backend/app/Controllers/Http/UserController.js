const db = use('App/Models/User')

class UserController {
  async index () {
    return await db.all()
  }

  async store () {
  }

  async show ({params, resource}) {
    return await db.find(params.id)
  }

  async update () {
  }

  async destroy () {
  }

  async login ({ request, auth, response }) {
    const { username, password } = request.all()
    // await auth.attempt(username, password)
    const user = await db.query().select('*').where('username', username).first()
    
    if (user.password != password) {
      response.status(401).send({status: 'fail', message: 'Invalid username or password'})
    } else {
      await auth.login(user)
      return {status: 'success', message:'Logged in successfully'}
    }

  }

  async logout ({auth}) {
    await auth.logout()

    return {status: 'success', message:'Logged out successfully'}
  }
}

module.exports = UserController
