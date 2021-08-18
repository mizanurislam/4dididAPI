var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const socialNetworks = require('../../sample_data/team_social_networks');

/**
 * @swagger
 * tags:
 *   name: Team's Social Links
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      TeamSocialNetwork:
 *          type: object
 *          required:
 *              - team_id
 *              - social_network_id
 *              - social_network_url
 *              - status
 *          properties:
 *              team_id:
 *                  type: string
 *                  description: Team ID
 *              social_network_id:
 *                  type: integer
 *                  description: Social Network ID
 *              social_network_url:
 *                  type: string
 *                  description: Social Link URL
 *              status:
 *                  type: integer
 *                  enum: [0, 1, 2]
 *                  description: Social Link Display Status
 *          example:
 *              team_id: 2
 *              social_network_id: 2
 *              social_network_url: "https://twitter.com/team=234"
 *              status: 1
 */

/**
 * @swagger
 * /team/social_networks/get/{team_id}:
 *   get:
 *      summary: Team's Social Links
 *      tags: [Team's Social Links]
 *      description: Get team's social link information
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
 *              description: Fetch team's social links.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/TeamSocialNetwork'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Social link data not found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/social_networks/get/:team_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.team_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(socialNetworks));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Social link data not found!"
        }));
    }

});

/**
 * @swagger
 * /team/social_networks/create:
 *   post:
 *      summary: Record Team's Social Link
 *      tags: [Team's Social Links]
 *      description: Insert Team's Social Link
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/TeamSocialNetwork'
 *      responses:
 *          '200':
 *              description: Social Link information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TeamSocialNetwork'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/social_networks/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /team/social_networks/delete/{team_id}/{social_network_id}:
 *   delete:
 *      summary: Remove
 *      tags: [Team's Social Links]
 *      description: Delete an Existing Social Link Information
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
 *            name: social_network_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Team's Social Link ID 
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
 router.delete('/social_networks/delete/:team_id/:social_network_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Information deleted successfully"
    }));

});

module.exports = router;