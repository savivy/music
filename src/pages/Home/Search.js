import React, { Component } from 'react'
import '../../assets/search.css'
export default class Search extends Component {
  constructor(){
    super()
    this.state={
      sList:[]
    }
  }
  componentDidMount(){
    this.$http.get('/search/hot').then(res=>{
      console.log(res);
      
      this.setState({
        sList:res.data.result.hots
      })
    })
  }
  render() {
    let {sList}=this.state
    return (
      <div className="search">
         <form>
            <div className="inputBox">
               <input type="text" placeholder="搜索歌曲、歌手、音乐"/>
            </div>
         </form>
         <div className="main">
            <div className="content">
               <h3>热门搜索</h3>
               <ul className="list">
                  {
                    sList.map((item,index)=>{
                        return  <li className="sec" key={index}>
                        <a href="#" className="link">{item.first}</a>
                      </li>
                    })
                  }
               </ul>
            </div>
         </div>
      </div>
    )
  }
}
