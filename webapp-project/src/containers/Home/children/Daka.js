import React, { Component } from "react";
import requesLD from '../../../utils/request'
// import { ReactDOM } from 'react-dom';
import apilist from '../../../utils/url'
export default class Daka extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dakaList: []
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="title-wrapper pb0">
          <div className="title2">大咖新动态</div>
        </div>
        <section className="artist-list">
          {this.props.dakadata.map((item) => (
            <div key={item.celebrityId} className="icon-item scroll-view-stats">
              <div className="content-wrapper">
                <img src={item.headUrl} className="img-wrap" />
              </div>
              <div className="icon-text">{item.celebrityName}</div>
              <div className="recommend-wrapper">
                <div className="recommend">{item.recommendTag}</div>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment >
    );

  }

}
