import React, { Component } from 'react'
import '../../assets/hot.css'
export default class Hot extends Component {
  constructor() {
    super()
    this.state = {
      hRank: [],
      playList: {},
      num:1
    }
  }
  componentDidMount() {
    this.$http.get('/top/list?idx=1').then((res) => {
      // console.log(res);
      this.setState({
        playList: res.data.playlist,
        hRank: res.data.playlist.tracks
      })
    })
  }
  render() {
    let { playList, hRank ,num} = this.state

  console.log(hRank);
  
    return (
      <div className="hot">
        <div className="banner">
          <img src={playList.coverImgUrl} alt="" />
        </div>
        <ul>
             {
               hRank.map((item,index)=>{
                    return  <li key={index}>
                    <a href="#">
                      <div className="num">
                       {num<10?"0"+(num++):num++}
                            
                        </div>
                      <div className="title">
                        <div className="mTitle">
                           <span>{item.name}</span>
                             <span className="alia">{item.alia.length>0?"("+item.alia+")":""}</span>
                        </div>
                        <div className="artist">
                          {
                            item.ar.map((val,i)=>{
                              return <span key={i}>
                                  {item.ar.length>1?val.name+"/":val.name}
                              </span>
                            })
                          }
                        </div>
                      </div>
                      <div className="player">
                         
                      </div>
                    </a>
                  </li>
               })
             }
        </ul>
      </div>

    )
  }
}
