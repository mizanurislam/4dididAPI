var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');
const pathToKey = path.join(__dirname, '../..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const User = require('../../sample_data/user');

let jwt = require("jsonwebtoken");
let auth = require('../../helpers/auth');

/**
 * @swagger
 * tags:
 *   name: Signin
 */

/**
 * @swagger
 *  /login:
 *      post:
 *          summary: User Authentication
 *          tags: [Signin]
 *          description: Login with a valid Email Address and Password
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: Email Address
 *                              password:
 *                                  type: string
 *                                  description: Login Password
 *                          example: 
 *                              email: "4d_san@4digit.jp"
 *                              password: "4digit123" 
 *          responses:
 *              '200':
 *                  description: Successful login.
 *                  content:
 *                      application/json:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *                                  description: Long JWT String
 *                              expires_in:
 *                                  type: integer
 *                                  format: "int64"
 *                                  description: Timestamp of the token expiration time
 *                              scope:
 *                                  type: string
 *                                  enum: [admin, team_admin, team_member]
 *                                  description: User Role
 *                          example: 
 *                              token: "X.XX.XXX"
 *                              expires_in: 1624586395006
 *                              password: "team_admin"
 *              '404':
 *                  description: Login failure.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Invalid email address or password!" }
 *              '500':
 *                  description: Invalid Request.
 *                  content:
 *                      application/json:
 *                          example:
 *                              { "status": false, "message": "Something went wrong!! Please try again later" }
 */
router.post('/login', function (req, res, next) {

    let reqBody = req.body;
    //console.log("REQUEST BODY: ", JSON.stringify(reqBody, null, 2));
    
    let userMail = reqBody.email;
    let userPassword = reqBody.password;

    var response;

    if ( userMail == User.email && userPassword == User.password ) {

        let role = User.role;

        var tokenString = auth.issueToken(userMail, role);

        jwt.verify(tokenString, PUB_KEY, function(verificationError, decoded) {

            if ( verificationError ) {
                response = { 
                    status: false, 
                    message: "Invalid token" 
                };
                res.writeHead(500, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(response));
            }

            response = {
                token: tokenString,
                expires_in: decoded.exp,
                scope: role
            };
            
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(response));
            
        });

    } else {

        response = { 
            status: false, 
            message: "Invalid email address or password!" 
        };
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify(response));
    }

});   

module.exports = router;