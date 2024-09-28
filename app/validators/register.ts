import vine from '@vinejs/vine'

export default class RegisterValidator {
  static registerValidator = vine.compile(
    vine.object({
      email: vine
        .string()
        .trim()
        .email()
        .unique(async (db, value) => {
          const user = await db.from('users').where('email', value).first()
          return !user
        }),
      password: vine.string().minLength(8),
    })
  )

  static registerValidatorMessages = {
    'email.required': 'Email is required',
    'email.email': 'Email is invalid',
    'email.unique': 'Email is already taken',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters',
  }
}
