const express = require("express");
var bodyParser = require('body-parser');

const cors = require('cors');
// const chat = require("./chat");

const app = express();
app.use(bodyParser());

app.use(cors());
app.use('/user', require('./user'));

app.get("/", (req, res) => {
  res.send("hello world");
});


// app.post("/chat", async (req, res) => {
//   console.log(req.body);
//   const messages = req.body.messages;

//   try {
//     const result = await chat(messages);
//     res.send({
//         code: 0,
//         content: result.replace('bot:','').replace('Assistant:', '').replace('assistant:', '')
//     });
//   } catch (error) {
//     res.send({
//         code:-1,
//         msg: error,
//     });
//   }
// });

app.listen(3000, () => {});

