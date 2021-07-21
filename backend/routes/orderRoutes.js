import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js'
import { protect, isAdmin } from '../middlewares/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, isAdmin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/deliver').put(protect, isAdmin, updateOrderToDelivered)
// make sure this route at the end, otherwise it will search for id in the url
router.route('/:id').get(protect, getOrderById)

export default router
