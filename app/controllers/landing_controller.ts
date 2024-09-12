import type { HttpContext } from '@adonisjs/core/http'

export default class LandingController {
  async render({ inertia }: HttpContext) {
    return inertia.render('landing')
  }
}
