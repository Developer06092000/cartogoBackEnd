module.exports = (app) => {
    const Brands = require("../controllers/Brands.js");
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *      schemas:
     *          Brands:
     *              type: object
     *              properties:
     *                  id:
     *                      type: integer
     *                      description: The auto-generated id of the brands
     *                  name:
     *                      type: string
     *                      description: The brand name
     *              example:
     *                  id: 123
     *                  name: Brand
     */

    /**
     * @swagger
     *     tags:
     *          name: Brands
     *          description: The brands managing API
     */

    /**
     * @swagger
     *  /brands:
     *      get:
     *          summary: Returns the list of all the brands
     *          tags: [Brands]
     *          responses:
     *              "200":
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: array
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     */

    /**
     * @swagger
     *  /brands/{id}:
     *      get:
     *          summary: Get the brand by id
     *          tags: [Brands]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          responses:
     *              200:
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     *              404:
     *                  description: The brand was not found
     */

    /**
     * @swagger
     *  /brands:
     *      post:
     *          summary: Create a new brand
     *          tags: [Brands]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Brands"
     *          responses:
     *              200:
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /brands/{id}:
     *      put:
     *          summary: Update the brand by id
     *          tags: [Brands]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Brands"
     *          responses:
     *              200:
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     *              404:
     *                  description: The brand was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /brands/{id}:
     *      patch:
     *          summary: Update the brand by id
     *          tags: [Brands]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Brands"
     *          responses:
     *              200:
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     *              404:
     *                  description: The brand was not found
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /brands/{id}:
     *      delete:
     *          summary: Remove the brand by id
     *          tags: [Brands]
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          responses:
     *              200:
     *                  description: The list of the brands
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Brands"
     *              404:
     *                  description: The brand was not found
     *              500:
     *                  description: Some server error
     */

    router.get("/", Brands.findAll);
    router.get("/:id/", Brands.findOne);
    router.post("/", Brands.create);
    // router.get("/published", Brands.findAllPublished);
    router.put("/:id/", Brands.update);
    router.patch("/:id/", Brands.update);
    router.delete("/:id/", Brands.delete);
    // router.delete("/", Brands.deleteAll);
    app.use("/brands", router);
};
