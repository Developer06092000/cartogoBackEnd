const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/models");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

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
    apis: ["./app/routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api", swaggerUI.serve, swaggerUI.setup(specs));

require("./app/routes/Brands.js")(app);
require("./app/routes/Categories.js")(app);
require("./app/routes/Cars.js")(app);
require("./app/routes/Orders.js")(app);

app.listen(8080, () => {
    console.log(`Server is running on port http://localhost:8080`);
});
