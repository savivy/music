import React, { Component } from 'react'
import '../../assets/login.css'
import '../../assets/public.css'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
            <h1>登录页面</h1>
           <input type="text"  placeholder='username'/>
           <input type="text" placeholder='password'/>
           <button type="">登录</button>
      </div>
    )
  }
}
