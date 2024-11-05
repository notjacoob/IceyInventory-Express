import {Request, Response, RequestHandler} from 'express'
import { Category } from './categories.model'
import * as CategoriesDao from './categories.dao'


export const getCategories: RequestHandler = async (req: Request, res: Response) => {
    try {

        let categories = await CategoriesDao.getCategories()
        res.status(200).json(categories)

    } catch (err) {
        console.error("[categories] could not read *")
        res.status(500).json({
        message: "There was an error fetching that data!"
        })
    }
}
export const putCategories: RequestHandler = async (req: Request, res: Response) => {
    try {

        let id = req.body.id
        let name = req.body.name

        let resp = await CategoriesDao.putCategories(id, name)

        res.status(200).json(resp)

    } catch (err) {
        console.error("[categories] could not read *")
        res.status(500).json({
        message: "There was an error fetching that data!"
        })
    }
}
export const deleteCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = req.body.id

        let resp = await CategoriesDao.deleteCategory(id)

        res.status(200).json(resp)

    } catch (err) {
        console.error("[categories] could not read *")
        res.status(500).json({
        message: "There was an error fetching that data!"
        })
    }
}
export const postCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        let name = req.body.name

        let resp = await CategoriesDao.postCategory(name)

        res.status(200).json(resp)
    } catch (err) {
        console.error("[categories] could not read *")
        res.status(500).json({
        message: "There was an error fetching that data!"
        })
    }
}
export const getCategoriesId: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = parseInt(req.params.id)
        let cat
        if (!isNaN(id)) {
            cat = await CategoriesDao.getCategoryId(id)
            if (!cat) {
                throw new Error()
            }
        } else {
            throw new Error()
        }
        res.status(200).json(cat[0])
    } catch (err) {
        console.error("[categories] could not read *")
        res.status(500).json({
        message: "There was an error fetching that data!"
        })
    }
}