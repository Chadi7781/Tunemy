const express = require("express");

//graphql
//const graphqlSchema = require('./model/graphq.model');
//const graphqlHTTP = require('express-graphql').graphqlHTTP;
const morgan = require("morgan");

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
const http = require("http");
const path = require("path");

// Config dotev
require("dotenv").config({
  path: "./config/config.env",
});
const port = process.env.PORT;

//Connect to DB
connectDB();

/*
//Add Graphql endpoint to the server
app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        graphiql: true
    })
)
*/

app.use(express.static(path.join(__dirname, "public")));

// Dev Logginf Middleware
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
  //Morgan give information about each request
}
// Load routes

const authRoute = require("./routes/auth.route");
const { schema } = require("./model/user.modal");

app.enable("trust proxy");
app.use(cors());
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use("/api/user", authRoute);

app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));
