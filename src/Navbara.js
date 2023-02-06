
import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Navbara extends Component {
    constructor(){
        super(); 
      this.state={
       mode:'light'
    
}
}
togglemode= ()=>{
    if (this.state.mode==='light') {
        this.setState({mode:'dark'})
        document.body.style.backgroundColor="grey"
        document.body.style.color="grey"
        
        
    }else{
        this.setState({mode:'light'})
        document.body.style.backgroundColor=""
        document.body.style.color="black"
       
    }
}
    render(){

   
    
    return (
      <div>
        <Navbar key="unique" mode={this.state.mode} togglemode={this.togglemode}/>
      </div>
    )
  }
}
