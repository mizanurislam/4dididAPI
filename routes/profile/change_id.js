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
 *  /profile/change_member_id:
 *      put:
 *          summary: Change ID
 *          tags: [Profile Settings]
 *          description: Update user-id
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
 *                              member_id:
 *                                  type: string
 *                                  description: Member ID to Change
 *                          example: 
 *                              id: 1
 *                              member_id: "4DIDID234"
 *          responses:
 *              '200':
 *                  description: ID changed successfully.
 *                  content:
 *                      application/json:
 *                          { "status": true, "message": "ID changed successfully" }
 *              '404':
 *                  description: Failed to change id.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Failed to change id!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.put('/change_member_id', function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        status: true, 
        message: "ID changed successfully"
    }));

});   

module.exports = router;