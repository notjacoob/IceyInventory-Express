// postBatches
import { OkPacket } from "mysql"
import { execute } from "../services/mysql.connector"
import { Category } from "./categories.model"
import { categoryQueries } from "./categories.queries"

export const getCategoryId = async(id: number) => {
    return execute<Category[]>(categoryQueries.getCategoryId, [id])
}