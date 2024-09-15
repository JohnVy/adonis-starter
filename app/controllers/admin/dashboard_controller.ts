import { UserRole } from '#enums/user_role'
import Customer from '#models/customer'
import { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  async show({ auth, inertia, response }: HttpContext) {
    const user = auth.use('web').user!

    if (user.role !== UserRole.Admin) {
      return response.redirect().toRoute('/login')
    }

    const customerCountResult = await Customer.query().count('* as total').first()
    const customerCount = customerCountResult || 0

    const recentCustomers = await Customer.query().orderBy('created_at', 'desc').limit(5)

    return inertia.render('admin/dashboard', {
      user,
      customerCount,
      recentCustomers,
    })
  }
}
