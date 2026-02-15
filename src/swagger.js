const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Manually define the Swagger JSON specification (your existing definition)
const swaggerJson = {
    openapi: "3.0.0",
    info: {
        title: "LIC  API",
        version: "1.0.0",
        description: "LIC  APIs"
    },
    servers: [
        { url: "http://localhost:8001", description: "Local Server" },
        { url: "http://192.168.1.23:8001", description: "Local Server" }
    ],
    tags: [
        { name: "Auth", description: "APIs related to agent operations" },
        { name: "Users", description: "APIs related to user operations" },
        { name: "Slider Management", description: "APIs related to group operations" },
        { name: "Brand Management", description: "APIs related to group operations" },
        { name: "Blog Management", description: "APIs related to group operations" },
        { name: "Testimonial Management", description: "APIs related to group operations" }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    },
    paths: {
        "/api/agent/register": {
            post: {
                summary: "Register a new agent",
                description: "Create a new agent in the system",
                tags: ["Auth"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string", example: "John Doe" },
                                    email: { type: "string", example: "john@example.com" },
                                    bank: { type: "string", example: "Bank of World" },
                                    account: { type: "string", example: "1234567890" },
                                    ifsc: { type: "string", example: "IFSC0001234" },
                                    pancard: { type: "string", example: "ABCDE1234F" },
                                    uid: { type: "string", example: "A1B2C3D4E5" },
                                    password: { type: "string", example: "password123" },
                                    phone: { type: "string", example: "7900000000" }
                                },
                                required: ["name", "email"]
                            }
                        }
                    }
                },
                responses: {
                    "201": {
                        description: "Agent registered successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Agent already exists",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agent/referral": {
            post: {
                summary: "Referred a new member",
                description: "Create a new member in the system",
                tags: ["Auth"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string", example: "John Doe" },
                                    category: { type: "string", example: "Life term plan" },
                                    agent_id: { type: "string", example: "1" },                                    
                                    phone: { type: "string", example: "7900000000" }
                                },
                                required: ["name", "category", "agent_id", "phone"]
                            }
                        }
                    }
                },
                responses: {
                    "201": {
                        description: "Member registered successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                phone: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    
                }
            }
        },
        "/api/agent/referral/list": {
            "get": {
                "summary": "Get Referral List",
                "tags": ["Auth"],
               /* "security": [{ "bearerAuth": [] }],*/
                "parameters": [
                    {
                        "name": "agent_id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the agent to fetch referrals",
                        "schema": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    }
                ], 
                "responses": {
                    "200": {
                        "description": "Referral list get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "agent_id": { "type": "integer" }                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/agent/login": {
            post: {
                summary: "Login a agent",
                description: "Authenticate the agent and return a token",
                tags: ["Auth"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: { type: "string", example: "john@example.com" },
                                    // password: { type: "string", example: "password123" }
                                },
                                required: ["email", "password"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Login successful",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                token: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Invalid email or password",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 
        "/api/auth/resetPassword": {
            post: {
                summary: "resetPassword  a   user",
                description: "resetPassword   user in the system",
                tags: ["Auth"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                   
                                    email: { type: "string", example: "7900000000" }
                                },
                                required: ["email"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Link  send successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: { 
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some thing wen wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/auth/reset-password": {
            post: {
                summary: "Forget password data update  a   user",
                description: "resetPassword   user in the system",
                tags: ["Auth"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: { type: "string", example: "test@gmail.com" },
                                    token: { type: "string", example: "*************" },
                                    newPassword: { type: "string", example: "12345678" },
                                    confirmPassword : { type: "string", example: "12345678" },
                                },
                                required: ["email"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Link  send successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: { 
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some thing wen wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/auth/send_otp": {
            post: {
                summary: "OTP send a   user",
                description: "OTP send a   user in the system",
                tags: ["Auth"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                   
                                    phone: { type: "string", example: "7900000000" }
                                },
                                required: ["phone"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Otp send successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some thing wen wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/auth/otp_verify": {
            post: {
                summary: "OTP verify a user",
                description: "OTP verify a user in the system",
                tags: ["Auth"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    phone: { type: "string", example: "7900000000" },
                                    otp: { type: "string", example: "" }
                                },
                                required: ["phone"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Otp verify successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some thing wen wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/users/update-profile": {
            put: {
                summary: "Profile Update",
                description: "Authenticate the user and return a token",
                tags: ["Users"],
                 security: [
                    {
                        bearerAuth: [] // This path requires a valid JWT token
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string", example: "Test" },
                                    phone: { type: "string", example: "7900000000" },
                                    image: { type: "string",  "format": "binary" }
                                },
                                required: ["name", "phone"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Profile updated  successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                token: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some Thing went wrong!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Bad Request or something went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/users/change_password": {
            post: {
                summary: "Change Password a user",
                description: "Authenticate the user and return a token",
                tags: ["Users"],
                 security: [
                    {
                        bearerAuth: [] // This path requires a valid JWT token
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    old_password: { type: "string", example: "password123" },
                                    new_password: { type: "string", example: "password123" },
                                    confirm_password: { type: "string", example: "password123" }
                                },
                                required: ["old_password", "new_password","confirm_password"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Password Changed  successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                token: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Old Password Does not Match or required",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Bad Request or something went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agent/otp_verify": {
            post: {
                summary: "OTP verify a user",
                description: "OTP verify a user in the system",
                tags: ["Auth"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    phone: { type: "string", example: "7900000000" },
                                    otp: { type: "string", example: "" }
                                },
                                required: ["phone"]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Otp verify successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Some thing wen wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },


        





        "/api/sliders/create": {
            "post": {
                "summary": "Create Slider with Options",
                "tags": ["Slider Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Slider Title!" },
                                    "description": { "type": "string", "example": "Slider Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["title",'image']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Slider created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/sliders/get": {
            "get": {
                "summary": "Get Slider ",
                "tags": ["Slider Management"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the sliders to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ], 
                "responses": {
                    "200": {
                        "description": "Slider get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/sliders/edit": {
            "put": {
                "summary": "Edit Slider with Options",
                "tags": ["Slider Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Slider Title!" },
                                    "description": { "type": "string", "example": "Slider Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","title"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Slider update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/sliders/delete": {
            "delete": {
                "summary": "Deleted Slider",
                "tags": ["Slider Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/brands/create": {
            "post": {
                "summary": "Create Brand with Options",
                "tags": ["Brand Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Brand Title!" },
                                    "description": { "type": "string", "example": "Brand Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["title",'image']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Brand created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/brands/get": {
            "get": {
                "summary": "Get Brands ",
                "tags": ["Brand Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the brand to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Brand get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/brands/edit": {
            "put": {
                "summary": "Edit Brand with Options",
                "tags": ["Brand Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Brand Title!" },
                                    "description": { "type": "string", "example": "Brand Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","title"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Brand update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/brands/delete": {
            "delete": {
                "summary": "Deleted Brand",
                "tags": ["Brand Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/testimonials/create": {
            "post": {
                "summary": "Create Testimonial with Options",
                "tags": ["Testimonial Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": { "type": "string", "example": "John" },
                                    "designation": { "type": "string", "example": "Marketing" },
                                    "title": { "type": "string", "example": "Testimonial Title!" },
                                    "description": { "type": "string", "example": "Testimonial Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["name","title",'image','description']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Testimonial created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/testimonials/get": {
            "get": {
                "summary": "Get Testimonials ",
                "tags": ["Testimonial Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Testimonial to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Testimonial get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/testimonials/edit": {
            "put": {
                "summary": "Edit Testimonial with Options",
                "tags": ["Testimonial Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "name": { "type": "string", "example": "John" },
                                    "designation": { "type": "string", "example": "Marketing" },
                                    "title": { "type": "string", "example": "Testimonial Title!" },
                                    "description": { "type": "string", "example": "Testimonial Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["name","title",'image','description']
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Testimonial update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/testimonials/delete": {
            "delete": {
                "summary": "Deleted Testimonial",
                "tags": ["Testimonial Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/faqs/create": {
            "post": {
                "summary": "Create Faqs with Options",
                "tags": ["Faqs Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Faqs Title!" },
                                    "description": { "type": "string", "example": "Faqs Description!", "description": "A multi-line text input, commonly used as a textarea." }
                                    
                                },
                                "required": ["title",'description']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Faqs created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/faqs/get": {
            "get": {
                "summary": "Get faqs ",
                "tags": ["Faqs Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Faqs to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Faqs get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/faqs/edit": {
            "put": {
                "summary": "Edit Faqs with Options",
                "tags": ["Faqs Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Faqs Title!" },
                                    "description": { "type": "string", "example": "Faqs Description!", "description": "A multi-line text input, commonly used as a textarea." }
                                },
                                "required": ["id","title",'description']
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Faqs update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/faqs/delete": {
            "delete": {
                "summary": "Deleted Faqs",
                "tags": ["Faqs Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/teams/create": {
            "post": {
                "summary": "Create teams with Options",
                "tags": ["Teams Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": { "type": "string", "example": "teams Title!" },
                                    "designation": { "type": "string", "example": "teams designation!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["name",'designation','image']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "teams created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "name": { "type": "string" },
                                                "designation": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/teams/get": {
            "get": {
                "summary": "Get teams ",
                "tags": ["Teams Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the teams to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "teams get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "name": { "type": "string" },
                                                "designation": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/teams/edit": {
            "put": {
                "summary": "Edit teams with Options",
                "tags": ["Teams Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "name": { "type": "string", "example": "teams Title!" },
                                    "designation": { "type": "string", "example": "teams designation!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","name",'designation','image']
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "teams update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/teams/delete": {
            "delete": {
                "summary": "Deleted teams",
                "tags": ["Teams Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },

        "/api/blogs/create": {
            "post": {
                "summary": "Create Blog with Options",
                "tags": ["Blog Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Blog Title!" },
                                    "description": { "type": "string", "example": "Blog Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" },
                                    "banner_image": { "type": "string", "format": "binary" },
                                },
                                "required": ["title",'image','description']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Blog created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/blogs/get": {
            "get": {
                "summary": "Get Blog ",
                "tags": ["Blog Management"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the sliders to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ], 
                "responses": {
                    "200": {
                        "description": "Slider get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/blogs/edit": {
            "put": {
                "summary": "Edit Blog with Options",
                "tags": ["Blog Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Blog Title!" },
                                    "description": { "type": "string", "example": "Blog Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" },
                                    "banner_image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","title","description"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Blog update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/blogs/delete": {
            "delete": {
                "summary": "Deleted Blog",
                "tags": ["Blog Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/categories/create": {
            "post": {
                "summary": "Create Category with Options",
                "tags": ["Category Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Category Title!" },
                                    "parent_id": { "type": "integer", "example": "0" },
                                    "description": { "type": "string", "example": "Category Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["title",'image']
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Brand created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/categories/get": {
            "get": {
                "summary": "Get Brands ",
                "tags": ["Category Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Category to fetch",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Category get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/categories/edit": {
            "put": {
                "summary": "Edit Category with Options",
                "tags": ["Category Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "parent_id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Category Title!" },
                                    "description": { "type": "string", "example": "Category Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","title"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Category update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/categories/delete": {
            "delete": {
                "summary": "Deleted Category",
                "tags": ["Category Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attributes/create": {
            "post": {
                "summary": "Create Attribute with Options",
                "tags": ["Attributes Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "attribute_name": { "type": "string", "example": "Name!" },
                                    // "description": { "type": "string", "example": "Brand Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    // "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["attribute_name"]
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Attribute created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "attribute_name": { "type": "string" },
                                                 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attributes/get": {
            "get": {
                "summary": "Get attributes ",
                "tags": ["Attributes Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the brand to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "attributes get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attributes/edit": {
            "put": {
                "summary": "Edit Attributes with Options",
                "tags": ["Attributes Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "attribute_name": { "type": "string", "example": "Name " },
                                },
                                "required": ["id","attribute_name"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "attribute update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attributes/delete": {
            "delete": {
                "summary": "Deleted Attribute",
                "tags": ["Attributes Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },

        "/api/attribute-values/create": {
            "post": {
                "summary": "Create Attribute Values with Options",
                "tags": ["Attribute-values Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "attribute_id": { "type": "integer", "example": "0" },
                                    "attribute_value": { "type": "string", "example": "Name!" },
                                    // "description": { "type": "string", "example": "Brand Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    // "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["attribute_id","attribute_value"]
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Attribute created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "attribute_name": { "type": "string" },
                                                 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attribute-values/get": {
            "get": {
                "summary": "Get attributes ",
                "tags": ["Attribute-values Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the attribute-values to fetch",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "attributes get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "attribute-value": { "type": "string" }, 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attribute-values/edit": {
            "put": {
                "summary": "Edit Attribute-values   with Options",
                "tags": ["Attribute-values Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "attribute_id": { "type": "string", "example": "0" },
                                    "attribute_value": { "type": "string", "example": "Red " },
                                },
                                "required": ["id","attribute_id",'attribute_value']
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "attribute value update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/attribute-values/delete": {
            "delete": {
                "summary": "Deleted Attribute",
                "tags": ["Attribute-values Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/collections/create": {
            "post": {
                "summary": "Create Collection  with Options",
                "tags": ["Collection  Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": { "type": "string", "example": "Collection  Title!" },
                                    "description": { "type": "string", "example": "Collection  Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["title",]
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Collection  created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/collections/get": {
            "get": {
                "summary": "Get Collection  ",
                "tags": ["Collection  Management"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the collections to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ], 
                "responses": {
                    "200": {
                        "description": "Collection  get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/collections/edit": {
            "put": {
                "summary": "Edit Collection  with Options",
                "tags": ["Collection  Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Collection  Title!" },
                                    "description": { "type": "string", "example": "Collection  Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "image": { "type": "string", "format": "binary" }
                                },
                                "required": ["id","title"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Collection  update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },
        "/api/collections/delete": {
            "delete": {
                "summary": "Deleted Slider",
                "tags": ["Collection  Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                }
            }
        },

        "/api/products/get": {
            "get": {
                "summary": "Get Products ",
                "tags": ["Products Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Product to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },{
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "attributes get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "attribute-value": { "type": "string" }, 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/settings/upsert": {
            "post": {
                "summary": "Get Settings ",
                "tags": ["Settings Management"],
                "security": [{ "bearerAuth": [] }], 
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "logo": { "type": "string", "format": "binary" },
                                    "favicon": { "type": "string", "format": "binary" },
                                    "email": { "type": "string", "example": "test@gmail.com" },
                                    "phone": { "type": "string", "example": "798000000" },
                                    // "description": { "type": "string", "example": "Brand Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    // "image": { "type": "string", "format": "binary" }
                                },
                                "required": []
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Created or updated get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "key": { "type": "string" },
                                                "value": { "type": "string" }, 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/settings/get": {
            "get": {
                "summary": "Get Settings ",
                "tags": ["Settings Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Product to fetch",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Settings get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "attribute-value": { "type": "string" }, 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/dietpackages/create": {
            "post": {
                "summary": "Create Dietpackages with Options",
                "tags": ["Dietpackages Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                     
                                    "title": { "type": "string", "example": "Dietpackages Title!" },
                                    "description": { "type": "string", "example": "Dietpackages Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "price": { "type": "float", "example": "300" },
                                    "duration_days": { "type": "integer", "example": "30" },
                                },
                                "required": ["title",'description',"price","duration_days"]
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Faqs created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/dietpackages/get": {
            "get": {
                "summary": "Get Dietpackages ",
                "tags": ["Dietpackages Management"],
                "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/dietpackages/edit": {
            "put": {
                "summary": "Edit Dietpackages with Options",
                "tags": ["Dietpackages Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                    "title": { "type": "string", "example": "Dietpackages Title!" },
                                    "description": { "type": "string", "example": "Dietpackages Description!", "description": "A multi-line text input, commonly used as a textarea." },
                                    "price": { "type": "float", "example": "300" },
                                    "duration_days": { "type": "integer", "example": "30" },
                                },
                                "required": ["id","title",'description',"price","duration_days"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Dietpackages update successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/dietpackages/delete": {
            "delete": {
                "summary": "Deleted Dietpackages",
                "tags": ["Dietpackages Management"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": { "type": "integer", "example": "0" },
                                },
                                required: ["id"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" } 
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },

         "/api/user_appointments/create": {
            post: {
                summary: "Create Appointment",
                description: "Create Appointment",
                tags: ["Appointment"],
                // security: [
                //     {
                //         bearerAuth: [] // This path requires a valid JWT token
                //     }
                // ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string", example: "John Doe" },
                                    email: { type: "string", example: "john@example.com" },
                                    phone: { type: "string", example: "7900000000" },
                                    mode_consultation: { type: "string", example: "Text" },
                                    purpose: { type: "string", example: "Text" },
                                    age: { type: "string", example: "Text" },
                                    gender: { type: "string", example: "Text" },
                                    appointment_date: { type: "string", example: "Text" },
                                    appointment_time: { type: "string", example: "Text" }, 
                                    comments: { type: "string", example: "comments" }, 
                                },
                                required: ["name", "email", "password"]
                            }
                        }
                    }
                },
                responses: {
                    "201": {
                        description: "User registered successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        status: {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                email: { type: "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "User already exists",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/web/faq_get": {
            "get": {
                "summary": "Get Faq ",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/web/certificate_get": {
            "get": {
                "summary": "Get Certificate",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/web/testimonial_get": {
            "get": {
                "summary": "Get Testimonails",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/web/slider_get": {
            "get": {
                "summary": "Get Slider",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Slider get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/web/blog_get": {
            "get": {
                "summary": "Get Blogs",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the Dietpackages to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "/api/web/static_get": {
            "get": {
                "summary": "Get Settings",
                "tags": ["Home Page Management"],
                // "security": [{ "bearerAuth": [] }], 
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": false,
                        "description": "ID of the settings to fetch",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "description": "Page number for pagination",
                        "schema": {
                            "type": "integer",
                            "default": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "description": "Number of items per page",
                        "schema": {
                            "type": "integer",
                            "default": 50
                        }
                    },
                    {
                        "name": "search",
                        "in": "query",
                        "required": false,
                        "description": "Search keyword for filtering",
                        "schema": {
                            "type": "string",
                            "default": ""
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dietpackages get successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": { "type": "boolean", "example": true },
                                        "message": { "type": "string" },
                                        "data": {
                                            "type": "object",
                                            "properties": {
                                                "id": { "type": "string" },
                                                "title": { "type": "string" },
                                                "description": { "type": "string" },
                                                "image": { "type": "string" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        description: "Some thing went wrong",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: { type: "string" },
                                        "status": {
                                            "type": "boolean",
                                            "example": false
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },





    }
};


// module.exports = swaggerJson;


// Export the Swagger JSON and Swagger UI middleware
module.exports = {
    swaggerUi,
    swaggerJson,
};
