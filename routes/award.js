var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

const awards = require('../sample_data/award');

/**
 * @swagger
 * tags:
 *   name: Awards
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Award:
 *          type: object
 *          required:
 *              - id
 *              - name
 *              - icon
 *              - url
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID
 *              name:
 *                  type: string
 *                  description: Award Name
 *              icon:
 *                  type: string
 *                  format: binary
 *                  description: Icon File
 *              url:
 *                  type: string
 *                  description: Social Network URL
 *          example: 
 *              id: 1
 *              name: "BAFT"
 *              icon: "bafta.jpg"
 *              url: "http://www.bafta123.com"
 */

/**
 * @swagger
 * /award/list:
 *   get:
 *      summary: List
 *      tags: [Awards]
 *      description: Fetch all awards
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all awards.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Award'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(awards));

});

/**
 * @swagger
 * /award/create:
 *   post:
 *      summary: Create
 *      tags: [Awards]
 *      description: Insert an award information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Award'
 *      responses:
 *          '200':
 *              description: Award information created successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Award'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 * /award/edit:
 *   put:
 *      summary: Update
 *      tags: [Awards]
 *      description: Update an existing award information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Award'
 *      responses:
 *          '200':
 *              description: Award information updated successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Award'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.put('/edit', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /award/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Awards]
 *      description: Delete an Existing Award Information
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Information ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "Information deleted successfully" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Information deleted successfully"
    }));

});

module.exports = router;