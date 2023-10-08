const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    ownner: "https://github.com/Ryanhustler420",
  });
});

app.get("/v2", (req, res) => {
  res.json({
    ownner: "https://gouravgupta.com",
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
