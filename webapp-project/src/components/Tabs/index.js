import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const navData = [
  {id: 'home', name: '首页', icon: 'home', path: '/home' },
  {id: 'order', name: '订单', icon: 'order', path: '/order' }
];

export default function Tabs() {
  return (
    <nav className="tab-bar">
    {
      navData.map(item=>(
        <NavLink key={item.id} to={item.path} className="tab-item">
          <img src={`/images/${item.icon}.png`} alt=""/>
          <span>{item.name}</span>
        </NavLink>
      ))
    }
    </nav>
  )
}
