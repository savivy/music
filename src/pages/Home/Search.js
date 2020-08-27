import React, { Component } from 'react'
import '../../assets/search.css'
import SongList from '../../componts/SongList'
export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      sList: [],
      searchVal: "",
      searchList: [],
      flag: true
    }
  }
  componentDidMount() {
    this.$http.get('/search/hot').then(res => {
      this.setState({
        sList: res.data.result.hots
      })
    })
  }
  search(e) {
    if (!e.target.value) {
      this.setState({
        searchVal: e.target.value,
        flag: true
      })
    } else {
      this.setState({
        searchVal: e.target.value,
        flag: false
      })
    }
  }
  keydown(e) {
    if (e.keyCode == 13||e.keyCode==8) {
      this.$http.get('/search?keywords=' + e.target.value).then(res => {
        // console.log(res.data);
        this.setState({
          searchList: res.data.result.songs,
          // flag:false
        })
      })
    }
  }
  render() {
    let { sList, searchVal,flag ,searchList} = this.state
    return (
      <div className="search">
        <form>
          <div className="inputBox">
            <input type="text" placeholder="搜索歌曲、歌手、音乐" value={searchVal} onKeyDown={this.keydown.bind(this)} onChange={this.search.bind(this)} />
          </div>
        </form>
        <div className="main">
            {
              flag&&<div>
              <div className="content">
                <h3>热门搜索</h3>
                <ul className="list">
                  {
                    sList.map((item, index) => {
                      return <li className="sec" key={index}>
                        <a href="#" className="link">{item.first}</a>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className="search-history">
                <ul>
                  <li>
                    <span>○</span>
                    <span></span>
                    <span>X</span>
                  </li>
                </ul>
              </div>
            </div>
            }
             <SongList SongList={searchList}></SongList>
           
           
        </div>
      </div>
    )
  }
}
