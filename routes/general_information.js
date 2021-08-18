var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

const generalData = require('../sample_data/general_information');

/**
 * @swagger
 * tags:
 *   name: General Information
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      GeneralInformation:
 *          type: object
 *          required:
 *              - id
 *              - title
 *              - description
 *              - information_date
 *              - status
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Information ID
 *              title:
 *                  type: string
 *                  description: Information Title
 *              description:
 *                  type: string
 *                  description: Information Details
 *              information_date:
 *                  type: string
 *                  description: Information Details
 *              title_image:
 *                  type: string
 *                  format: binary
 *                  description: Title Image
 *              status:
 *                  type: string
 *                  enum: [draft, published, private]
 *                  description: Information Status
 *          example: 
 *              id: 1
 *              title: "4D I DID"
 *              description: "I DID Project has been kicked off"
 *              information_date: "2021-06-18"
 *              status: "published"
 */

/**
 * @swagger
 * /general_information/list:
 *   get:
 *      summary: List
 *      tags: [General Information]
 *      description: Fetch all general information
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all general information.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/GeneralInformation'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(generalData));

});

/**
 * @swagger
 * /general_information/create:
 *   post:
 *      summary: Create
 *      tags: [General Information]
 *      description: Insert a general information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/GeneralInformation'
 *      responses:
 *          '200':
 *              description: General information created successfully.
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
 router.post('/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 * /general_information/edit:
 *   put:
 *      summary: Update
 *      tags: [General Information]
 *      description: Update an existing general information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/GeneralInformation'
 *      responses:
 *          '200':
 *              description: General information updated successfully.
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
 *  /general_information/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [General Information]
 *      description: Delete an Existing General Information
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