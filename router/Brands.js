module.exports = (app) => {
    const Brands = require("../controllers/Brands.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Brands.create);
    // Retrieve all Tutorials
    router.get("/", Brands.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Brands.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Brands.findOne);
    // Update a Tutorial with id
    router.put("/:id", Brands.update);
    // Delete a Tutorial with id
    router.delete("/:id", Brands.delete);
    // Delete all Tutorials
    // router.delete("/", Brands.deleteAll);
    app.use("/api/brands", router);
};
