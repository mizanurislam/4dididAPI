var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

const roles = require('../sample_data/roles');

/**
 * @swagger
 * tags:
 *   name: User Role
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Role:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              name:
 *                  type: string
 *                  description: Role Name
 *          example: 
 *              name: "team_member"
 *      RoleAssignment:
 *          type: object
 *          required:
 *              - user_id
 *              - role_id
 *          properties:
 *              user_id:
 *                  type: integer
 *                  description: User ID
 *              role_id:
 *                  type: integer
 *                  description: Role ID
 *          example: 
 *              user_id: 2
 *              role_id: 3
 */

/**
 * @swagger
 * /roles/list:
 *   get:
 *      summary: List
 *      tags: [User Role]
 *      description: Fetch all roles
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
 *                              $ref: '#/components/schemas/Role'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(roles));

});

/**
 * @swagger
 * /roles/assign:
 *   post:
 *      summary: Role Assignment
 *      tags: [User Role]
 *      description: Assign user a specific role
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RoleAssignment'
 *      responses:
 *          '200':
 *              description: Fetch assigned role-object.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/RoleAssignment'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/assign', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /roles/revoke/{user_id}/{role_id}:
 *   delete:
 *      summary: Revoke Assigned Role
 *      tags: [User Role]
 *      description: Delete user-assigned role
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
 *            name: role_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Role ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/RoleAssignment'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/revoke/:user_id/:role_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        user_id: req.params.user_id,
        role_id: req.params.role_id
    }));

});

module.exports = router;