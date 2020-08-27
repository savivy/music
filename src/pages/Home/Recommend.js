import React, { Component } from 'react'
import SongList from '../../componts/SongList'
export default class Recommend extends Component {
  constructor() {
    super()
    this.state = {
      rMusic: [],
      nMusic: [],
     
    }
  }
  componentDidMount() {
     this.$http.get('/personalized?limit=6').then((res)=>{
      this.setState({
        rMusic: res.data.result
      })
     })
     this.$http.get('/personalized/newsong').then((res) => {
          console.log(res.data.result);
          
      this.setState({
        nMusic: res.data.result,
     
      })
    })

  }
  render() {
    let { rMusic ,nMusic} = this.state
  
    return (
      <div className="recommend">
        <div className="title">
          <h2>推荐歌单</h2>
          <ul>
            {
              rMusic.map((item, index) => {
                return <li key={index}>
                  <div>
                    <img src={item.picUrl} alt="" />
                  </div>
                  <p>{item.name}</p>
                </li>
              })
            }
          </ul>
        </div>
        <div className="lastest">
          <h2>最新音乐</h2>
            <SongList SongList={nMusic}></SongList>
        </div>
      </div>
    )
  }
}
