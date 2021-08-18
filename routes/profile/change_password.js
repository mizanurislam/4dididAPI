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
 *  /profile/change_password:
 *      put:
 *          summary: Change Password
 *          tags: [Profile Settings]
 *          description: Update password of a user
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
 *                              old_password:
 *                                  type: string
 *                                  description: Current Password
 *                              new_password:
 *                                  type: string
 *                                  description: New Password
 *                          example: 
 *                              id: 1
 *                              old_password: "4dididold123"
 *                              new_password: "4dididnew234"
 *          responses:
 *              '200':
 *                  description: Password changed successfully.
 *                  content:
 *                      application/json:
 *                          { "status": true, "message": "Password changed successfully" }
 *              '404':
 *                  description: Failed to change password.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Failed to change password!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.put('/change_password', function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        status: true, 
        message: "Password changed successfully"
    }));

});   

module.exports = router;