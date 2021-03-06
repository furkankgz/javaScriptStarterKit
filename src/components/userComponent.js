import { BaseLogger , MongoLogger} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

// userService.add();
// userService.getById(1);


//let user1 = new User(1, "Furkan", "Korkmazgöz", "İstanbul");
//let user2 = new User(2, "Enes", "Korkmazgöz", "İstanbul");
//userService.add(user1);
//userService.add(user2);


console.log("--------------------------")
userService.Load();

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", "aaaa")
customerToAdd.type = "customer"
userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())