import { ApiBodyOptions } from "@nestjs/swagger";
import { AddGrocery } from "../../grocery/dto/add-grocery.dto";

export const addGrocery: ApiBodyOptions = {
    description: "Request Body to add grocery to the inventory",
    examples: {
        a: {
            summary: "Single Grocery",
            description: "Adding one grocery items",
            value: {
                name: "Tomato",
                price: 20,
                quantity: 100
            } as AddGrocery
        },
        b: {
            summary: "Add Multiple Groceries",
            description: "Adding more than one grocery items",
            value: [
                {
                    name: "Potato",
                    price: 20,
                    quantity: 100
                },
                {
                    name: "Cabbage",
                    price: 15,
                    quantity: 100
                }] as AddGrocery[]
        }
    }
}

export const addUser: ApiBodyOptions = {
    description: "Request Body to add user",
    schema: {
        example: {
            userId: "John123",
            fullName: "John Doe",
            emailId: "john.doe@gmail.com",
            mobileNumber: "9828201822"
        }
    }
}

export const bookOrderbody: ApiBodyOptions = {
    description: "Request Body to book order",
    schema: {
        example: {
            userId: "John123",
            items: [{
                name: "Tomato",
                quantity: 10
            }]
        }
    }

}

