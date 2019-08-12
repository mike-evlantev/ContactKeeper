const express = require("express");
const connectDb = require("./config/db");
const app = express();

//Connect Database
connectDb();

app.get("/", (req, res) => res.json({ msg: "ContactKeeper API" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
