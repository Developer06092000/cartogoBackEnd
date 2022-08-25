const express = require("express");
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: true }));

db.sequelize
    .sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./router/Brands.js")(app);
require("./router/Categories.js")(app);
require("./router/Cars.js")(app);
require("./router/Orders.js")(app);

app.listen(8080, () => {
    console.log(`Server is running on port http://localhost:8080.`);
});
