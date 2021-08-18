var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

const socialNetworks = require('../sample_data/social_networks');

/**
 * @swagger
 * tags:
 *   name: Social Networks
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      SocialNetwork:
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
 *                  description: Social Network Name
 *              icon:
 *                  type: string
 *                  format: binary
 *                  description: Icon File
 *              url:
 *                  type: string
 *                  description: Social Network URL
 *          example: 
 *              id: 1
 *              name: "Facebook"
 *              icon: "fb.jpg"
 *              url: "https://www.facebook.com"
 */

/**
 * @swagger
 * /social_network/list:
 *   get:
 *      summary: List
 *      tags: [Social Networks]
 *      description: Fetch all social network information
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all social network information.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/SocialNetwork'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(socialNetworks));

});

/**
 * @swagger
 * /social_network/create:
 *   post:
 *      summary: Create
 *      tags: [Social Networks]
 *      description: Insert a social network information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/SocialNetwork'
 *      responses:
 *          '200':
 *              description: Social network information created successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/SocialNetwork'
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
 * /social_network/edit:
 *   put:
 *      summary: Update
 *      tags: [Social Networks]
 *      description: Update an existing social network information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/SocialNetwork'
 *      responses:
 *          '200':
 *              description: Social network information updated successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GeneralInformation'
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
 *  /social_network/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Social Networks]
 *      description: Delete an Existing Social Network Information
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