import React from 'react'
import {Link} from 'react-router-dom'

function Miscellaneous() {
    return (
        <div className='sum'>
            <Link to='/use' id='link' >How many accounts can I use per bridge?</Link>
            <Link to='/conn' id='link' >I have 2 different accounts with 2 different brokers, can I connect both in the Same bridge?</Link>
            <Link to='/current' id='link' >Which Brokers do you currently support?</Link>
            <Link to='/support' id='link' >I don’t have an account in the brokers you support, how shall I get started?</Link>
            <Link to='/zulo' id='link' >How different are you from Etoro or Zulu Trade? </Link>
            <Link to='/additional' id='link' >Will I get any additional benefit if I open a trading account through your reference?</Link>
            <Link to='/paper' id='link' >What is Paper trading mode? </Link>
            <Link to='/semi' id='link' >What is the Semi-auto and Default mode?</Link>
        </div>
    )
}

export default Miscellaneous
