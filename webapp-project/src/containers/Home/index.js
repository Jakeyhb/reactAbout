import React from 'react'
import './style.css'
import One from './children/One'
import Two from './children/Two'
import Three from './children/Three'
import Dake from './children/Daka'
import apilist from '../../utils/url'
import Banner from './children/Banner'
import requesLD from '../../utils/request'
import LazyLoad from 'react-lazyload';


import 'whatwg-fetch'


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: [],
      dakaList: [],
      bannerList: []
    }
  }

  render() {
    const { showList, dakaList, bannerList } = this.state;
    return (

      <div className="page">
        {/* !!!: 懒加载 */}
        <LazyLoad scrollContainer='.page' scroll={true} >
          <One />
          <Two />
          <Banner value={bannerList} />
          <Dake dakadata={dakaList} />

          <Three showdata={showList} />
        </LazyLoad>

      </div>

    )
  }
  async componentDidMount() {
    /* 返回的数据也是属于异步的，用async处理一下 */
    const DkListData = await requesLD.requestListData(apilist.getDkList)
    const YcListData = await requesLD.requestListData(apilist.getYcList)
    const bannerList = await requesLD.requestListData(apilist.getBannerList)

    this.setState({
      showList: YcListData,
      dakaList: DkListData,
      bannerList: bannerList
    });
  }


}
