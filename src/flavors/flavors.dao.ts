import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Flavor } from "./flavors.model";
import { flavorQueries } from "./flavors.queries";

// readFlavors, readFlavorsId, readFlavorsName
// searchFlavorsName, postFlavors, putFlavors
// deleteFlavors

export const readFlavors = async () => {
    return execute<Flavor[]>(flavorQueries.readFlavors, [])
}
export const readFlavorsId = async (id: number) => {
    return execute<Flavor[]>(flavorQueries.readFlavorsId, [id])
}
export const readFlavorsName = async (name: string) => {
    return execute<Flavor[]>(flavorQueries.readFlavorsName, [name])
}
export const searchFlavorsName = async (searchTerm: string) => {
    return execute<Flavor[]>(flavorQueries.searchFlavorsName, [searchTerm])
}
export const postFlavors = async (name: string, costPerBatch: number, category: number) => {
    return execute<OkPacket>(flavorQueries.postFlavors, [name, costPerBatch, category])
}
export const putFlavors = async (newFlavor: Flavor) => {
    return execute<OkPacket>(flavorQueries.putFlavors, [newFlavor.name, newFlavor.costPerBatch, newFlavor.making, newFlavor.inUse, newFlavor.category_id, newFlavor.id])
}
export const deleteFlavors = async (id: number) => {
    return execute<OkPacket>(flavorQueries.deleteFlavors, [id])
}