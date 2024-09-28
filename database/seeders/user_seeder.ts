import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserRole } from '#enums/user_role'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'admin@example.com',
      password: 'adminTest123',
      role: UserRole.Admin,
    })
  }
}
