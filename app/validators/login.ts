import vine from '@vinejs/vine'

export default class LoginValidator {
  static loginValidator = vine.compile(
    vine.object({
      email: vine.string().trim().email(),
      password: vine.string().trim().minLength(8).maxLength(20),
    })
  )

  static loginValidatorMessages = {
    'email.required': 'Email is required',
    'email.email': 'Email is invalid',
    'email.unique': 'Email is already taken',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters',
  }
}
