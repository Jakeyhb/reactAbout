import React from 'react';


import { Tag } from 'antd';
import 'antd/dist/antd.css';

function App() {
  function log(e) {
    // debugger

    const id = e.target.getAttribute("vaule")
    console.log(id)
    console.log(this.refs)
  }
  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  return (


    <>
      <Tag>Tag 1</Tag>

      <Tag value='1' key="1" closable onClose={log} ref='1'>
        Tag 2
    </Tag>

      <Tag closable onClose={preventDefault}>
        Prevent Default
    </Tag>

    </>
  )



}

export default App;
