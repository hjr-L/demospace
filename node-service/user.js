const express = require("express");
var bodyParser = require('body-parser');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('user');
});

router.post('/login', function (req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  if (username == 'admin' && password == 'admin') {
    res.send({
      code: 0,
      token: Math.random().toString(36).substr(2),
      content: '登录成功'
    });
  } else {
    res.send({
      code: -1,
      content: '登录失败'
    });
  }
});

module.exports = router;