const express = require("express");
const connectDb = require("./config/db");
const app = express();
const path = require("path");

//Connect Database
connectDb();

// Init middleware
app.use(express.json({ extended: false })); // Allows to accept data within a body of a request (req.body)

// TODO: Remove prior to deployment:
// app.get("/", (req, res) => res.json({ msg: "ContactKeeper API" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

// Server static (react) assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // when home page route is hit load index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  ); // look in currentDirectory/client/build/index.html
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// to run locally: `npm run dev`
// to run deploy: `git push heroku master`
