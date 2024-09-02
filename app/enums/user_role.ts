export const UserRole = {
  Admin: 0,
  User: 1,
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]
