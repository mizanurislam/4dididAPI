var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Signup
 */

/**
 * @swagger
 *  /check-user-email:
 *      post:
 *          summary: Lookup Email Address
 *          tags: [Signup]
 *          description: System checks whether the given email address is already being used or not
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                           type: object
 *                           properties:
 *                              user_email:
 *                                  type: string
 *                                  description: Email Address
 *                           example: 
 *                              user_email: "4d_san@4digit.jp"
 *          responses:
 *              '200':
 *                  description: Non-used email address found.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": true, "message": "Email Address 4d_san@4digit.jp is available" }
 *              '404':
 *                  description: Used email address identified.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Email Address 4d_san@4digit.jp is not available!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.post('/check-user-email', function (req, res, next) {

    let reqBody = req.body;
    //console.log("REQUEST BODY: ", JSON.stringify(reqBody, null, 2));

    let userMail = reqBody.user_email;
    let response = {
        status: false,
        message: ''
    };

    if ( userMail != '4d_san@4digit.jp' ) {

        response.status = true;
        response.message = "Email Address " + userMail + " is available";
        res.writeHead(200, { "Content-Type": "application/json" });

    } else {

        response.message = "Email Address " + userMail + " is not available!!";
        res.writeHead(404, { "Content-Type": "application/json" });
    }

    res.end(JSON.stringify(response));

});

/**
 * @swagger
 * /user-registration:
 *   post:
 *      summary: Account Settings
 *      tags: [Signup]
 *      description: Setting account with ID and Password, along with Email Address
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:                      
 *                      type: object
 *                      properties:
 *                          user_email:
 *                              type: string
 *                              description: Email Address
 *                          user_id:
 *                              type: string
 *                              minLength: 8
 *                              maxLength: 15
 *                              description: User ID
 *                          Password:
 *                              type: string
 *                              minLength: 8
 *                              maxLength: 15
 *                              description: Login Password
 *          example: 
 *              user_email: "4d_san@4digit.jp"
 *              user_id: "4D0007IDID"
 *              password: "4digit123" 
 *      responses:
 *          '200':
 *              description: Successful registration.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": true, "message": "User registration completed successfully." }
 *          '404':
 *              description: Registration failure.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Failed to register the user!" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.post('/user-registration', function (req, res, next) {

    let reqBody = req.body;
    //console.log("REQUEST BODY: ", JSON.stringify(reqBody, null, 2));

    let userMail = reqBody.user_email;
    let userId = reqBody.user_id;
    let userPassword = reqBody.password;

    let response = {
        status: true,
        message: 'User registration completed successfully.'
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));

});   

module.exports = router;