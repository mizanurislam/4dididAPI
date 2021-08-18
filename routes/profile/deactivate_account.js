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
 *  /profile/deactivate:
 *      put:
 *          summary: Account Deactivation
 *          tags: [Profile Settings]
 *          description: Disable user account
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
 *                              active:
 *                                  type: integer
 *                                  description: User Activation Status
 *                          example: 
 *                              id: 3
 *                              active: 0
 *          responses:
 *              '200':
 *                  description: Account deactivated successfully.
 *                  content:
 *                      application/json:
 *                          { "status": true, "message": "Account deactivated successfully" }
 *              '404':
 *                  description: Failed to disable account.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Failed to disable account!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.put('/deactivate', function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        status: true, 
        message: "Account deactivated successfully"
    }));

});   

module.exports = router;