enum ROLE {
    admin = 1,
    user
}
export class User {
    protected name : string;
    protected email : string;
    public user : ROLE


    constructor(name: string, email: string, user: ROLE) {
        this.name = name;
        this.email = email;
        this.user = user;
    }

    get Name(): string {
        return this.name;
    }

    get Email(): string {
        return this.email;
    }

    get User(): ROLE {
        return this.user;
    }
    getInfo() {
        console.log(`name : ${this.name} email: ${this.email} user: ${this.user}`)
    }
    isAdmin() {
        if (this.user == 1) {
            console.log("admin");
        }else if (this.user == 2) {
            console.log("nguoi ddung binh thuong")
        }else {
            console.log("error")
        }
    }
}
let user = new User("thang","thang@gmail.com",ROLE.user)
user.getInfo();
user.isAdmin();