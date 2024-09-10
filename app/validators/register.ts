import vine from '@vinejs/vine'

export default class RegisterValidator {
  static registerValidator = vine.compile(
    vine.object({
      username: vine
        .string()
        .trim()
        .minLength(4)
        .maxLength(20)
        .unique(async (db, value) => {
          const user = await db.from('users').where('username', value).first()
          return !user
        }),
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
    'username.required': 'Username is required',
    'username.minLength': 'Username must be at least 4 characters',
    'username.maxLength': 'Username must be at most 20 characters',
    'username.unique': 'Username is already taken',
    'email.required': 'Email is required',
    'email.email': 'Email is invalid',
    'email.unique': 'Email is already taken',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters',
  }
}
