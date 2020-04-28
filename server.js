const express = require("express");

const app = express();

//Test router

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the contact keeping" });
});

//define router

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
