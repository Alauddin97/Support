import React from 'react';
import {Link} from "react-router-dom";
import './css/topic.css';

function Symbol() {
    return (
        <div>
            <div className='sum'>
            < Link to='/add' id ='link' >How to Add symbols to Bridge.</Link>
            < Link to='/convert' id ='link' >How to convert from Equity to Future/Options. </Link>
            < Link to='/le'  id ='link'>​What is LE/LX/SE/SX system rule? </Link>
            </div>
        </div>
    )
}

export default Symbol
