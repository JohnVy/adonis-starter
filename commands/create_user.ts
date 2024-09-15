import { UserRole } from '#enums/user_role'
import User from '#models/user'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user'
  static description = 'Create a new user'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string()
  declare email: string

  async run() {
    this.logger.info(`Creating user ${this.email}`)

    // Request password
    const password = await this.prompt.ask('Enter the password')

    // Request role
    const isAdmin = await this.prompt.confirm('Is this user an admin?')

    const role = isAdmin ? UserRole.Admin : UserRole.User

    await User.create({
      email: this.email.toLowerCase().trim(),
      password: password,
      role: role,
    })

    this.logger.success(`User ${this.email} created`)
  }
}
