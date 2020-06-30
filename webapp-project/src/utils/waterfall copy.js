import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Axios from '_axios@0.19.0@axios';
class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],//整体的数据
      leftData: [],//左边的数据
      rightData: []//右边的数据
    }
  }
  getHW(data) {
    let heightDate = [0, 0];//接收累计高度的容器数组
    let rightData = []//渲染右侧盒子的数组
    let leftData = []//渲染左侧盒子的数组
    data.forEach(item => {
      let height = item.src.replace('http://dummyimage.com/', '').substr(0, 7).split('x')[1] * 1;//对url地址进行一个截取，拿到高度
      let minNum = Math.min.apply(null, heightDate)// 从heighetData筛选最小项
      let minIndex = heightDate.indexOf(minNum);// 获取 最小项的小标 准备开始进行累加
      heightDate[minIndex] = heightDate[minIndex] + height;//从 heightData 中找到最小的项后进行累加， 
      if (minIndex === 0) {//[0]加到left [1]加到 right
        leftData.push(item)
      } else {
        rightData.push(item)
      }
    })
    this.setState({ leftData, rightData });//重新set state
  }
  render() {
    let { leftData, rightData } = this.state;
    console.log(leftData, rightData)
    return (
      <Fragment>
        <div className='left'>
          {
            leftData && leftData.map((item, index) => {
              return <img src={item.src} alt={index} key={index} />
            })
          }
        </div>
        <div className='right'>
          {
            rightData && rightData.map((item, index) => {
              return <img src={item.src} alt={index} key={index} />
            })
          }
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    Axios.get('/api/data').then(res => {
      this.props.dispatch({
        type: 'SET_DATA',
        data: res.data.data
      })
      this.getHW(this.props.data) //调用
    })
  }
}

export default connect(
  (state) => {
    return {
      data: state.data,
    }
  }
)(Waterfall);