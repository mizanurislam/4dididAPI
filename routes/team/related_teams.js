var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const relatedTeams = require('../../sample_data/related_teams');

/**
 * @swagger
 * tags:
 *   name: Related Teams
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      RelatedTeams:
 *          type: object
 *          required:
 *              - team_id
 *              - related_team_id
 *          properties:
 *              team_id:
 *                  type: integer
 *                  description: Team ID
 *              related_team_id:
 *                  type: integer
 *                  description: Related Team ID
 *          example: 
 *              team_id: 1
 *              related_team_id: 5
 */

/**
 * @swagger
 * /team/related_teams/get/{team_id}:
 *   get:
 *      summary: Get Related Teams
 *      tags: [Related Teams]
 *      description: Fetch all related teams by a given team-id
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
 *              description: Fetch all related teams by a given team-id.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/RelatedTeams'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "No related team found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/related_teams/get/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.team_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(relatedTeams));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "No related team found!"
        }));
    }

});

/**
 * @swagger
 * /team/related_teams/create:
 *   post:
 *      summary: Record Related Team
 *      tags: [Related Teams]
 *      description: Insert a Related Team
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/RelatedTeams'
 *      responses:
 *          '200':
 *              description: Insert a Related Team.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/RelatedTeams'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/related_teams/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /team/related_teams/delete/{team_id}/{related_team_id}:
 *   delete:
 *      summary: Remove Related Team
 *      tags: [Related Teams]
 *      description: Delete related team
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
 *            name: related_team_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Related Team ID
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/RelatedTeams'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/related_teams/delete/:team_id/:related_team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        team_id: req.params.team_id,
        related_team_id: req.params.related_team_id
    }));

});

module.exports = router;