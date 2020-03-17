import React from 'react';
import {Link} from 'react-router-dom'


function Broker() {
    return (
        <div>
            <div>
            <div className='sub'>
            < Link to='/response' id ='link' >Why does it show the Broker Not responding? and How to get it fixed? .</Link>
            < Link to='/account'  id ='link'>​Can I use multiple broker accounts in a single Bridge? </Link>
            < Link to='/position' id ='link' >What happens to my current positions when it shows the broker not responding?  </Link>
            < Link to='/signal'  id ='link'>​I am getting signals, but they are not getting executed, why?.</Link>
            < Link to='/work'  id ='link'>​Paper trading working correctly but live trading not working ?How to change my Broker? </Link>
            </div>
        </div>
        </div>
    )
}

export default Broker
