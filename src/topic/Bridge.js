import React from 'react'
import {Link} from 'react-router-dom';
import './css/topic.css';

function Bridge() {
    return (            
            <div className ="sum">
         <Link to="/crash"  id ='link'>Why is my bridge crashing often?</Link>
         <Link  to="/login"  id ='link'>I am not able to login to my bridge. </Link>
         <Link  to="/margin" id ='link'>Not able to see Margins on my bridge </Link>
         <Link  to="/mobile" id ='link'> ​Can I use the bridge on a mobile?</Link>
         <Link  to="/watch" id ='link'>I am not able to save my watchlist on the bridge.</Link>
         <Link  to="/web" id ='link'>Do you have a web-based bridge?</Link>        
        </div>
    )
}

export default Bridge
