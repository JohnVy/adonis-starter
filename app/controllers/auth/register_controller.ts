import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class RegisterController {
  static registerValidator = vine.compile(
    vine.object({
      userName: vine.string().minLength(1),
      email: vine.string().email(),
      password: vine.string().minLength(6),
    })
  )

  render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async register({ auth, request, response }: HttpContext) {
    const { userName, email, password } = await request.validateUsing(
      RegisterController.registerValidator
    )

    const user = await User.create({
      userName,
      email,
      password,
    })

    await auth.use('web').login(user)

    return response.redirect().toRoute('client.dashboard')
  }
}
