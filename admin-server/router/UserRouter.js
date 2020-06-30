const { Router } = require('express');
const User = require('../model/User')
const JWT = require('jsonwebtoken');
const user = require('../model/User');
const router = new Router();

//登录

router.post('/login', async (req, res) => {
  // 获取请求参数
  const { username, passworld } = req.fetchData;
  if (username && passworld) {
    const result = await User.findOne(username, passworld)
    if (!result) {
      res.json({
        code: -2,
        message: '用户名或密码错误'
      })

    } else {
      const info = {
        id: result._id,
        username: result.username,
        role: result.role,
        isAdmin: result.isAdmin
      };
      // 返回给客户端
      res.json({
        code: 0,
        message: '登录成功',
        data: {
          ...info,
        }
      });

    }

  } else {
    res.json({
      code: -1,
      message: '用户名或密码不能为空'
    })
  }

})

