require("dotenv").config();

const express = require('express');
const path = require('path');
const cors = require('cors');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// Load the http module to create an http server.
//const http = require('http');
let auth = require("./helpers/auth");

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const baseConfig = require('./configs/base_location');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: '4D I DID System',
        version: '1.0.0',
        description: 'Demonstrating various RESTful APIs in I DID system',
    },
    host: '/',
    basePath: '/',
    components: {
      securitySchemes: {
        jwt: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT'
        }
      }
    },
  },
  // path to the API docs
  apis: ['./routes/*.js', './routes/*/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Load the custom routes
let signup = require('./routes/users/signup');
let signin = require('./routes/users/signin');

let userRole = require('./routes/role');
let roleWisePrivileges = require('./routes/privilege');

let uploadFile = require('./routes/upload_image');

let generalInformation = require('./routes/general_information');
let socialNetwork = require('./routes/social_network');
let award = require('./routes/award');

let profileBasic = require('./routes/profile/basic');
let userJobExperiences = require('./routes/profile/job_experiences');
let userSocialNetworks = require('./routes/profile/social_networks');
let addNewEmail = require('./routes/profile/add_new_email');
let updateUserEmail = require('./routes/profile/change_email');
let updateUserPassword = require('./routes/profile/change_password');
let updateUserId = require('./routes/profile/change_id');
let deactivateUser = require('./routes/profile/deactivate_account');

let projectClients = require('./routes/project/clients');
let projectBasic = require('./routes/project/basic');
let projectWiseComments = require('./routes/project/comments');

let teamBasic = require('./routes/team/basic');
let teamProjects = require('./routes/team/team_wise_projects');
let relatedTeams = require('./routes/team/related_teams')
let followedTeams = require('./routes/team/followed_teams');
let teamWiseSocialLinks = require('./routes/team/social_networks');
let teamAwards = require('./routes/team/team_awards');

// CORS middleware
app.use(cors());


//app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const db = require("./models");

// db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Redirect to the specific route file on demand
app.use('/', signup);
app.use('/', signin);

app.use('/roles', userRole);
app.use('/privileges', roleWisePrivileges);

app.use('/image', uploadFile);

app.use('/general_information', generalInformation);
app.use('/social_network', socialNetwork);
app.use('/award', award);

app.use('/profile', profileBasic);
app.use('/profile', userJobExperiences);
app.use('/profile', userSocialNetworks);
app.use('/profile', addNewEmail);
app.use('/profile', updateUserEmail);
app.use('/profile', updateUserPassword);
app.use('/profile', updateUserId);
app.use('/profile', deactivateUser);

app.use('/project', projectClients);
app.use('/project', projectBasic);
app.use('/project', projectWiseComments);

app.use('/team', teamBasic);
app.use('/team', teamProjects);
app.use('/team', relatedTeams);
app.use('/team', followedTeams);
app.use('/team', teamWiseSocialLinks);
app.use('/team', teamAwards);

module.exports = app;