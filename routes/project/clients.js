var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const clients = require('../../sample_data/clients');

/**
 * @swagger
 * tags:
 *   name: Project Clients
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Client:
 *          type: object
 *          required:
 *              - id
 *              - name
 *              - email
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Client ID
 *              name:
 *                  type: string
 *                  description: Client Name
 *              email:
 *                  type: string
 *                  description: Email Address
 *              website:
 *                  type: string
 *                  description: Website
 *              contact_number:
 *                  type: integer
 *                  description: Telephone/Mobile Number
 *              location:
 *                  type: string
 *                  description: Client's Location
 *          example: 
 *              id: 1
 *              name: "4 Digit"
 *              email: "4d_san@4digit.jp"
 *              website: "http://www.4d_san.jp.com"
 *              contact_number: "111-1111"
 *              location": "Tokiyo, Japan"
 */

/**
 * @swagger
 * /project/clients/get:
 *   get:
 *      summary: Clients
 *      tags: [Project Clients]
 *      description: Get all clients
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all clients.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Client'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/clients/get', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(clients));

});

/**
 * @swagger
 * /project/clients/create:
 *   post:
 *      summary: Record a client
 *      tags: [Project Clients]
 *      description: Insert a client
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Client'
 *      responses:
 *          '200':
 *              description: Client information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/clients/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 * /project/clients/update:
 *   put:
 *      summary: Update a client
 *      tags: [Project Clients]
 *      description: Update an existing client
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Client'
 *      responses:
 *          '200':
 *              description: Client information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.put('/clients/update', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

module.exports = router;