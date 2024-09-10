import { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/dashboard')
  }
}
