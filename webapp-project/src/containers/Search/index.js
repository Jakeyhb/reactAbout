import React, { Component } from "react";

import SearchBox from "./components/SearchBox";

export default class Search extends Component {
  render() {
    const {
      inputText,
      relatedKeywords
    } = this.props;
    return (
      <div>
        <h1>搜索</h1>
      </div>
    );
  }

}
