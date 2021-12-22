const express = require('express');

const app = express();

app.use(express.json())

app.get('/api/todos', (req, res) => {
  const todos = [
    {id: 1, content: "밥먹기", deadline: "2021-12-30-12:00"},
    {id: 2, content: "공부하기", deadline: "2031-12-31-12:00"},
    {id: 3, content: "돈벌기", deadline: "2121-12-30-00:00"}
  ];

  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  console.log(req.body);
  res.status(200).end();
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));