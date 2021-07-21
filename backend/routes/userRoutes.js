import express from 'express'
const router = express.Router()
import {
  userAuth,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { isAdmin, protect } from '../middlewares/authMiddleware.js'

router.route('/').post(registerUser).get(protect, isAdmin, getUsers)
router.route('/login').post(userAuth)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser)

export default router
