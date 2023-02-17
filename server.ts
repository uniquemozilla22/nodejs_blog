import express from "express";

// Using the environment variables
require("dotenv").config();

// Extracting the application from express
const app = express();

// Routes Decleration
app.get("/", (req, res) => {
  res.send("This is a test web page!");
});

// Listening on the server with the environmant variables
app.listen(process.env.SERVER_PORT_NUMBER || 6000, () => {
  console.log("The application is listening on port 3000!");
});
