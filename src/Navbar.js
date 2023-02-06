import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    let {mode,togglemode}=this.props
    return (
      <div>
        <nav className={`navbar fixed-top  navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid sticky" >
    <Link className="navbar-brand" to="/general">NewsZilla</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general" id='home'>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        
      </ul>
    </div>
    <div className={`form-check form-switch text-${mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
</div>
  </div>
</nav>
      </div>
    )
  }
}
