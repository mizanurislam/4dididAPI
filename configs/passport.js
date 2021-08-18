const fs = require('fs');
const path = require('path');
const User = require('../sample_data/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload, done) => {
    
    if ( payload.sub == User.email ) {

        return done(null, {
            "id": User.id,
            "email": User.email
        });

    } else {
        return done(null, false);
    }

}); 

module.exports = (passport) => {
    passport.use(strategy);
}