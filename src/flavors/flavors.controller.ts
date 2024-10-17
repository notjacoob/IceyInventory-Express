// readFlavors, readFlavorsId, readFlavorsName
// searchFlavorsName, postFlavors, putFlavors
// deleteFlavors

import {Request, Response, RequestHandler} from 'express'

import { Flavor } from './flavors.model'
import { OkPacket } from 'mysql'
import * as CategoriesDao from '../categories/categories.dao'
import * as FlavorsDao from './flavors.dao'

export const readFlavors: RequestHandler = async(req: Request, res: Response)=>{

    try {
        let flavors = await FlavorsDao.readFlavors();
        for (let f of flavors) {
            f.category_id = (await CategoriesDao.getCategoryId(f.category_id as number)).find(c => c)!!
        }
        res.status(200).json(flavors)
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const readFlavorsId: RequestHandler = async(req: Request, res: Response)=>{

    try {
        let flavors;
        let flavorId = parseInt(req.query.id as string)
        if (Number.isNaN(flavorId)) {
            throw Error()
        } else {
            flavors = await FlavorsDao.readFlavorsId(flavorId)
        }
        res.status(200).json(flavors)
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const readFlavorsName: RequestHandler = async(req: Request, res: Response)=>{

    try {
        let flavors
        let name = req.query.name as string
        if (name != '') {
            flavors = await FlavorsDao.readFlavorsName(name)
        } else {
            throw new Error()
        }
        res.status(200).json(flavors)
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const searchFlavorsName: RequestHandler = async(req: Request, res: Response)=>{

    try {
        let flavors
        let searchTerm = req.query.search as string
        if (searchTerm != '') {
            flavors = await FlavorsDao.searchFlavorsName(searchTerm)
        } else {
            throw new Error()
        }
        res.status(200).json(flavors)
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const postFlavors: RequestHandler = async(req: Request, res: Response)=>{

    try {
        let name = req.body.name as string
        let costPerBatch = parseFloat(req.body.costPerBatch)
        let category = parseInt(req.body.category_id)
        if (name != '' && !isNaN(costPerBatch) && !isNaN(category)) {
            const okPacket = await FlavorsDao.postFlavors(name, costPerBatch, category);
            res.status(200).json(okPacket)
        } else {
            console.log(`Error: ${name}, ${costPerBatch}, ${category}`)
            res.status(500).json({
                message: "There was an error parsing the body"
            })
        }
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const putFlavors: RequestHandler = async(req: Request, res: Response)=>{

    try {
        const okPacket = await FlavorsDao.putFlavors(req.body)
        res.status(200).json(okPacket)
    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
export const deleteFlavors: RequestHandler = async(req: Request, res: Response)=>{

    try {
        const id = parseInt(req.query.id as string)
        if (!isNaN(id)) {
            const resp = await FlavorsDao.deleteFlavors(id)
            res.status(200).json(resp)
        } else {
            throw new Error()
        }

    } catch (err) {
        console.error("[flavors] could not read *")
        res.status(500).json({
            message: "There was an error fetching that data!"
        })
    }

}
