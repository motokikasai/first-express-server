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
    class: "FBW102",
    location: "Stuttgart"
  },
  {
    name: "Edger",
    lastname: "Poe",
    id: 3,
    age: 33,
    class: "FBW103",
    location: "Dresden"
  },
  {
    name: "Douglas",
    lastname: "Arthur",
    id: 4,
    age: 25,
    class: "FBW104",
    location: "Hanover"
  },
  {
    name: "James",
    lastname: "Bond",
    id: 5,
    age: 23,
    class: "FBW105",
    location: "Berlin"
  }
];

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  lastname: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  age: Joi.number()
    .min(18)
    .required(),
  class: Joi.string(),
  location: Joi.string()
});

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
      stu => stu[prop].toString() === req.params[prop]
    );
    if (student.length === 0)
      return res
        .status(404)
        .send(`The student with the given '${prop}' is not found`);
    res.send(student);
  });
}

infoGetter("location");
// example of parameters: name, lastname, age, id, class, location

/** -----------------------------------------------------
 * POST method
 * -----------------------------------------------------*/

app.post("/api/students", (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) res.status(404).send(error.details[0].message);

  // Template of new student data to be added...
  const student = {
    name: req.body.name,
    lastname: req.body.lastname,
    id: students.length + 1,
    age: req.body.age,
    class: req.body.class,
    location: req.body.location
  };

  students.push(student);
  res.send(student);
});

/** -----------------------------------------------------
 * PUT method
 * -----------------------------------------------------*/

app.put(`/api/students/:id`, (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) res.status(404).send(error.details[0].message);

  const student = students.find(stu => stu.id === parseInt(req.params.id));
  if (!student)
    return res.status(404).send(`The student with the given ID is not found`);

  student.name = req.body.name;
  student.lastname = req.body.lastname;
  student.age = req.body.age;
  student.class = req.body.class;
  student.location = req.body.location;
  res.send(student);
});

/** -----------------------------------------------------
 * DELETE method
 * -----------------------------------------------------*/

app.delete("/api/students/:id", (req, res) => {
  const student = students.find(stu => stu.id === parseInt(req.params.id));
  if (!student)
    return res.status(404).send("The student with the given ID is not found");

  const index = students.indexOf(student);
  students.splice(index, 1);

  res.send(student);
});

/** -----------------------------------------------------
 * SETTING UP THE SERVER
 * -----------------------------------------------------*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
