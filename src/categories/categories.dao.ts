// postBatches
import { OkPacket } from "mysql"
import { execute } from "../services/mysql.connector"
import { Category } from "./categories.model"
import { categoryQueries } from "./categories.queries"

export const getCategoryId = async(id: number) => {
    return execute<Category[]>(categoryQueries.getCategoryId, [id])
}
export const getCategories = async() => {
    return execute<Category[]>(categoryQueries.getCategories, [])
}
export const putCategories = async(id: number, name: string) => {
    return execute<OkPacket>(categoryQueries.putCategories, [name, id])
}
export const deleteCategory = async(id: number) => {
    return execute<OkPacket>(categoryQueries.deleteCategory, [id])
}
export const postCategory = async(name: string) => {
    return execute<OkPacket>(categoryQueries.postCategory, [name])
}