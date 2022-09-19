const verifyToken = require("../controllers/verifyToken.js");

module.exports = (app) => {
    const Categories = require("../controllers/Categories.js");
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *      schemas:
     *          Categories:
     *              type: object
     *              properties:
     *                  id:
     *                      type: integer
     *                      description: The auto-generated id of the categories
     *                  name:
     *                      type: string
     *                      description: The category name
     *              example:
     *                  id: 123
     *                  name: Brand
     */

    /**
     * @swagger
     *     tags:
     *          name: Categories
     *          description: The categories managing API
     */

    /**
     * @swagger
     *  /categories:
     *      get:
     *          summary: Returns the list of all the categories
     *          tags: [Categories]
     *          responses:
     *              "200":
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     */

    /**
     * @swagger
     *  /categories/{id}:
     *      get:
     *          summary: Get the category by id
     *          tags: [Categories]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The category id
     *          responses:
     *              200:
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     *              404:
     *                  description: The category was not found
     */

    /**
     * @swagger
     *  /categories:
     *      post:
     *          summary: Create a new category
     *          tags: [Categories]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Categories"
     *          responses:
     *              200:
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /categories/{id}:
     *      put:
     *          summary: Update the category by id
     *          tags: [Categories]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The category id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Categories"
     *          responses:
     *              200:
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     *              404:
     *                  description: The category was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /categories/{id}:
     *      patch:
     *          summary: Update the category by id
     *          tags: [Categories]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The category id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Categories"
     *          responses:
     *              200:
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     *              404:
     *                  description: The category was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /categories/{id}:
     *      delete:
     *          summary: Remove the category by id
     *          tags: [Categories]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The category id
     *          responses:
     *              200:
     *                  description: The list of the categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Categories"
     *              404:
     *                  description: The category was not found
     *              500:
     *                  description: Some server error
     */

    router.post("/", verifyToken, Categories.create);
    router.get("/", Categories.findAll);
    router.get("/:id/", Categories.findOne);
    router.put("/:id/", verifyToken, Categories.update);
    router.patch("/:id/", verifyToken, Categories.update);
    router.delete("/:id/", verifyToken, Categories.delete);
    app.use("/categories", router);
};
