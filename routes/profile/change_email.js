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
 *  /profile/change_email:
 *      put:
 *          summary: Change Email Address
 *          tags: [Profile Settings]
 *          description: Update email address of an existing user
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
 *                                  description: New Email Address
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
 *                                  description: New Email Address
 *                          example: 
 *                              id: 1
 *                              email: "4d_san_new@4digit.jp"
 *              '404':
 *                  description: New email creation failure.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Failed to update the email address!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.put('/change_email', function (req, res, next) {

    let reqBody = req.body;
    
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        id: reqBody.id,
        email: reqBody.email
    }));

});   

module.exports = router;