import React, { Component } from 'react'
import '../login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Card } from 'antd';


export default class LoginFrom extends Component {

  render() {
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    return (


      <div className="login-con">
        {/* !!!: alert <div className="login-header">欢迎登录</div>*/}
        <Card bordered={false} style={{ backgroundColor: "aliceblue" }} title="欢迎登录">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: false,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入账户',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账户" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                忘记密码
      </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
      </Button>
            </Form.Item>
          </Form></Card>

        <p class="login-tip">欢迎来到后台系统</p>

      </div >
    )
  }
}
