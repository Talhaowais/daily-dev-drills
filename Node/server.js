const express = require("express");

const app = express();

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// server port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});