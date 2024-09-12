import type { HttpContext } from '@adonisjs/core/http'

export default class CustomersController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/customers')
  }
}
