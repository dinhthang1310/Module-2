export class Produce {
    private _name : string;
    private _price : number;


    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }
}