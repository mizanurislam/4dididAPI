var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const socialNetworks = require('../../sample_data/user_social_networks');

/**
 * @swagger
 * tags:
 *   name: Profile Settings
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      UserSocialNetwork:
 *          type: object
 *          required:
 *              - user_id
 *              - social_network_id
 *              - social_network_url
 *              - status
 *          properties:
 *              user_id:
 *                  type: string
 *                  description: User ID
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
 *              user_id: 2
 *              social_network_id: 2
 *              social_network_url: "https://twitter.com/user=234"
 *              status: 1
 */

/**
 * @swagger
 * /profile/social_networks/get/{user_id}:
 *   get:
 *      summary: User's Social Links
 *      tags: [Profile Settings]
 *      description: Get user's social link information
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
 *              description: Fetch user's social links.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/UserSocialNetwork'
 *          '404':
 *              description: Login failure.
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
 router.get('/social_networks/get/:user_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.user_id == 1 ) {

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
 * /profile/social_networks/create:
 *   post:
 *      summary: Record User's Social Link
 *      tags: [Profile Settings]
 *      description: Insert User's Social Link
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/UserSocialNetwork'
 *      responses:
 *          '200':
 *              description: Social Link information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserSocialNetwork'
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
 *  /profile/social_networks/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Profile Settings]
 *      description: Delete an Existing Social Link Information
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User's Social Link ID 
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
 router.delete('/social_networks/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Information deleted successfully"
    }));

});

module.exports = router;