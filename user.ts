enum int{
    public,
    admin,
    user
}
class User{
    protected name: string;
    protected email: string;
    protected role: int;
    constructor(name: string, email: string, role: int){
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return console.log(`Name ${this.name} | Email: ${this.email} | Quyen: ${this.isAdmin()}`)
    }
    isAdmin(){
        if(this.role === 1){
            return `admin`
        }else if(this.role === 2){
            return `Là người dùng bình thường`
        }else{
            throw new Error("Khong co quyen truy cap ngoai admin hoac user")
        }
    }
    set Name(name: string){
        this.name = name;
    }
    set Email(email: string){
        this.email = email;
    }
    set Role(role: int){
        this.role = role;
    }
}

let user1 = new User("Dong1", "Dong1@gmail.com", 1);
user1.getInfo();
let user2 = new User("Dong2", "Dong2@gmail.com", 2);
user2.getInfo();
let user3 = new User("Dong3", "Dong3@gmail.com", 2);
user3.getInfo();

user1.Name = ("Nghiem Van Dong");
user1.Email = ("dong.nghiemvan@yahoo.com");
user1.Role = (1);
user1.getInfo();

user2.Name = ("Van Thi Thanh Thuy");
user2.Email = ("thuy1.tiramisu99@gmail.com");
user2.Role = (2);
user2.getInfo();

user3.Name = ("Nghiem Van Ninh");
user3.Email = ("ninh.nghiemvan@gmail.com");
user3.Role = (2);
user3.getInfo();