import {Produce} from "./produce";
import {ProduceManager} from "./produceManager";

let produce1 = new Produce("tivi",10000)
let produce2 = new Produce("may giac",50000)

let produceManager = new ProduceManager()

produceManager.add(produce1)
produceManager.add(produce2)

console.log(produceManager.showList());