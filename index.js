const Joi = require("@hapi/joi");
const express = require("express");
const app = express();

app.use(express.json());

const students = [
  {
    name: "Adam",
    lastname: "Johnson",
    id: 1,
    age: 33,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Paul",
    lastname: "Lewis",
    id: 2,
    age: 18,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Edger",
    lastname: "Poe",
    id: 3,
    age: 29,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Douglas",
    lastname: "Arthur",
    id: 4,
    age: 25,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "James",
    lastname: "Bond",
    id: 5,
    age: 41,
    class: "FBW101",
    location: "BER"
  }
];

/** -----------------------------------------------------
 * GET method
 * -----------------------------------------------------*/

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/students", (req, res) => {
  res.send(students);
});

// app.get("/api/students", (req, res) => {
//   const student = students.find(c => c.id === parseInt(req.params.id));
// });

/** -----------------------------------------------------
 * SETTING UP THE SERVER
 * -----------------------------------------------------*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
