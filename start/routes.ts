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
router.on('/').renderInertia('home')
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
    router.get('/register', [RegisterController, 'render']).as('register')
    router.get('/logout', [LogoutController, 'logout']).as('logout')
    // router.get('/google/redirect', ({ ally }) => ally.use('google').redirect())

    // Action
    router.post('/login', [LoginController, 'login'])
    router.post('/register', [RegisterController, 'register'])
  })
  .use(middleware.guest())

// Client routes
const ClientDashboardController = () => import('#controllers/client/dashboard_controller')
const ClientProfileController = () => import('#controllers/client/profile_controller')
const ClientOrdersController = () => import('#controllers/client/orders_controller')
router
  .group(() => {
    // View
    router.get('/dashboard', [ClientDashboardController, 'render']).as('client.dashboard')
    router.get('/orders', [ClientOrdersController, 'render']).as('client.orders')
    router.get('/profile', [ClientProfileController, 'render']).as('client.profile')

    // Action
    router.post('/profile', [ClientProfileController, 'update'])
  })
  .use(middleware.auth())

// Admin routes
const AdminDashboardController = () => import('#controllers/admin/dashboard_controller')
const AdminCustomersController = () => import('#controllers/admin/customers_controller')
const AdminOrdersController = () => import('#controllers/admin/orders_controller')
const AdminProductsController = () => import('#controllers/admin/products_controller')
const AdminsSettingsController = () => import('#controllers/admin/settings_controller')
router
  .group(() => {
    // View
    router.get('/admin/dashboard', [AdminDashboardController, 'render']).as('admin.dashboard')
    router.get('/admin/customers', [AdminCustomersController, 'render']).as('admin.customers')
    router.get('/admin/orders', [AdminOrdersController, 'render']).as('admin.orders')
    router.get('/admin/products', [AdminProductsController, 'render']).as('admin.products')
    router.get('/admin/settings', [AdminsSettingsController, 'render']).as('admin.settings')
  })
  .use(middleware.auth())
