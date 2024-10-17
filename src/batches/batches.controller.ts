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
        let id = parseInt(req.query.id as string)
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
        let date:number|Date = Date.parse(req.query.date as string)

        if (!isNaN(date)) {
            date = new Date(date)
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
        let type: Type = Type[req.body.type as keyof typeof Type]
        if (!isNaN(dateMade) && type) {
            dateMade = new Date(dateMade)
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