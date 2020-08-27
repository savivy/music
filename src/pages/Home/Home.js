import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import MapRoute from '../../routes/MaoRoute'
import '../../assets/home.css'
import '../../assets/recommend.css'
export default class Home extends Component {
 
  render() {
  
    
    return (
      <div className="home">
       <div className="top">
           <header></header>
            <div className="nav">
            <NavLink to='/home/recommend'>推荐</NavLink>
            <NavLink to='/home/hot'>热门</NavLink>
            <NavLink to='/home/search'>搜索</NavLink>
            </div>
       </div>
        
         <div className="main">
            <MapRoute routes={this.props.routes}>

            </MapRoute>
         </div>
      </div>
    )
  }
}
