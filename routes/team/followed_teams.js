var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const followedTeams = require('../../sample_data/followed_teams');

/**
 * @swagger
 * tags:
 *   name: Followed Teams
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      FollowedTeams:
 *          type: object
 *          required:
 *              - id
 *              - user_id
 *              - team_id
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID
 *              user_id:
 *                  type: integer
 *                  description: Following User ID
 *              team_id:
 *                  type: integer
 *                  description: Followed Team ID
 *              followed_at:
 *                  type: integer
 *                  description: Timestamp of Following
 *          example: 
 *              id: 1
 *              user_id: 15
 *              team_id: 3
 */

/**
 * @swagger
 * /team/followed_teams/get/{user_id}:
 *   get:
 *      summary: User Teams
 *      tags: [Followed Teams]
 *      description: Fetch all followed teams by a given user-id
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: user_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User ID
 *      responses:
 *          '200':
 *              description: Fetch all followed teams by a given user-id.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/FollowedTeams'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "No teams found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/followed_teams/get/:user_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.user_id == 15 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(followedTeams));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "No teams found!"
        }));
    }

});

/**
 * @swagger
 * /team/followed_teams/create:
 *   post:
 *      summary: Record Related Team
 *      tags: [Followed Teams]
 *      description: Insert a Related Team
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/FollowedTeams'
 *      responses:
 *          '200':
 *              description: Insert a Related Team.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/FollowedTeams'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/followed_teams/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /team/followed_teams/delete/{user_id}/{team_id}:
 *   delete:
 *      summary: Remove Following Team
 *      tags: [Followed Teams]
 *      description: Delete a following team
 *      security:
 *          - jwt: []
 *      parameters:
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
 *                      schema: 
 *                          $ref: '#/components/schemas/FollowedTeams'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/followed_teams/delete/:user_id/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        user_id: req.params.user_id,
        team_id: req.params.team_id
    }));

});

module.exports = router;