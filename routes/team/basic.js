
var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const teams = require('../../sample_data/teams');

/**
 * @swagger
 * tags:
 *   name: Team Basic
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Team:
 *          type: object
 *          required:
 *              - id
 *              - title
 *              - team_location
 *              - established_at
 *              - team_details
 *          properties:
 *              id:
 *                  type: string
 *                  description: Team ID
 *              title:
 *                  type: integer
 *                  description: Team/Company Name
 *              team_location:
 *                  type: string
 *                  description: Team Location
 *              established_at:
 *                  type: string
 *                  description: Established At
 *              logo_image:
 *                  type: string
 *                  format: binary
 *                  description: Logo Image
 *              background_image:
 *                  type: string
 *                  format: binary
 *                  description: Background Image
 *              team_image:
 *                  type: string
 *                  format: binary
 *                  description: Team Image
 *              team_details:
 *                  type: string
 *                  description: Team Description
 *              project_details:
 *                  type: string
 *                  description: Project Description
 *              people_details:
 *                  type: string
 *                  description: People Description
 *              more_details:
 *                  type: string
 *                  description: More Information
 *              website:
 *                  type: string
 *                  description: Team/Company Website
 *              active:
 *                  type: integer
 *                  enum: [0, 1]
 *                  description: Whether Team is Active or Inactive
 *          example:
 *              id: 1
 *              title: "Team B"
 *              team_location: "Dhaka, Bangladesh"
 *              established_at: "2020-02-10"
 *              logo_image: "teamb_logo.jpg"
 *              background_image: "teamb_bg.jpg"
 *              team_image: "teamb.jpg"
 *              team_details: "Team B details..."
 *              project_details: "Project details for Team B.."
 *              people_details: "Member details of Team B.."
 *              more_details: "Team B more details..."
 *              website: "http://www.teamb.com"
 *              active: 1
 */

/**
 * @swagger
 * /team/basic/list:
 *   get:
 *      summary: List
 *      tags: [Team Basic]
 *      description: Fetch all teams
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all teams.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Team'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/basic/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(teams));

});

/**
 * @swagger
 * /team/basic/get/{id}:
 *   get:
 *      summary: Single Team
 *      tags: [Team Basic]
 *      description: Get a team by it's ID
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team ID
 *      responses:
 *          '200':
 *              description: Fetch a team.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Team'
 *          '404':
 *              description: Could not find the team.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Failed to find the team" }
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
            title: "Team A",
            team_location: "Tokyio, Japan",
            established_at: "2012-06-15",
            logo_image: "teama_logo.jpg",
            background_image: "teama_bg.jpg",
            team_image: "teama.jpg",
            team_details: "Team A details...",
            project_details: "Project details for Team A..",
            people_details: "Member details of Team A..",
            more_details: "Team A more details...",
            website: "http://www.teama.com",
            active: 1
        }));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Failed to find the team"
        }));
    }

});

/**
 * @swagger
 * /team/search:
 *   post:
 *      summary: Search Team
 *      tags: [Team Basic]
 *      description: Search team by name 
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       type: object
 *                       properties:
 *                          name:
 *                              type: string
 *                              description: Team Name
 *                       example: 
 *                          name: "Team A"
 *      responses:
 *          '200':
 *              description: Team found.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Team'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/search', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.body.name == 'Team A' ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            id: 1,
            title: "Team A",
            team_location: "Tokyio, Japan",
            established_at: "2012-06-15",
            logo_image: "teama_logo.jpg",
            background_image: "teama_bg.jpg",
            team_image: "teama.jpg",
            team_details: "Team A details...",
            project_details: "Project details for Team A..",
            people_details: "Member details of Team A..",
            more_details: "Team A more details...",
            website: "http://www.teama.com",
            active: 1
        }));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Failed to find the team"
        }));
    }

});

/**
 * @swagger
 * /team/basic/create:
 *   post:
 *      summary: Record Team
 *      tags: [Team Basic]
 *      description: Insert Team
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Team'
 *      responses:
 *          '200':
 *              description: Team information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Team'
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
 * /Team/basic/update:
 *   put:
 *      summary: Update Team
 *      tags: [Team Basic]
 *      description: Update and existing team
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Team'
 *      responses:
 *          '200':
 *              description: Team information saved successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Team'
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
 *  /Team/basic/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Team Basic]
 *      description: Delete an Existing Team
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "Team deleted successfully" }
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
        message: "Team deleted successfully"
    }));

});

/**
 * @swagger
 * /team/register/{admin_id}/{user_id}/{team_id}:
 *   get:
 *      summary: Team Registration
 *      tags: [Team Basic]
 *      description: Notify admin by mail when user chooses a team to be registered
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: admin_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Admin User ID
 *          - in: path
 *            name: user_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User ID
 *          - in: path
 *            name: team_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team ID
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "Team admin notified about the user's chosen team selection" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/register/:admin_id/:user_id/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true, 
        message: "Team admin notified about the user's chosen team selection"
    }));

});

module.exports = router;