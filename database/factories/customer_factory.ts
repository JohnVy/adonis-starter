import factory from '@adonisjs/lucid/factories'
import { UserFactory } from './user_factory.js'
import Customer from '#models/customer'

export const CustomerFactory = factory
  .define(Customer, async ({ faker }) => {
    return {
      stripe_customer_id: faker.finance.accountNumber(10),
      userId: null,
    }
  })
  .relation('user', () => UserFactory)
  .build()
