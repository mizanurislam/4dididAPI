var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const comments = require('../../sample_data/project_wise_comments');

/**
 * @swagger
 * tags:
 *   name: Project Wise Comments
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      ProjectWiseComments:
 *          type: object
 *          required:
 *              - id
 *              - user_id
 *              - project_id
 *              - comments
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Comment ID
 *              user_id:
 *                  type: integer
 *                  description: User ID
 *              project_id:
 *                  type: integer
 *                  description: Project ID
 *              comments:
 *                  type: string
 *                  description: User Comments
 *          example: 
 *              id: 1
 *              user_id: 5
 *              project_id: 1
 *              comments: "This is an open project."
 */

/**
 * @swagger
 * /project/comments/get/{project_id}:
 *   get:
 *      summary: Get Comments
 *      tags: [Project Wise Comments]
 *      description: Fetch all comments by a given project-id
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: project_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Project ID
 *      responses:
 *          '200':
 *              description: Fetch all comments by a given project-id.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ProjectWiseComments'
 *          '404':
 *              description: Not found.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "No comments found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/comments/get/:project_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.project_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(comments));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "No comments found!"
        }));
    }

});

/**
 * @swagger
 * /project/comments/create:
 *   post:
 *      summary: Post Comment
 *      tags: [Project Wise Comments]
 *      description: Post comment in a project
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/ProjectWiseComments'
 *      responses:
 *          '200':
 *              description: Post comment in a project.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ProjectWiseComments'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/comments/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /project/comments/delete/{id}:
 *   delete:
 *      summary: Delete Comment
 *      tags: [Project Wise Comments]
 *      description: Delete a selected comment
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Comment ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "Comment deleted successfully" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/comments/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true, 
        message: "Comment deleted successfully"
    }));

});

module.exports = router;