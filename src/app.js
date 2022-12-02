const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("My blog");
});

app.use(express.static("markdown"));

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
