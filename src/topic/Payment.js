import React from 'react'
import {Link} from 'react-router-dom'

function Payment() {
    return (
        <div className='sum'>
            <Link to="/money" id='link'>My money got debited but didn’t get any confirmation.</Link>
            <Link to="/subs" id='link'>I am trying to pay for a subscription but not able to process it.</Link>
        </div>
    )
}

export default Payment