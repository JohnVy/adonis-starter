import type { HttpContext } from '@adonisjs/core/http'

export default class SettingsController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/settings')
  }
}
