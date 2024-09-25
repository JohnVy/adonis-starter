import { test } from '@japa/runner'
import { UserRole } from '#enums/user_role'
import User from '#models/user'

test.group('LoginController Functional Tests', (group) => {
  group.each.teardown(async () => {
    await User.query().delete()
  })

  // test for the login page
  test('should render login page', async ({ client }) => {
    const response = await client.get('/login')

    response.assertStatus(200)
    response.assertTextIncludes('Login')
  })

  // test for the login action
  test('should login user and redirect to dashboard', async ({ client, assert }) => {
    const user = await User.create({
      email: 'admin@example.com',
      password: 'password123',
      role: UserRole.Admin,
    })

    const response = await client.post('/login').form({
      email: 'admin@example.com',
      password: 'password123',
    })

    response.assertStatus(302)
    response.assertHeader('location', '/admin/dashboard')

    const loggedInUser = await User.query().where('email', user.email).first()
    if (loggedInUser) {
      assert.equal(loggedInUser.id, user.id)
    } else {
      assert.fail('loggedInUser is null')
    }
  })

  // test for invalid credentials
  test('should fail login with invalid credentials', async ({ client, assert }) => {
    const response = await client.post('/login').form({
      email: 'invalid@example.com',
      password: 'wrongpassword',
    })

    response.assertStatus(400)
    assert.deepEqual(response.body(), {
      errors: [{ message: 'Invalid credentials' }],
    })
  })

  // test for missing values
  test('should fail login with missing values', async ({ client, assert }) => {
    const response = await client.post('/login').form({
      email: '',
      password: '',
    })

    response.assertStatus(400)
    assert.exists(response.body().errors)
  })
})
