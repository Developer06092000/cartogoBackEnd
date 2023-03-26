const uploadFile = require("../middleware/image.js");
const verifyToken = require("../middleware/verifyToken.js");

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
     *                  image:
     *                      type: string
     *                      description: The brand image url
     *              example:
     *                  id: 123
     *                  name: Brand
     *                  image: url
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
     *          security:
     *              - bearerAuth: []
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: string
     *                                  description: The brand image url
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: file
     *                                  description: The brand image url
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
     *          security:
     *              - bearerAuth: []
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: string
     *                                  description: The brand image url
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: file
     *                                  description: The brand image url
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
     *          security:
     *              - bearerAuth: []
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The brand id
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: string
     *                                  description: The brand image url
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The brand name
     *                              image:
     *                                  type: file
     *                                  description: The brand image url
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
     *          security:
     *              - bearerAuth: []
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
    router.post("/", verifyToken, uploadFile.single("image"), Brands.create);
    router.put("/:id/", verifyToken, uploadFile.single("image"), Brands.update);
    router.patch("/:id/", verifyToken, uploadFile.single("image"), Brands.update);
    router.delete("/:id/", verifyToken, Brands.delete);
    app.use("/brands", router);
};
