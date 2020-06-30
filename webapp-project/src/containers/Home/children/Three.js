import React from 'react'

import { LazyLoad } from 'react-lazyload';
export default function Three({ showdata }) {

  return (

    <React.Fragment>


      <div className="title">为你推荐</div>

      <div className="container">

        {
          showdata.map(item => (


            <div className="card" key={item.id} >

              <img src={item.posterUrl} className="card-img-top" />

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.showTimeRange}</p>
                <p className='pice'>¥{item.priceRange}起</p>
              </div>
            </div>

          ))
        }

      </div>


    </React.Fragment>

  )

}


