import factory from '@adonisjs/lucid/factories'
import { UserFactory } from './user_factory.js'
import UserProfile from '#models/user_profile'

export const UserProfileFactory = factory
  .define(UserProfile, async ({ faker }) => {
    return {
      user_name: faker.internet.userName(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar(),
      phone_number: faker.phone.number('+33 ### ### ###'),
    }
  })
  .relation('user', () => UserFactory)
  .build()
