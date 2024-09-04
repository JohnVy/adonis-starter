import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class ProfileController {
  static updateProfileValidator = vine.compile(
    vine.object({
      fullName: vine.string().minLength(3).maxLength(255).optional(),
      email: vine.string().email().optional(),
    })
  )

  render({ inertia }: HttpContext) {
    return inertia.render('profile/index')
  }

  async updateProfile({ auth, request, response }: HttpContext) {
    const user = auth.use('web').user!
    const { fullName, email } = await request.validateUsing(
      ProfileController.updateProfileValidator
    )

    if (fullName) user.fullName = fullName
    if (email) user.email = email

    await user.save()

    return response.redirect().toRoute('profile.show')
  }
}
