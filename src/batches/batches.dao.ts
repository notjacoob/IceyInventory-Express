// getBatches
// getBatchesId
// getBatchesDate
// postBatches
import { OkPacket } from "mysql"
import { execute } from "../services/mysql.connector"
import { Batches, Type } from "./batches.model"
import { batchQueries } from "./batches.queries"

export const getBatches = async() => {
    return execute<Batches[]>(batchQueries.getBatches, [])
}
export const getBatchesDate = async(date: Date) => {
    return execute<Batches[]>(batchQueries.getBatchesDate, [date])
}
export const getBatchesId = async(id: number) => {
    return execute<Batches[]>(batchQueries.getBatchesId, [id])
}
export const postBatches = async(dateMade: Date, type: Type, flavor: number) => {
    return execute<OkPacket>(batchQueries.postBatches, [dateMade, type, flavor])
}