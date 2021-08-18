var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../configs/passport')(passport);

/**
 * @swagger
 * tags:
 *   name: Upload Image
 */

/**
 * @swagger
 * /image/upload:
 *   post:
 *      summary: Upload Image
 *      tags: [Upload Image]
 *      description: Upload image for profile, project, team, etc.
 *      security:
 *          - jwt: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/octet-stream:
 *                  schema: 
 *                      type: string
 *                      format: binary
 *      responses:
 *          '200':
 *              description: File uploaded successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: File ID
 *                              file_location:
 *                                  type: string
 *                                  description: Uploaded file location
 *                          example: 
 *                              id: 1
 *                              file_location: "../drive/file1.jpg"
 *          '404':
 *              description: Login failure.
 *              content:
 *                  application/json:
 *                      example:
 *                          { "status": false, "message": "Failed to upload the file" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.post('/upload', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        id: 1,
        file_location: "../drive/file_abc.jpg"
    }));

});

/**
 * @swagger
 *  /image/delete/{id}:
 *   delete:
 *      summary: Delete Image
 *      tags: [Upload Image]
 *      description: Delete an Existing File
 *      security:
 *          - jwt: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Image ID 
 *      responses:
 *          '200':
 *              content:
 *                  application/json:
 *                      example: 
 *                          { "status": true, "message": "File deleted successfully" }
 *          '500':
 *              description: Invalid Request.
 *              content:
 *                  application/json:
 *                       example:
 *                          { "status": false, "message": "Something went wrong!! Please try again later" }
 */
 router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: true,
        message: "File deleted successfully"
    }));

});

module.exports = router;