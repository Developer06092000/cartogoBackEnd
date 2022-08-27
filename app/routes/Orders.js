module.exports = (app) => {
    const Orders = require("../controllers/Orders.js");
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *      schemas:
     *          Orders:
     *              type: object
     *              properties:
     *                  id:
     *                      type: integer
     *                      description: The auto-generated id of the orders
     *                  name:
     *                      type: string
     *                      description: The order name
     *                  email:
     *                      type: string
     *                      description: The order email
     *                  phone:
     *                      type: string
     *                      description: The order phone
     *                  answered:
     *                      type: boolean
     *                      description: The order answered
     *                  telegramId:
     *                      type: integer
     *                      description: The order telegramId
     *                  carId:
     *                      type: integer
     *                      description: The order carId
     *                  description:
     *                      type: integer
     *                      description: The order description
     *              example:
     *                  id: 123
     *                  name: Cars
     *                  email: info@gmail.com
     *                  phone: +998991234567
     *                  answered: false
     *                  telegramId: 1213546
     *                  carId: 2
     *                  description: "There is the text..."
     */

    /**
     * @swagger
     *     tags:
     *          name: Cars
     *          description: The orders managing API
     */

    /**
     * @swagger
     *  /orders:
     *      get:
     *          summary: Returns the list of all the orders
     *          tags: [Orders]
     *          responses:
     *              "200":
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     */

    /**
     * @swagger
     *  /orders/{id}:
     *      get:
     *          summary: Get the order by id
     *          tags: [Orders]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The order id
     *          responses:
     *              200:
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     *              404:
     *                  description: The order was not found
     */

    /**
     * @swagger
     *  /orders:
     *      post:
     *          summary: Create a new car
     *          tags: [Orders]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Orders"
     *          responses:
     *              200:
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /orders/{id}:
     *      put:
     *          summary: Update the order by id
     *          tags: [Orders]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The order id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Orders"
     *          responses:
     *              200:
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     *              404:
     *                  description: The order was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /orders/{id}:
     *      patch:
     *          summary: Update the order by id
     *          tags: [Orders]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The order id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Orders"
     *          responses:
     *              200:
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     *              404:
     *                  description: The order was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /orders/{id}:
     *      delete:
     *          summary: Remove the order by id
     *          tags: [Orders]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The order id
     *          responses:
     *              200:
     *                  description: The list of the orders
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Orders"
     *              404:
     *                  description: The order was not found
     *              500:
     *                  description: Some server error
     */

    // Create a new Tutorial
    router.post("/", Orders.create);
    // Retrieve all Tutorials
    router.get("/", Orders.findAll);
    // Retrieve all published Tutorials
    // router.get("/published", Orders.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id/", Orders.findOne);
    // Update a Tutorial with id
    router.put("/:id/", Orders.update);
    router.patch("/:id/", Orders.update);
    // Delete a Tutorial with id
    router.delete("/:id/", Orders.delete);
    // Delete all Tutorials
    // router.delete("/", Orders.deleteAll);
    app.use("/orders", router);
};
