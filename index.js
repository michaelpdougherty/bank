const app = require("express")();

app.get("/", (req, res) => {
  res.send({
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "balance": 100.00
  });
});

app.listen(8000, () => {
  console.log("listening on port 8000...");
});
