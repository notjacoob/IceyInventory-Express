// getBatches
// getBatchesId
// getBatchesDate
// postBatches

import {Request, Response, RequestHandler} from 'express'
import * as BatchesDao from './batches.dao'
import { Type } from './batches.model'

export const getBatches: RequestHandler = async(req: Request, res: Response) => {

    try {

            let batches = await BatchesDao.getBatches()
            res.status(200).json(batches)

    } catch (err) {
        console.error("[batches] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const getBatchesId: RequestHandler = async(req: Request, res: Response) => {

    try {

        let batches
        let id = parseInt(req.params.id as string)
        if (!isNaN(id)) {
            batches = await BatchesDao.getBatchesId(id)
        } else {
            throw new Error()
        }
        res.status(200).json(batches)
    } catch (err) {
        console.error("[batches] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const getBatchesDate: RequestHandler = async(req: Request, res: Response) => {

    try {

        let batches
        let date:Date = new Date(req.params.date as string)

        if (date) {
            batches = await BatchesDao.getBatchesDate(date)
        } else {
            throw new Error()
        }
        res.status(200).json(batches)
    } catch (err) {
        console.error("[batches] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const postBatches: RequestHandler = async(req: Request, res: Response) => {

    try {
        let batches
        let flavor = req.body.flavorId
        let dateMade:Date|number = Date.parse(req.body.dateMade)
        let type: string = req.body.type
        if (!isNaN(dateMade) && Object.values(Type).includes(type)) {
            dateMade = new Date(dateMade)
            dateMade.setDate(dateMade.getDate()+1)
            batches = await BatchesDao.postBatches(dateMade, type, flavor)
        } else {
            throw new Error()
        }
        res.status(200).json(batches)
    } catch (err) {
        console.error("[batches] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}