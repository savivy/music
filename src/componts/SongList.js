import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../less/search.less'
import '../font/iconfont.css'

class SongList extends Component {

    play(id){
        this.props.history.push('/play?id='+id)
    }
    render() {
      
        return (
            <div className="wrap">
                <ul className="List">

                    {
                        this.props.SongList.map((item, index) => {
                            {
                                if (item.artists) {
                                    return <li key={item.id}  onClick={this.play.bind(this,item.id)}>
                                        <div className="list">
                                            <h3>{item.name}</h3>
                                            <div className="artists ">
                                                {item.artists.map((val, i) => {
                                                    return val.name
                                                }).join(" / ")}
                                                <s>---</s><i>{item.name}</i>
                                            </div>
                                        </div>
                                        <div className="player">
                                                <i className="iconfont icon-iconset0481"></i>
                                        </div>
                                    </li>
                                } else if (item.song.artists) {
                                    return  <li key={item.id}  onClick={this.play.bind(this,item.id)}>
                                        <div className="list">
                                            <h3>{item.name}</h3>
                                            <div className="artists ">
                                                {item.song.artists.map((val, i) => {
                                                    return val.name
                                                }).join(" / ")}
                                                <s>---</s><i>{item.name}</i>
                                            </div>
                                        </div>
                                        <div className="player">
                                            <i className="iconfont icon-iconset0481"></i>
                                        </div>
                                    </li>
                                }
                            }
                        })
                    }
                
                </ul>
                
            </div>
        )
    }
}
export default withRouter(SongList)