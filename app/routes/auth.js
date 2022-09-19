const verifyToken = require("../controllers/verifyToken.js");

module.exports = (app) => {
    const Users = require("../controllers/auth.js");
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *      schemas:
     *          Users:
     *              type: object
     *              properties:
     *                  id:
     *                      type: integer
     *                      description: The auto-generated id of the user
     *                  username:
     *                      type: string
     *                      description: The user name
     *                  email:
     *                      type: string
     *                      format: email
     *                      description: The user email
     *                  password:
     *                      type: string
     *                      description: The user password
     *              example:
     *                  id: 1
     *                  username: John
     *                  email: info@gmail.com
     *                  password: 12345678
     */

    /**
     * @swagger
     *     tags:
     *          name: Users
     *          description: The users managing API
     */

    /**
     * @swagger
     *  /auth/register/:
     *      post:
     *          summary: Create a new user
     *          tags: [Users]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              username:
     *                                  type: string
     *                              email:
     *                                  type: string
     *                                  format: email
     *                              password:
     *                                  type: string
     *          responses:
     *              200:
     *                  description: The list of the users
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Users"
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /auth/login/:
     *      post:
     *          summary: Create a new user
     *          tags: [Users]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              username:
     *                                  type: string
     *                                  value: ""
     *                              password:
     *                                  type: string
     *          responses:
     *              200:
     *                  description: The list of the users
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  token:
     *                                      type: string
     *
     *              500:
     *                  description: Some server error
     */

    /**
     * @swagger
     *  /auth/changePassword/:
     *      post:
     *          summary: Change user password
     *          tags: [Users]
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              password:
     *                                  type: string
     *          responses:
     *              200:
     *                  description: The list of the users
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              items:
     *                                  $ref: "#/components/schemas/Users"
     *              500:
     *                  description: Some server error
     */

    router.post("/register/", Users.create);
    router.post("/login/", Users.login);
    router.get("/verify/", Users.verify);
    router.post("/changePassword/", Users.update);
    router.delete("/delete/", Users.delete);
    app.use("/auth", router);
};
