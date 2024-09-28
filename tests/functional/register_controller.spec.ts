import { test } from '@japa/runner'
import User from '#models/user'
import UserProfile from '#models/user_profile'

test.group('RegisterController', (group) => {
  // Nettoyer la base de données avant chaque test
  group.each.teardown(async () => {
    await User.query().delete()
    await UserProfile.query().delete()
  })

  test('successful registration', async ({ client, assert }) => {
    const response = await client.post('/register').form({
      email: 'testuser@example.com',
      password: 'securePassword123',
    })

    response.assertStatus(302)
    response.assertRedirectsTo('/login')

    const user = await User.findByOrFail('email', 'testuser@example.com')
    assert.equal(user.email, 'testuser@example.com')

    const userProfile = await UserProfile.findByOrFail('userId', user.id)
    assert.isNotNull(userProfile)
  })

  test('registration fails with invalid email', async ({ client }) => {
    const response = await client.post('/register').form({
      email: 'invalid-email',
      password: 'securePassword123',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          field: 'email',
          rule: 'email',
        },
      ],
    })
  })

  test('registration fails with short password', async ({ client }) => {
    const response = await client.post('/register').form({
      email: 'testuser2@example.com',
      password: 'short',
    })

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          field: 'password',
          rule: 'minLength',
        },
      ],
    })
  })
})
