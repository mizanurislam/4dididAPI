var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const jobExperiences = require('../../sample_data/user_job_experiences');

/**
 * @swagger
 * tags:
 *   name: Profile Settings
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      UserJobExperience:
 *          type: object
 *          required:
 *              - id
 *              - user_id
 *              - job_start_date
 *              - job_end_date
 *              - team_id
 *              - job_title
 *              - status
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Record ID
 *              user_id:
 *                  type: string
 *                  description: User ID
 *              job_start_date:
 *                  type: string
 *                  description: Job Start Date
 *              job_end_date:
 *                  type: string
 *                  description: Job End Date
 *              team_id:
 *                  type: integer
 *                  description: Team ID
 *              job_title:
 *                  type: string
 *                  description: Job Title
 *              status:
 *                  type: integer
 *                  enum: [0, 1, 2]
 *                  description: Job Display Status
 *          example: 
 *              id: 1
 *              user_id: 2
 *              job_start_date: "2009-03-06"
 *              job_end_date: "2011-06-30"
 *              team_id: 11
 *              status: 1
 */

/**
 * @swagger
 * /profile/job_experiences/get/{user_id}:
 *   get:
 *      summary: User's Job Experiences
 *      tags: [Profile Settings]
 *      description: Get user's job experiences information
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
 *              description: Fetch user's job experiences.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/UserJobExperience'
 *          '404':
 *              description: Login failure.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Job experience data not found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/job_experiences/get/:user_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.user_id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jobExperiences));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Job experience data not found!"
        }));
    }

});

/**
 * @swagger
 * /profile/job_experiences/create:
 *   post:
 *      summary: Record User's Job Experiences
 *      tags: [Profile Settings]
 *      description: Insert User's Job Experiences
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/UserJobExperience'
 *      responses:
 *          '200':
 *              description: Job experiences information inserted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserJobExperience'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/job_experiences/create', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

/**
 * @swagger
 *  /profile/job_experiences/delete/{id}:
 *   delete:
 *      summary: Remove
 *      tags: [Profile Settings]
 *      description: Delete an Existing Job Experience Information
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Job Experience ID 
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
 router.delete('/job_experiences/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "Information deleted successfully"
    }));

});

module.exports = router;