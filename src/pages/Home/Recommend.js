import React, { Component } from 'react'

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
          console.log(res.data.result.song);
          
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
          <ul>
              {
                nMusic.map((item,index)=>{
                  return <li key={index}>
                        <div>
                        <h3>{item.name}</h3>
                     <div className="artists ">
                       <b>*</b>
                       { item.song.artists.map((val,i)=>{
                            return val.name
                        }).join(" / ")}
                        <s>---</s><i>{item.name}</i>
                     </div>
                        </div>
                        <div className="palyer">
                           
                        </div>
                  </li>
                })
              }
          </ul>
        </div>
      </div>
    )
  }
}
