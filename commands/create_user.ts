import { UserRole } from '#enums/user_role'
import User from '#models/user'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user'
  static description = 'Create a new user'

  static options: CommandOptions = {
    // Define expected arguments
    args: [],
  }

  async run() {
    const email = await this.prompt.ask('Enter the email of the user')
    const password = await this.prompt.secure('Enter the password of the user')

    const isAdmin = await this.prompt.confirm('Is this user an admin?')
    const role = isAdmin ? UserRole.Admin : UserRole.User

    // Create a new user
    await User.create({ email, password, role })

    this.logger.success(`User created with email: ${email}`)
  }
}
