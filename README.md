# 🤖 Express 101

Your tasks for today:

1. 👀 Review last week

   - `http`
   - how to create a server
   - http methods / verbs

2. 📺 Watch the following tutorial

   - [Express.js by Mosh](https://www.youtube.com/watch?v=pKd0Rpw7O48)
   - But here are the rules:
     - type everything (code) that you see on screen
     - stop often and experiment (use branches for those)

3. 🖥 Create a DCI-Students Server

   - create an express server to manage DCI Students

4. 💃 Have fun

## 🔥DCI-Students Server 🔥

Create a server with the following endpoint:

- `/api/students`

Follow the structure from the tutorial, we want to support the following methods on our endpoint:

- GET (all, individual)
- PUT (individual)
- DELETE (individual)
- POST (individual)

Example response

```js
[
  {
    name: "Rupert",
    lastname: "Jalili",
    age: 30,
    class: "FBW101",
    location: "BER"
  }
  // ... and many more :)
];
```

### Extra

- create a query parameter for `GET /api/students` to filter for age ranges
