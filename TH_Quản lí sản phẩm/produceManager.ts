import {Produce} from "./produce";

export class ProduceManager {
    private listProduce  = []

    constructor() {
    }
    add(produce) {
        this.listProduce.push(produce)
    }
    showList() {
        return this.listProduce
    }
}