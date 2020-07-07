import React, { Component } from 'react'
import Head from './layout/Head'
import Sidebar from './layout/Sidebar'
import Context from './layout/Cont'
export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <Sidebar />
        <Context />
      </React.Fragment>
    )
  }
}
