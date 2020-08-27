import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class MaoRoute extends Component {
  render() {
    return (
      <Switch>
          {
              this.props.routes.map((item,index)=>{
                  return (
                      item.redirect ? (
                          <Redirect key={item.path} path={item.path} to={item.redirect}></Redirect>
                      ):(
                        <Route
                         key={item.path} 
                         path={item.path} 
                        //  component={item.component}
                        render={(props)=>{
                          // console.log(props);
                            return item.auth ? (
                               localStorage.getItem('uname') ?( <item.component {...props} routes={item.children}/>):(
                                 <Redirect to='/login'></Redirect>
                               )
                            ):(
                              <item.component {...props} routes={item.children}/>
                            )
                        }}

                        
                        ></Route>

                      )
                  )
              })
          }
      </Switch>
    )
  }
}
