import { HttpStatus } from "@nestjs/common";

export const errors = {
    business: {
        grocery: {
            notFound: {
                httpCode: HttpStatus.NOT_FOUND,
                errorCode: 'GroceryNotFound',
                description: 'Grocery Details Not Found'
            }
        },
        user: {
            alreadyExist: {
                httpCode: HttpStatus.CONFLICT,
                errorCode: 'UserAlreadyExist',
                description: 'User with this email id already exist'
            },
            notFound: {
                httpCode: HttpStatus.NOT_FOUND,
                errorCode: 'UserNotFound',
                description: 'User Details Not Found'
            }
        },
        order: {
            insufficientQuantity: {
                httpCode: HttpStatus.BAD_REQUEST,
                errorCode: 'InsufficientQuantity',
                description: (name: string) => `Insufficient quantity for item: ${name}`
            },
            notFound: {
                httpCode: HttpStatus.NOT_FOUND,
                errorCode: 'OrderNotFound',
                description: 'Order Details Not Found'
            }
        },
    },
    technical: {
        database: {
            error: {
                httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
                errorCode: 'DatabaseError',
                description: 'Error occurred with Database',
            },
        }
    },
}