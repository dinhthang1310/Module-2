export class Employee{
    private _fistName : string;
    private _lastName : string;
    private _birthdate : string;
    private _address : string;
    private _position : string;


    constructor(fistName: string, lastName: string, birthdate:string, address: string, position: string) {
        this._fistName = fistName;
        this._lastName = lastName;
        this._birthdate = birthdate;
        this._address = address;
        this._position = position;
    }

    getFistName(): string {
        return this._fistName;
    }

    setFistName(value: string) {
        this._fistName = value;
    }

    getLastName(): string {
        return this._lastName;
    }

    setLastName(value: string) {
        this._lastName = value;
    }

    getBirthdate(): string {
        return this._birthdate;
    }

    setBirthdate(value:string) {
        this._birthdate = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getPosition(): string {
        return this._position;
    }

    setPosition(value: string) {
        this._position = value;
    }
}