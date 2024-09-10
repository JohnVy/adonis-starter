import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class RegisterController {
  static registerValidator = vine.compile(
    vine.object({
      email: vine
        .string()
        .trim()
        .email()
        .unique(async (db, value) => {
          const user = await db.from('users').where('email', value).first()
          return !user
        }),
      password: vine.string().minLength(8).maxLength(20),
    })
  )

  render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async register({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(RegisterController.registerValidator)

    const user = await User.create({
      email,
      password,
    })

    await auth.use('web').login(user)

    return response.redirect().toRoute('/login')
  }
}
