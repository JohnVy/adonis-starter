import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import { UserRole } from '#enums/user_role'
import User from '#models/user'

export default class LoginController {
  static loginValidator = vine.compile(
    vine.object({
      email: vine.string().trim().email(),
      password: vine.string().trim().minLength(8).maxLength(20),
    })
  )

  render({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async login({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(LoginController.loginValidator)

    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)

    if (user.role === UserRole.Admin) {
      return response.redirect().toRoute('admin.dashboard')
    } else if (user.role === UserRole.User) {
      return response.redirect().toRoute('client.dashboard')
    } else {
      return response.redirect().toRoute('/login')
    }
  }
}
