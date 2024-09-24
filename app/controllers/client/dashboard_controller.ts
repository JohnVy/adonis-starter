import { HttpContext } from '@adonisjs/core/http'
import UserProfile from '#models/user_profile'

export default class DashboardController {
  async show({ auth, inertia }: HttpContext) {
    const user = auth.use('web').user!

    // Récupération du profil utilisateur
    const profile = await UserProfile.query().where('user_id', user.id).first()

    // Récupération des informations client, si disponibles
    // const customer = await Customer.query().where('user_id', user.id).first()

    return inertia.render('client/dashboard', {
      user,
      profile,
    })
  }
}
