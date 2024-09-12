import type { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/orders')
  }
}
