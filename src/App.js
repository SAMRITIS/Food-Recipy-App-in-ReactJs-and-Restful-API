import './App.css';
import React from 'react'
import Search from './search'
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark" style={{backgroundColor : "#FFFF00"}}>
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#" style={{color : "#000000"}}>Foodie</h1>
          <button className="navbar-toggler" style={{color : "#000000" , backgroundColor : "#000000"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/saurabh-singh-95b355159" style={{color : "#000000"}}>Developed By : Saurabh Singh</a></li>
              {/* <li className="nav-item"><a className="nav-link" href="#" style={{color : "#000000"}}>Link</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Search/>
    </React.Fragment> 
  );
}

export default App;
