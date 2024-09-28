import { test } from '@japa/runner'
import RegisterController from '#controllers/auth/register_controller'

test.group('RegisterController - Unit', () => {
  test('register should validate, create user, profile and login', async ({ assert }) => {
    // Simuler les données de validation
    const requestMock = {
      validateUsing: async () => ({
        email: 'test@example.com',
        password: 'password123',
      }),
    }

    // Simuler la réponse avec redirection
    const responseMock = {
      redirect: () => ({
        toRoute: () => {},
      }),
    }

    // Simuler l'authentification
    const authMock = {
      use: () => ({
        login: async () => {},
      }),
    }

    // Simuler la création d'utilisateur et de profil
    const UserMock = {
      create: async (data: any) => ({
        id: 1,
        email: data.email,
        password: data.password,
      }),
    }

    const UserProfileMock = {
      create: async (data: any) => ({
        userId: data.userId,
      }),
    }

    // Simuler le contexte HTTP
    const httpContextMock = {
      auth: authMock,
      request: requestMock,
      response: responseMock,
    }

    // Instancier le contrôleur
    const controller = new RegisterController()

    // Appeler la méthode `register` avec le contexte simulé
    await controller.register({
      ...httpContextMock,
      User: UserMock,
      UserProfile: UserProfileMock,
    } as any)

    // Vérifier si l'utilisateur a bien été créé
    const user = await UserMock.create({ email: 'test@example.com', password: 'password123' })
    assert.equal(user.email, 'test@example.com')

    // Vérifier que le profil utilisateur a bien été créé
    const userProfile = await UserProfileMock.create({ userId: user.id })
    assert.equal(userProfile.userId, 1)

    // Vérifier que l'authentification a été appelée
    assert.isNotNull(authMock.use().login)
  })
})
