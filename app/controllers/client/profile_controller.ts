import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import path from 'node:path'

export default class ProfileController {
  static profileValidator = vine.compile(
    vine.object({
      userName: vine
        .string()
        .trim()
        .minLength(4)
        .maxLength(20)
        .unique(async (db, value) => {
          const user = await db.from('users').where('username', value).first()
          return !user
        }),
      firstName: vine.string().trim().minLength(3).maxLength(255).optional(),
      lastName: vine.string().trim().minLength(3).maxLength(255).optional(),
      avatar: vine.file().optional(),
      phoneNumber: vine.string().minLength(10).maxLength(15).optional(),
    })
  )

  render({ auth, inertia }: HttpContext) {
    const user = auth.use('web').user!
    return inertia.render('profile/index', { user })
  }

  async update({ auth, request, response }: HttpContext) {
    const user = auth.use('web').user!
    const { userName, firstName, lastName, avatar, phoneNumber } = await request.validateUsing(
      ProfileController.profileValidator
    )

    // Mise à jour des champs du profil
    if (userName) user.profile!.userName = userName
    if (firstName) user.profile!.firstName = firstName
    if (lastName) user.profile!.lastName = lastName
    if (phoneNumber) user.profile!.phoneNumber = phoneNumber

    // Gestion de l'avatar (si fourni)
    if (avatar) {
      const allowedMimeTypes = ['jpeg', 'png', 'jpg']
      const fileExtension = path.extname(avatar.clientName).toLowerCase().replace('.', '')

      if (!allowedMimeTypes.includes(fileExtension)) {
        return response.status(400).json({ message: 'Invalid file format' })
      }

      const avatarFileName = `${user.id}-${lastName}.${fileExtension}`
      const avatarPath = `uploads/avatars`

      // Déplacement de l'avatar vers le répertoire utilisateur
      await avatar.move(avatarPath, {
        name: avatarFileName,
        overwrite: true,
      })

      // Vérification des erreurs lors du déplacement
      if (!avatar.isValid) {
        return response.status(400).json(avatar.errors)
      }

      // Mise à jour du chemin de l'avatar dans le profil utilisateur
      user.profile!.avatar = `${avatarPath}/${avatarFileName}`
    }

    await user.profile!.save() // Sauvegarde du profil utilisateur

    return response.redirect().toRoute('profile.show')
  }
}
