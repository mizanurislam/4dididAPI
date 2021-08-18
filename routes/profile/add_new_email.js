var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../../configs/passport')(passport);

/**
 * @swagger
 * tags:
 *   name: Profile Settings
 */

/**
 * @swagger
 *  /profile/add_new_email:
 *      post:
 *          summary: Add New Email Address
 *          tags: [Profile Settings]
 *          description: Create a new email address of an existing user
 *          security:
 *              - jwt: []
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: User ID
 *                              email:
 *                                  type: string
 *                                  description: Email Address
 *                          example: 
 *                              id: 1
 *                              email: "4d_san_new@4digit.jp" 
 *          responses:
 *              '200':
 *                  description: New email created successfully.
 *                  content:
 *                      application/json:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: User ID
 *                              email:
 *                                  type: string
 *                                  description: Email Address
 *                          example: 
 *                              id: 1
 *                              email: "4d_san_new@4digit.jp"
 *              '404':
 *                  description: Email creation failure.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Failed to create the new email address!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.post('/add_new_email', function (req, res, next) {

    let reqBody = req.body;
    
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        id: reqBody.id,
        email: reqBody.email
    }));

});   

module.exports = router;