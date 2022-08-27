module.exports = (app) => {
    const Cars = require("../controllers/Cars.js");
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *      schemas:
     *          Cars:
     *              type: object
     *              properties:
     *                  id:
     *                      type: integer
     *                      description: The auto-generated id of the cars
     *                  name:
     *                      type: string
     *                      description: The car name
     *                  doors:
     *                      type: integer
     *                      description: The car doors
     *                  seats:
     *                      type: integer
     *                      description: The car seats
     *                  buggage:
     *                      type: integer
     *                      description: The car buggage
     *                  fuel:
     *                      type: string
     *                      description: The car fuel
     *                  price:
     *                      type: integer
     *                      description: The car price
     *                  brandId:
     *                      type: integer
     *                      description: The car brandId
     *                  categoryId:
     *                      type: integer
     *                      description: The car categoryId
     *              example:
     *                  id: 123
     *                  name: Cars
     *                  doors: 4
     *                  seats: 7
     *                  buggage: 200
     *                  fuel: gasoline
     *                  price: 200
     *                  brandId: 2
     *                  categoryId: 2
     */

    /**
     * @swagger
     *     tags:
     *          name: Cars
     *          description: The cars managing API
     */

    /**
     * @swagger
     *  /cars:
     *      get:
     *          summary: Returns the list of all the cars
     *          tags: [Cars]
     *          responses:
     *              "200":
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     */

    /**
     * @swagger
     *  /cars/{id}:
     *      get:
     *          summary: Get the car by id
     *          tags: [Cars]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          responses:
     *              200:
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     *              404:
     *                  description: The car was not found
     */

    /**
     * @swagger
     *  /cars:
     *      post:
     *          summary: Create a new car
     *          tags: [Cars]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Cars"
     *          responses:
     *              200:
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /cars/{id}:
     *      put:
     *          summary: Update the car by id
     *          tags: [Cars]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Cars"
     *          responses:
     *              200:
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     *              404:
     *                  description: The car was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /cars/{id}:
     *      patch:
     *          summary: Update the car by id
     *          tags: [Cars]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Cars"
     *          responses:
     *              200:
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     *              404:
     *                  description: The car was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /cars/{id}:
     *      delete:
     *          summary: Remove the car by id
     *          tags: [Cars]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          responses:
     *              200:
     *                  description: The list of the cars
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Cars"
     *              404:
     *                  description: The car was not found
     *              500:
     *                  description: Some server error
     */

    // Create a new Tutorial
    router.post("/", Cars.create);
    // Retrieve all Tutorials
    router.get("/", Cars.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Cars.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id/", Cars.findOne);
    // Update a Tutorial with id
    router.put("/:id/", Cars.update);
    router.patch("/:id/", Cars.update);
    // Delete a Tutorial with id
    router.delete("/:id/", Cars.delete);
    // Delete all Tutorials
    // router.delete("/", Cars.deleteAll);
    app.use("/cars", router);
};
