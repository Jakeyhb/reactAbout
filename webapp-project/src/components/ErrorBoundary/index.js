import React, { Component } from 'react'
import './style.css'

// 错误捕获
export default class ErrorBoundary extends Component {
  state = {
    isError: false
  }
  render() {
    return this.state.isError ? (
      <div>
        <h1>出错了，请重试</h1>
      </div>
    ) : this.props.children;
  }
  componentDidCatch(error){
    // 提醒用户出错了
    this.setState({isError: true});
    // 收集错误信息(用户账号，用户设备，错误信息)
  }
}
