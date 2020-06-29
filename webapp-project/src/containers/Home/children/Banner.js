import React, { Component } from 'react'
import Swiper from "swiper"
// import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
import "swiper/css/swiper.css"
import '../style.css'
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newlist: [{
        "imgsrc": "https://img.meituan.net/kylisean/11449127480a6a0eb753fd840329d5db97936.jpg"
      },
      {
        "imgsrc": "https://img.meituan.net/kylisean/542dea35b97e02305e743e0973dd24e547399.jpg"
      },
      {
        "imgsrc": "https://img.meituan.net/kylisean/cf11bbd44b603b0ec5f0af028610f39772661.jpg"
      },
      {
        "imgsrc": "https://img.meituan.net/kylisean/89c17ae261a64560b6f779fb2a1d6f3793283.jpg"
      },
      {
        "imgsrc": "https://img.meituan.net/kylisean/3d0dedd5ae58f624b11af0004c81c96945033.jpg"
      }]
    }
  }


  componentDidMount() {
    new Swiper('.swiper-container', {

      centeredSlides: true,
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },

    })
  }
  render() {
    return (
      <div className='new'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              this.state.newlist.map((item, index) => (
                <div key={index} className="swiper-slide">
                  <img className="banner-img" src={item.imgsrc} />
                </div>
              ))
            }

          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    )
  }

  requestListData = async (url) => {
    const path1 = '/bannerimg';
    const result = await fetch(path1)
    console.log(result)

  }
}
