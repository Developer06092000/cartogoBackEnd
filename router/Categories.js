module.exports = (app) => {
    const Categories = require("../controllers/Categories.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Categories.create);
    // Retrieve all Tutorials
    router.get("/", Categories.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Categories.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Categories.findOne);
    // Update a Tutorial with id
    router.put("/:id", Categories.update);
    // Delete a Tutorial with id
    router.delete("/:id", Categories.delete);
    // Delete all Tutorials
    // router.delete("/", Categories.deleteAll);
    app.use("/api/categories", router);
};
