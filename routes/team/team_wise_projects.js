var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const teamWiseProjects = require('../../sample_data/team_wise_projects');

/**
 * @swagger
 * tags:
 *   name: Team Wise Projects
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      ProjectAssignment:
 *          type: object
 *          required:
 *              - project_id
 *              - team_id
 *          properties:
 *              project_id:
 *                  type: integer
 *                  description: Project ID
 *              team_id:
 *                  type: integer
 *                  description: Team ID
 *          example: 
 *              project_id: 3
 *              role_id: 5
 */

/**
 * @swagger
 * /team/projects/get/{team_id}:
 *   get:
 *      summary: Get Teamwise Project
 *      tags: [Team Wise Projects]
 *      description: Fetch all projects by a given team-id
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: team_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team ID
 *      responses:
 *          '200':
 *              description: Fetch all projects by a given team-id.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ProjectAssignment'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "No project found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/projects/get/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.team_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(teamWiseProjects));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "No project found!"
        }));
    }

});

/**
 * @swagger
 * /team/projects/create:
 *   post:
 *      summary: Role Assignment
 *      tags: [Team Wise Projects]
 *      description: Assign user a specific role
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/ProjectAssignment'
 *      responses:
 *          '200':
 *              description: Fetch team-wise assignment.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ProjectAssignment'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/projects/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /team/projects/delete/{team_id}/{project_id}:
 *   delete:
 *      summary: Remove Teamwise Project Assignment
 *      tags: [Team Wise Projects]
 *      description: Delete teamwise assigned project
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: team_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team ID
 *          - in: path
 *            name: project_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Project ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ProjectAssignment'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/projects/delete/:team_id/:project_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        team_id: req.params.team_id,
        project_id: req.params.project_id
    }));

});

module.exports = router;