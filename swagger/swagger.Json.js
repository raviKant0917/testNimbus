import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Nimbus Backend",
            version: "1.0.0",
            description: "Nimbus backend api",
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'JSONPlaceholder',
                url: 'https://jsonplaceholder.typicode.com',
            },
        },
        servers: [
            {
                 url: 'http://localhost:8050',
                 description: 'Development server',
            },
        ],
    },
    apis: ["./swagger/*.js"]
}
export const specs = swaggerJSDoc(options)
