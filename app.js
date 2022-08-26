const express = require("express");
const app = express();
const db = require("./models");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

app.use(express.urlencoded({ extended: true }));

db.sequelize
    .sync()
    .then(() => {
        console.log("Synced db.");
    })

    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Carto-go backend",
            version: "1.0.0",
            description: "Carto-go backend API",
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./router/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api", swaggerUI.serve, swaggerUI.setup(specs));

require("./router/Brands.js")(app);
require("./router/Categories.js")(app);
require("./router/Cars.js")(app);
require("./router/Orders.js")(app);

app.listen(8080, () => {
    console.log(`Server is running on port http://localhost:8080.`);
});
