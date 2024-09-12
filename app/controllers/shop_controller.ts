import type { HttpContext } from '@adonisjs/core/http'

export default class ShopsController {
  async render({ inertia }: HttpContext) {
    return inertia.render('shop')
  }
}
