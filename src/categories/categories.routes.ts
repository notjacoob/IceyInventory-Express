import { Router } from 'express'
import * as CategoriesController from './categories.controller'
const router = Router()

router.route('/v1/categories')
    .get(CategoriesController.getCategories)
    .put(CategoriesController.putCategories)
    .delete(CategoriesController.deleteCategory)
    .post(CategoriesController.postCategory)
router.route('/v1/categories/id/:id')
    .get(CategoriesController.getCategoriesId)

export default router