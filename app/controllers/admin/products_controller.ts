import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/products')
  }
}
