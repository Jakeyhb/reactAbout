import React from "react";
import { NavLink, Link } from 'react-router-dom'
export default class One extends React.Component {
  render() {
    const datelist = {
      id: 1,
      path: '/CityList'
    }
    return (
      <section className="search-bar" >
        <Link key={datelist.id} to={datelist.path} >
          <div className="city scroll-view-stats">
            <img src="/images/weizhi.png" className="icon" />
            <span className="city-name" onClick={this.getprovinceList}> 北京 </span>
            <img
              src="https://static.meituan.net/bs/myfe/wxapp/file/images/show/common/arrow-down.png"
              className="arrow-icon-down"
            />
          </div>
        </Link>
        <Link to="/search" className="search-content scroll-view-stats" >
          <div className="search-content scroll-view-stats">
            <img
              src="https://static.meituan.net/bs/myfe/wxapp/file/images/show/common/search-icon.png"
              className="search-icon"
            />
            <span>找明星、演出、场馆</span>
          </div>
        </Link>
      </section>
    );


  }
  getprovinceList = () => {
    console.log(1)
  }

}
