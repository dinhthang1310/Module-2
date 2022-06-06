class Instructor {
    name : string;
    role :  "assistant"


    constructor(name: string, role: "assistant") {
        this.name = name;
        this.role = role;
    }
    renderDetail() {
        console.log(`${this.name} - ${this.role}`);
    }
}
let junior = new Instructor('Brian','assistant');