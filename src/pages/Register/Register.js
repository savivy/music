import React, { Component } from 'react'
import '../../assets/register.css'
export default class Register extends Component {
  render() {
    return (
      <div className="register">
          <h1>注册页面</h1>
        <input type="text"  placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button type="">注册</button>
     </div>
    )
  }
}
