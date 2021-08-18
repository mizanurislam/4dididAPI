const app = require('./app.js');

// Server
app.listen(process.env.PORT || 3000, () => console.log("API Server is running on 3000"));