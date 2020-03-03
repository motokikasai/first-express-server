const express = require("express");
const app = express();

app.use(express.json());

const students = [
  {
    name: "Adam",
    lastname: "Johnson",
    age: 33,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Paul",
    lastname: "Lewis",
    age: 18,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Edger",
    lastname: "Poe",
    age: 29,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "Douglas",
    lastname: "Arthur",
    age: 25,
    class: "FBW101",
    location: "BER"
  },
  {
    name: "James",
    lastname: "Bond",
    age: 41,
    class: "FBW101",
    location: "BER"
  }
  // ... and many more :)
];

/** -----------------------------------------------------
 * SETTING UP THE SERVER
 * -----------------------------------------------------*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
