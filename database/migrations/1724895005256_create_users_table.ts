import { BaseSchema } from '@adonisjs/lucid/schema'
import { UserRole } from '#enums/user_role'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.string('email', 254).notNullable().unique().checkRegex('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
      table.string('password').notNullable()
      table.smallint('role').notNullable().defaultTo(UserRole.User)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
