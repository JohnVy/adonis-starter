import { test } from '@japa/runner'
import LoginController from '#controllers/auth/login_controller'

test.group('LoginController Unit Tests', () => {
  test('should validate login input', async ({ assert }) => {
    const validator = LoginController.loginValidator
    // Valide data
    const validData = { email: 'user@example.com', password: 'password123' }
    // Validate data and expect it to pass
    await validator.validate(validData)
    // Invalid data
    const invalidData = { email: 'invalid-email', password: 'short' }
    await assert.rejects(() => validator.validate(invalidData))
  })
})
