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
    location: "Berlin"
  },
  {
    name: "Paul",
    lastname: "Lewis",
    id: 2,
    age: 18,
    class: "FBW101",
    location: "Stuttgart"
  },
  {
    name: "Edger",
    lastname: "Poe",
    id: 3,
    age: 33,
    class: "FBW101",
    location: "Dresden"
  },
  {
    name: "Douglas",
    lastname: "Arthur",
    id: 4,
    age: 25,
    class: "FBW101",
    location: "Hanover"
  },
  {
    name: "James",
    lastname: "Bond",
    id: 5,
    age: 23,
    class: "FBW101",
    location: "Berlin"
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

function infoGetter(prop) {
  app.get(`/api/students/:${prop}`, (req, res) => {
    const student = students.filter(
      c => c[prop].toString() === req.params[prop]
    );
    if (student.length === 0)
      return res
        .status(404)
        .send(`The student with the given "${prop}" is not found`);
    res.send(student);
  });
}

infoGetter("location");
// example of parameters: name, lastname, age, id, class, location

/** -----------------------------------------------------
 * SETTING UP THE SERVER
 * -----------------------------------------------------*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
