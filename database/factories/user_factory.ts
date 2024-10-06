import factory from '@adonisjs/lucid/factories'
import { UserRole } from '#enums/user_role'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement([UserRole.User, UserRole.Admin]), // Example with user/admin roles
    }
  })
  .build()
