const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require("./services/passport");

// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
