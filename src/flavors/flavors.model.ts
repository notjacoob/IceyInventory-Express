import { Category } from "../categories/categories.model";

export interface Flavor {
    id: number,
    name: string,
    costPerBatch: number,
    making: boolean,
    inUse: boolean,
    category_id: number|Category
}

export const adaptIfUndefined = (fullFlavor: Flavor, newFlavor: Flavor): Flavor => {
    if (newFlavor.name) fullFlavor.name = newFlavor.name
    if (newFlavor.costPerBatch) fullFlavor.costPerBatch = newFlavor.costPerBatch
    if (newFlavor.inUse) fullFlavor.inUse = newFlavor.inUse
    if (newFlavor.making) fullFlavor.making = newFlavor.making
    if (newFlavor.category_id) fullFlavor.category_id = newFlavor.category_id
    return fullFlavor
}