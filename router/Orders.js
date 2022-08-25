module.exports = (app) => {
    const Orders = require("../controllers/Orders.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Orders.create);
    // Retrieve all Tutorials
    router.get("/", Orders.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Orders.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Orders.findOne);
    // Update a Tutorial with id
    router.put("/:id", Orders.update);
    // Delete a Tutorial with id
    router.delete("/:id", Orders.delete);
    // Delete all Tutorials
    // router.delete("/", Orders.deleteAll);
    app.use("/api/orders", router);
};
