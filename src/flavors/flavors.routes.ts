import { Router } from 'express'
import * as FlavorsController from './flavors.controller'
const router = Router()
router.route('/v1/flavors')
    .get(
        FlavorsController.readFlavors
    ).post(
        FlavorsController.postFlavors
    )
router.route('/v1/flavors/:flavorId')
    .put(
        FlavorsController.putFlavors
    ).delete(
        FlavorsController.deleteFlavors
    )
router.route('/v1/flavors/id/:id').get(FlavorsController.readFlavorsId)
router.route('/v1/flavors/name/:name').get(FlavorsController.readFlavorsName)
router.route('/v1/flavors/search/:search').get(FlavorsController.searchFlavorsName)
export default router