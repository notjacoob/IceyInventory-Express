import { Flavor } from "../flavors/flavors.model";

export enum Type {
    Full,
    Half
}
export interface Batches {
    id: number,
    dateMade: Date,
    type: Type,
    flavor: Flavor
}