const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let total_calls = 0;

app.get("/", (req, res) => {
  total_calls++;
  res.json({
    ownner: "https://github.com/Ryanhustler420",
    total_calls
  });
});

app.get("/v2", (req, res) => {
  total_calls++;
  res.json({
    ownner: "https://gouravgupta.com",
    total_calls
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
