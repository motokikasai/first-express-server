# 🤖 Express 101

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
