import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 
  
  
  
    <div>
   
    <BrowserRouter>
     
    
    
  <Routes>
  
  <Route exact path="/general" element=<App key="general" country="in" category="general" /> />
  <Route exact path="/sports" element=<App key="sports" country="in" category="sports"/> />
<Route exact path="/science" element=<App key="science" country="in" category="science"/> />
<Route exact path="/entertainment" element=<App key="entertainment" country="in" category="entertainment"/> />
<Route exact path="/science" element=<App key="science" country="in" category="science"/> />
<Route exact path="/business" element=<App key="business" country="in" category="business"/> />
<Route exact path="/technology" element=<App key="technology" country="in" category="technology"/> />
<Route exact path="/health" element=<App key="health" country="in" category="health"/> />
  </Routes>
  </BrowserRouter>
  </div>
  
   
 
);


