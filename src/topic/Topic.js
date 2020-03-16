import React from 'react';
import {Link} from 'react-router-dom';
import './css/topic.css';

function Topic() {
    return (
        <div className ="nav">
         <Link to="/"  id ='link'> ​Symbol setting Issue</Link>
         <Link  to="/risk"  id ='link'> Risk Management tools</Link>
         <Link  to="/broker" id ='link'> Broker response Issue</Link>
         <Link  to="/sub" id ='link'> ​Subscription Issue</Link>
         <Link  to="/pay" id ='link'> ​Payment related issue</Link>
         <Link  to="/trouble" id ='link'>Troubleshooting assistance</Link>
         <Link  to="/bridge" id ='link'> Bridge related issues​</Link>
         <Link  to="/misc" id ='link'> ​Miscellaneous</Link>         
        </div>
    )
}

export default Topic       