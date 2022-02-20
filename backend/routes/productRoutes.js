import express from 'express'

const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductsByCategory,
  createProductReview,
} from '../controllers/productController.js'
import { isAdmin, protect } from '../middlewares/authMiddleware.js'

router.route('/').get(getProducts).post(protect, isAdmin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct)

// from here

router.route('/searchByCategory/:id').get(getProductsByCategory)

// to here

export default router
