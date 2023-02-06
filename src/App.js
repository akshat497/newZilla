import React, { Component } from 'react'

import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import InfiniteScroll from "react-infinite-scroll-component"
import LoadingBar from "react-top-loading-bar"


export default class App extends Component {
  static defaultProps={
    country:"in",
    category:"general",
    page:1
    
  }
  static PropeTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    page:PropTypes.number

  }
  
  

constructor(props){
            super(props); 
    this.state={
        articles:[], 
        loading:false,
        page:1,
        mode:'light',
        color:'success',
        totalResults:0,
        progress:20
        
    }
    document.title=this.props.category
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}
togglemode= ()=>{
  if (this.state.mode==='light') {
      this.setState({mode:'dark'})
      document.body.style.backgroundColor="grey"
        document.body.style.color="white"
     
      
      
  }else{
      this.setState({mode:'light'})
      document.body.style.backgroundColor=""
      document.body.style.color="black"
 
  }
}
  update=async ()=>{
    this.setProgress(0)
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55e733d27b8a4379a076a8e1b9033d00&page=${this.state.page}&pageSize=8`
  let data=await fetch(url)
  this.setProgress(60)
  let parsedData=await data.json()
  this.setState({articles:parsedData.articles ,totalResults:parsedData.totalResults})
  this.setProgress(100)
 }
async componentDidMount(){
  this.update()
}

previousClick = async()=>{

this.setState({
  page:this.state.page-1
})
this.update()
  
}
nextClick= async ()=>{

  
this.setState({
  page:this.state.page+1
})
  this.update()
}
fetchMoreData = async () => {
 this.setState({page:this.state.page+1,})
 const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55e733d27b8a4379a076a8e1b9033d00&page=${this.state.page}&pageSize=8`
  let data=await fetch(url)
  let parsedData=await data.json()
  this.setState({
    articles:this.state.articles.concat(parsedData.articles) ,
    totalResults:parsedData.totalResults
  })
 
};

  render() {
    return (
      
      <div className={`container my-4 `}>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={this.state.progress}
      />
      <Navbar key="unique" mode={this.state.mode} togglemode={this.togglemode}/>

     
      <h2 className='my-5'>NewsZilla - Top {this.props.category} headlines</h2>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
         
        <div className="container">
          
      <div className="row">
      <img src='loding.webp'  id="img" alt='' height="40%"/>

      {
        this.state.articles.map((element)=>{
        
        
        document.getElementById("img").style.display='none' ;
        
         
        return(
      <div className="col-md-4">
      <Newsitem mode={this.state.mode}  title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={!element.urlToImage?"bg.png":element.urlToImage} publishedAt={element.publishedAt} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} colour={this.props.category==='health'?this.state.color:'danger'} />
      
      </div>
      
      )
      })
      
      }
      
      </div>
        </div>
      </InfiniteScroll>
       <div className="container d-flex justify-content-between ">
                <button type="button" className="btn btn-dark my-3" disabled={this.state.page<=1} onClick={this.previousClick}>previous</button>
                <button  type="button" className="btn btn-dark my-3" onClick={this.nextClick}>Next</button>
                </div>
      </div>
    )
  }
}
