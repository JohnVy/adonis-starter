import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  async render({ inertia }: HttpContext) {
    return inertia.render('about')
  }
}
