import Customer from "./model/customer.js";
import Employee from "./model/employee.js";
import User from "./model/user.js";
import DataError from "./model/dataError.js";
import UserService from "./services/userService.js";

let userService = new UserService();
// userService.add(user1)
// userService.add(employee1)
// userService.add(customer1)
userService.onInit()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)