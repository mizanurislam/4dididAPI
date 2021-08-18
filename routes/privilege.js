var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

const privileges = require('../sample_data/privileges');

/**
 * @swagger
 * tags:
 *   name: Role Wise Privileges
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Privilege:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              name:
 *                  type: string
 *                  description: Privilege Name
 *          example: 
 *              name: "manage_projects"
 *      PrivilegeAssignment:
 *          type: object
 *          required:
 *              - role_id
 *              - privilege_id
 *          properties:
 *              role_id:
 *                  type: integer
 *                  description: Role ID
 *              privilege_id:
 *                  type: integer
 *                  description: Privilege ID
 *          example: 
 *              role_id: 2
 *              privilege_id: 4
 */

/**
 * @swagger
 * /privileges/list:
 *   get:
 *      summary: List
 *      tags: [Role Wise Privileges]
 *      description: Fetch all privileges
 *      security:
 *          - jwt: []
 *      responses:
 *          '200':
 *              description: Fetch all privileges.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Privilege'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/list', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(privileges));

});

/**
 * @swagger
 * /privileges/assign:
 *   post:
 *      summary: Rolewise Privileges Assignment
 *      tags: [Role Wise Privileges]
 *      description: Assign privileges to a specific role
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/PrivilegeAssignment'
 *      responses:
 *          '200':
 *              description: Fetch assigned role-object.
 *              content:
 *                  application/json:
 *                      schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/PrivilegeAssignment'
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
 *  /privileges/revoke/{role_id}/{privilege_id}:
 *   delete:
 *      summary: Revoke Assigned Role
 *      tags: [Role Wise Privileges]
 *      description: Delete user-assigned role
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: role_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Role ID
 *          - in: path
 *            name: privilege_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Privilege ID 
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
 router.delete('/revoke/:role_id/:privilege_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        role_id: req.params.role_id,
        privilege_id: req.params.privilege_id
    }));

});

module.exports = router;