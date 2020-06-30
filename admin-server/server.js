const express = require('express')
const chalk = require('chalk')
const mongoose = require('mongoose')
const User = require('./model/User');

// 连接数据库
mongoose.connect("mongodb://116.62.207.144:27917/adminDb", {
  useNewUrlParser: true, useUnifiedTopology: true
}, (error) => {
  if (error) {
    console.log("数据库连接失败")

  } else {
    console.log(chalk.green("数据库连接成功"))
    // 第一次，手动插入一条管理员账号
    // new User({
    //   username: '3624',
    //   password: 123456,
    //   role: 'sale'
    // }).save();
  }
})
// 启动服务
const app = express()
app.listen(9000, (error) => {
  if (error) {
    console.log("服务器启动失败，请检查")
  } else {
    console.log("服务器启动成功")
  }
})