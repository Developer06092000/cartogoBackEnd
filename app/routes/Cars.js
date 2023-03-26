const uploadFile = require("../middleware/image.js");
const verifyToken = require("../middleware/verifyToken.js");

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
     *          security:
     *              - bearerAuth: []
     *          requestBody:
     *              required: true
     *              content:
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The car name
     *                              image:
     *                                  type: file
     *                                  description: The car image
     *                              doors:
     *                                  type: integer
     *                                  description: The car doors
     *                              seats:
     *                                  type: integer
     *                                  description: The car seats
     *                              buggage:
     *                                  type: integer
     *                                  description: The car buggage
     *                              fuel:
     *                                  type: string
     *                                  description: The car fuel
     *                              price:
     *                                  type: integer
     *                                  description: The car price
     *                              brandId:
     *                                  type: integer
     *                                  description: The car brandId
     *                              categoryId:
     *                                  type: integer
     *                                  description: The car categoryId
     *                          example:
     *                              name: ""
     *                              image: null
     *                              doors: null
     *                              seats: null
     *                              buggage: null
     *                              fuel: gasoline
     *                              price: null
     *                              brandId: null
     *                              categoryId: null
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
     *          security:
     *              - bearerAuth: []
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The car name
     *                              doors:
     *                                  type: integer
     *                                  description: The car doors
     *                              seats:
     *                                  type: integer
     *                                  description: The car seats
     *                              buggage:
     *                                  type: integer
     *                                  description: The car buggage
     *                              fuel:
     *                                  type: string
     *                                  description: The car fuel
     *                              price:
     *                                  type: integer
     *                                  description: The car price
     *                              brandId:
     *                                  type: integer
     *                                  description: The car brandId
     *                              categoryId:
     *                                  type: integer
     *                                  description: The car categoryId
     *                          example:
     *                              name: ""
     *                              doors: null
     *                              seats: null
     *                              buggage: null
     *                              fuel: gasoline
     *                              price: null
     *                              brandId: null
     *                              categoryId: null
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The car name
     *                              image:
     *                                  type: file
     *                                  description: The car image
     *                              doors:
     *                                  type: integer
     *                                  description: The car doors
     *                              seats:
     *                                  type: integer
     *                                  description: The car seats
     *                              buggage:
     *                                  type: integer
     *                                  description: The car buggage
     *                              fuel:
     *                                  type: string
     *                                  description: The car fuel
     *                              price:
     *                                  type: integer
     *                                  description: The car price
     *                              brandId:
     *                                  type: integer
     *                                  description: The car brandId
     *                              categoryId:
     *                                  type: integer
     *                                  description: The car categoryId
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
     *          security:
     *              - bearerAuth: []
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: The car id
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The car name
     *                              doors:
     *                                  type: integer
     *                                  description: The car doors
     *                              seats:
     *                                  type: integer
     *                                  description: The car seats
     *                              buggage:
     *                                  type: integer
     *                                  description: The car buggage
     *                              fuel:
     *                                  type: string
     *                                  description: The car fuel
     *                              price:
     *                                  type: integer
     *                                  description: The car price
     *                              brandId:
     *                                  type: integer
     *                                  description: The car brandId
     *                              categoryId:
     *                                  type: integer
     *                                  description: The car categoryId
     *                          example:
     *                              name: ""
     *                              doors: null
     *                              seats: null
     *                              buggage: null
     *                              fuel: gasoline
     *                              price: null
     *                              brandId: null
     *                              categoryId: null
     *                  multipart/form-data:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The car name
     *                              image:
     *                                  type: file
     *                                  description: The car image
     *                              doors:
     *                                  type: integer
     *                                  description: The car doors
     *                              seats:
     *                                  type: integer
     *                                  description: The car seats
     *                              buggage:
     *                                  type: integer
     *                                  description: The car buggage
     *                              fuel:
     *                                  type: string
     *                                  description: The car fuel
     *                              price:
     *                                  type: integer
     *                                  description: The car price
     *                              brandId:
     *                                  type: integer
     *                                  description: The car brandId
     *                              categoryId:
     *                                  type: integer
     *                                  description: The car categoryId
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
     *          security:
     *              - bearerAuth: []
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

    router.get("/", Cars.findAll);
    router.get("/:id/", Cars.findOne);
    router.post("/", verifyToken, uploadFile.single("image"), Cars.create);
    router.put("/:id/", verifyToken, uploadFile.single("image"), Cars.update);
    router.patch("/:id/", verifyToken, uploadFile.single("image"), Cars.update);
    router.delete("/:id/", verifyToken, Cars.delete);
    app.use("/cars", router);
};
