module.exports = (app) => {
    const Cars = require("../controllers/Cars.controller.");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Cars.create);
    // Retrieve all Tutorials
    router.get("/", Cars.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Cars.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Cars.findOne);
    // Update a Tutorial with id
    router.put("/:id", Cars.update);
    // Delete a Tutorial with id
    router.delete("/:id", Cars.delete);
    // Delete all Tutorials
    // router.delete("/", Cars.deleteAll);
    app.use("/api/cars", router);
};
