import { Category } from "../categories/categories.model";

export interface Flavor {
    id: number,
    name: string,
    costPerBatch: number,
    making: boolean,
    inUse: boolean,
    category_id: number|Category
}