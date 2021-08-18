var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const awards = require('../../sample_data/team_awards');

/**
 * @swagger
 * tags:
 *   name: Team's Awards
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      TeamAward:
 *          type: object
 *          required:
 *              - team_id
 *              - award_id
 *          properties:
 *              team_id:
 *                  type: string
 *                  description: Team ID
 *              award_id:
 *                  type: integer
 *                  description: Award ID
 *          example:
 *              team_id: 5
 *              award_id: 2
 */

/**
 * @swagger
 * /team/awards/get/{team_id}:
 *   get:
 *      summary: Team's Awards
 *      tags: [Team's Awards]
 *      description: Get team's award information
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
 *              description: Fetch team's awards.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/TeamAward'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Award data not found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/awards/get/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.team_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(awards));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Award data not found!"
        }));
    }

});

/**
 * @swagger
 * /team/awards/create:
 *   post:
 *      summary: Record Team's Award
 *      tags: [Team's Awards]
 *      description: Insert Team's Award
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/TeamAward'
 *      responses:
 *          '200':
 *              description: Award information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TeamAward'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/awards/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /team/awards/delete/{team_id}/{award_id}:
 *   delete:
 *      summary: Remove
 *      tags: [Team's Awards]
 *      description: Delete an Existing Award Information
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
 *            name: award_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team's Award ID 
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
 router.delete('/awards/delete/:team_id/:award_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Information deleted successfully"
    }));

});

module.exports = router;