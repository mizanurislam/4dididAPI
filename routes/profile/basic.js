var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

const profileBasic = require('../../sample_data/profile');

/**
 * @swagger
 * tags:
 *   name: Profile Settings
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Profile:
 *          type: object
 *          required:
 *              - id
 *              - member_id
 *              - first_name
 *              - family_name
 *              - job_title
 *              - location
 *              - active
 *          properties:
 *              id:
 *                  type: integer
 *                  description: User ID
 *              member_id:
 *                  type: string
 *                  description: Member Unique ID
 *              first_name:
 *                  type: string
 *                  description: First Name
 *              family_name:
 *                  type: string
 *                  description: Family Name
 *              display_name:
 *                  type: string
 *                  description: Display Name
 *              profile_image:
 *                  type: string
 *                  format: binary
 *                  description: Profile Image File
 *              email:
 *                  type: string
 *                  description: Email Address
 *              job_title:
 *                  type: string
 *                  description: Job Title
 *              description:
 *                  type: string
 *                  description: User Details
 *              location:
 *                  type: string
 *                  description: User Location
 *              active:
 *                  type: integer
 *                  enum: [0, 1]
 *                  description: User Status
 *          example: 
 *              id: 1
 *              member_id: "USER1234"
 *              first_name: "Mizanur Islam"
 *              family_name: "Laskar"
 *              display_name: "mizan"
 *              profile_image: "mizan.jpg"
 *              email: "mizanur.islam@bjitgroup.com"
 *              description: "I'm an experienced web professional"
 *              job_title: "Software Architect"
 *              location: "Uttara, Dhaka"
 *              active: 1
 */

/**
 * @swagger
 * /profile/get_by_id/{id}:
 *   get:
 *      summary: Profile Basic
 *      tags: [Profile Settings]
 *      description: Get profile basic information
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User ID
 *      responses:
 *          '200':
 *              description: Fetch all awards.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Profile'
 *          '404':
 *              description: Login failure.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Profile information not found!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.get('/get_by_id/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    if ( req.params.id == 1 ) {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(profileBasic));

    } else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: false, 
            message: "Profile not found"
        }));
    }

});

/**
 * @swagger
 * /profile/basic:
 *   put:
 *      summary: Update Profile
 *      tags: [Profile Settings]
 *      description: Update Profile Basic Information
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Profile'
 *      responses:
 *          '200':
 *              description: Profile basic information updated successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Profile'
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.put('/basic', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.body));

});

module.exports = router;