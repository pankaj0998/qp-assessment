export const CONSTANTS = {
    ENV: {
        NODE: 'ENV',
        DEVELOPMENT: 'development',
        PRODUCTION: 'production',
    },
    CONFIG: {
        APP: 'app',
        HOST: 'app.host',
        PORT: 'app.port',
    },
    ROUTES: {
        BASE: '',
        API: 'api',
        GET: 'GET',
        GROCERY: {
            CONTROLLER: 'grocery',
            TAG: 'Grocery Items',
            VERSION: '1',
            OPERATIONS: {
                ADD: {
                    PATH: 'add'
                },
                GET: {
                    PATH: 'get'
                },
                UPDATE: {
                    PATH: 'update'
                },
                DELETE: {
                    PATH: 'delete'
                }
            },
            COLLECTIONS: {
                GROCERY: 'grocery_items'
            }
        },
        USER: {
            CONTROLLER: 'user',
            TAG: 'User Management',
            VERSION: '1',
            OPERATIONS: {
                ADD: {
                    PATH: 'add'
                },
                FETCH: {
                    PATH: 'fetch'
                },
                UPDATE: {
                    PATH: 'update'
                },
                DELETE: {
                    PATH: 'delete'
                }
            },
            COLLECTIONS: {
                USER: 'user'
            }
        },
        ORDER: {
            CONTROLLER: 'order',
            TAG: 'Order Management',
            VERSION: '1',
            OPERATIONS: {
                BOOK: {
                    PATH: 'book'
                },
                FETCH: {
                    PATH: 'order-details'
                },
                AVAILABLE_ITEM: {
                    PATH: 'list'
                }
            },
            COLLECTIONS: {
                USER: 'user'
            }
        }
    },
    LOG: {
        LABEL: 'qp-assessment',
        ERROR_LOG_FIELD: 'log'
    },
    SWAGGER: {
        DOCS: 'docs',
        TITLE: 'Grocery Booking Api',
        HEADER: '',
        DESCRIPTION: 'The microservice which can ve used for grocery booking',
        VERSION: 'v1',
        TAG: 'tag'
    }
}