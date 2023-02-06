import React, { Component } from 'react'

export default class Newsitem extends Component {
   
    render() {
        let {title,description,imageUrl,publishedAt,url,mode,author,date,source,colour}=this.props
       
        return (

<div>
<span class={`badge bg-${colour}`} >{source}</span>
                <div className={`card bg-${mode} my-3`} style={{width: "18rem;"} } id="card">
                    
                
                <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p>{publishedAt}</p>
                        <p>by {author?author:"unknown"} on {date}</p>
                        <a  href={url} target="_blank" className="btn btn-sm btn-primary" >Read more</a>
                    </div>
                </div>
               
            </div>
            
        )
    }
}
