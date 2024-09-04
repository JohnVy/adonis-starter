import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class RegisterController {
  static registerValidator = vine.compile(
    vine.object({
      nickName: vine.string().minLength(1),
      email: vine.string().email(),
      password: vine.string().minLength(6),
    })
  )

  async register({ auth, request, response }: HttpContext) {
    const { nickName, email, password } = await request.validateUsing(
      RegisterController.registerValidator
    )

    const user = await User.create({
      nickName,
      email,
      password,
    })

    await auth.use('web').login(user)

    return response.redirect().toRoute('client.dashboard')
  }
}
