import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component

const Nav = () => {
  return (
    <>
      <div className="col-md-2">
        <div className="card mt-5"  style={{border:"  1px solid rgb(255 255 255 / 8%)"}}>
          <div className="card-body" >
            <div className='custom_nav'>
              <Link to="/"><h5>About</h5></Link>
             <Link to="/resume"> <h5>Resume</h5></Link>
             <Link to="/contact"> <h5>Contact</h5></Link>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );    
}

export default Nav;
