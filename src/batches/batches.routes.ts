import { Router } from 'express'
import * as BatchesController from './batches.controller'
const router = Router()
router.route('/v1/batches')
    .get(
        BatchesController.getBatches
    ).post(
        BatchesController.postBatches
    )
router.route('/v1/batches/id/:id').get(BatchesController.getBatchesId)
// date param should be a ms string
router.route('/v1/batches/date/:date').get(BatchesController.getBatchesDate)
export default router