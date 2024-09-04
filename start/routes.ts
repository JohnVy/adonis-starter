/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// Global routes
router.on('/').renderInertia('home', { version: 6 })
router.on('/about').renderInertia('about')
router.on('/shop').renderInertia('shop')
router.on('/terms').renderInertia('terms')
router.on('/privacy').renderInertia('privacy')

// Auth routes
const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
router
  .group(() => {
    // View
    router.get('/login', [LoginController, 'render']).as('login')
    router.get('/logout', [LogoutController, 'logout']).as('logout')
    // router.get('/google/redirect', ({ ally }) => ally.use('google').redirect())

    // Action
    router.post('/login', [LoginController, 'login'])
    router.post('/register', [RegisterController, 'register'])
  })
  .use(middleware.guest())

// Client routes
const ProfileController = () => import('#controllers/client/profile_controller')
router
  .group(() => {
    // View
    router.get('/profile', [ProfileController, 'render']).as('client.profile')

    // Action
    router.post('/profile', [ProfileController, 'update'])
  })
  .use(middleware.auth())
