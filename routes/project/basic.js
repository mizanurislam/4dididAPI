
var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const projects = require('../../sample_data/projects');

/**
 * @swagger
 * tags:
 *   name: Project Basic
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Project:
 *          type: object
 *          required:
 *              - id
 *              - title
 *              - start_date
 *              - end_date
 *              - description
 *          properties:
 *              id:
 *                  type: string
 *                  description: Project ID
 *              title:
 *                  type: integer
 *                  description: Project Title
 *              start_date:
 *                  type: string
 *                  description: Project Start Date
 *              end_date:
 *                  type: string
 *                  description: Project End Date
 *              title_image:
 *                  type: string
 *                  format: binary
 *                  description: Title Image
 *              description:
 *                  type: string
 *                  description: Project Details
 *              message:
 *                  type: string
 *                  description: Project Message
 *              requirements:
 *                  type: string
 *                  description: Project Requirements
 *              conditions:
 *                  type: string
 *                  description: Project Conditions
 *              is_private:
 *                  type: integer
 *                  enum: [0, 1]
 *                  description: Whether Public or Private
 *              status:
 *                  type: integer
 *                  enum: [0, 1]
 *                  description: Whether Open or Closed
 *          example:
 *              id: 1
 *              title: "4D I DID"
 *              start_date: "2021-06-01"
 *              end_date: "2021-11-30"
 *              title_image: "4didid.jpg"
 *              description: "Project details..."
 *              message: "Message from owner..."
 *              requirements: "Project requirements..."
 *              conditions: "Project conditions..."
 *              is_private: 1
 *              status: 1
 */

/**
 * @swagger
 * /project/basic/list:
 *   get:
 *      summary: List
 *      tags: [Project Basic]
 *      description: Fetch all projects
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all roles.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Project'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/basic/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(projects));

});

/**
 * @swagger
 * /project/basic/get/{id}:
 *   get:
 *      summary: Single Project
 *      tags: [Project Basic]
 *      description: Get a project by it's ID
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Project ID
 *      responses:
 *          '200':
 *              description: Fetch a project.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Project'
 *          '404':
 *              description: Could not find the project.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Failed to find the project" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/basic/get/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            id: 1,
            title: "4D I DID",
            start_date: "2021-06-01",
            end_date: "2021-11-30",
            title_image: "4didid.jpg",
            description: "Project details...",
            message: "Message from owner...",
            requirements: "Project requirements...",
            conditions: "Project conditions...",
            is_private: 1,
            status: 0
        }));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Failed to find the project"
        }));
    }

});

/**
 * @swagger
 * /project/basic/create:
 *   post:
 *      summary: Record Project
 *      tags: [Project Basic]
 *      description: Insert Project
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Project'
 *      responses:
 *          '200':
 *              description: Project information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Project'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/basic/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 * /project/basic/update:
 *   put:
 *      summary: Update Project
 *      tags: [Project Basic]
 *      description: Update and existing project
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Project'
 *      responses:
 *          '200':
 *              description: Project information saved successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Project'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.put('/basic/update', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /project/basic/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Project Basic]
 *      description: Delete an Existing Project
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Project ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "Project deleted successfully" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/basic/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Project deleted successfully"
    }));

});

module.exports = router;