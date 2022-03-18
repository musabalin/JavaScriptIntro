import { users } from "../data/data.js";
import DataError from "../model/dataError.js";
export default class UserService{
    constructor(){
        this.customers = []
        this.employees = []
        this.errors = []
    }

    onInit(){
        users.forEach(user =>{
            if(this.name(user) && this.age(user) && this.city(user) && this.lastName(user)){
                console.log(user)
            this.add(user)
            }
            

        });
    }

    add(user){

        switch (user.type) {
            case "customer":
                if(this.creditCardNumber(user)){
                    this.customers.push(user)
                }
                break;
            case "employee":
               if(this.salary(user)){
                   this.employees.push(user)
               }
                break;
            default:
                this.errors.push(new DataError("Wrong user type", user))
                break;
        }


    }

    name(user){
        if(user.firstName == "" || user.firstName == undefined){
            this.errors.push("Firstname is required",user)
            return false;
        }else{
            return true;
        }
    }

    lastName(user){
        if(user.lastName == "" || user.lastName == undefined){
            this.errors.push("Lastname is required",user)
            return false;

        }else{
            return true
        }

    }

    city(user){
        if(user.city == "" || user.city == undefined){
            this.errors.push("City is required",user)
            return false;
        

        }
        else{
            return true
        }

    }
    age(user){
        if (user.age == "" || user.age == undefined){
            this.errors.push("Age is required",user)
            return false
        }
        else{
            return true
        }
    }

    creditCardNumber(user){
        if(user.type == "customer"){
            if(user.creditCardNumber=="" || user.creditCardNumber == undefined){
                this.errors.push(new DataError("Kredi Kartı alanı boş bırakılamaz.", user))
                return false;

            }
            return true
        }
    }

    salary(user){
        if(user.type == "employee"){
            if(user.salary == "" || user.salary == undefined){
                this.errors.push(new DataError("Maaş alanı boş bırakılamaz. ", user))
                return false
            }
            return true
        }
    }

    


}