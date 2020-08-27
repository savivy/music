import React, { Component } from 'react'
import qs from 'querystring'
import '../../less/play.less'
export default class Play extends Component {
  constructor(){
    super()
    this.state={
      coverImg:'',
      bgStyle:{},
      lyric:[],
      timeArr:[],
      lyricArr:[],
      url:'',
      ind:0,
      flag:true,
      top:''
    }
  }
  componentDidMount(){
     let obj=qs.parse(this.props.location.search.slice(1))
     let id=obj.id
    this.$http.get('/song/detail?ids='+id).then(res=>{
      // console.log(res);
      
        this.setState({
          picUrl: res.data.songs[0].al.picUrl,
          bgStyle:{
            background:`url(${res.data.songs[0].al.picUrl}) no-repeat center center`,
            transform:"scale(1.5)",
            filter:"blur(20px)"
          }
        })
    })
    this.$http.get('/song/url?id='+id).then(res=>{
      this.setState({
          url:res.data.data[0].url
      })
    })
    this.$http.get('/lyric?id='+id).then(res=>{
      // console.log(res);
      this.setState({
           lyric:res.data.lrc.lyric
         
      },()=>{
         let arr=this.state.lyric.split(/\n/)
         console.log(arr);
         let lyricArr=[]
              let timeArr=[]
          arr.forEach((item,index)=>{
              let a=item.split(']')
              console.log(a);
              
              if(a[1]){
                lyricArr.push(a[1])
                let str=a[0].slice(1)
                timeArr.push(this.format(str))
              }
              
          })
          this.setState({
            lyricArr,
            timeArr
          })
       
         
      })
    })
  }
  format(str){
    let b=str.split(':')
    return parseInt(b[0])+parseFloat(b[1])
  }
  play(){
      if(this.audio.paused){
        this.audio.play()
        this.setState({
            flag:false
        })
      }else{
        this.audio.pause()
        this.setState({
          flag:true
      })
      }
  }
  update(){
      let current=this.audio.currentTime
      let {timeArr}=this.state
      let i=timeArr.findIndex((item,index)=>{
        return current>item&&current<timeArr[index+1]
      })
      if(i==-1){
        i=0
      }
      let top=-i*(0.6)+'rem'
      this.setState({
        ind:i,
        top:top
      })
  }
  render() {
    let {bgStyle,picUrl,url,lyricArr,ind,flag,top}=this.state
    return (
      <div className="play">
          <div className="bg" style={bgStyle}>
            
          </div>
          <div className="changbi">
            
          </div>
          <div onClick={this.play.bind(this)}>
          <div className={flag?'disc stop':'disc'}>
              <div className="img-box" >
                <img src={picUrl} alt="" />
              </div>
             
          </div>
          <div className="auto-play">
                {flag&& <i className="iconfont icon-iconset0481"></i>}
          </div>
          </div>
          <div className="lyric">
              <ul style={{marginTop:top}}>
                 {
                   lyricArr.map((item,index)=>{
                   return <li key={index} className={index==ind?'active':""} style={{height:item?".6rem":0}}>{item}</li>
                   })
                 }
              </ul>
          </div>
          <audio 
            onTimeUpdate={this.update.bind(this)}
            ref={(el)=>this.audio=el}
            src={url}
          >
             
          </audio>
      </div>
    )
  }
}
