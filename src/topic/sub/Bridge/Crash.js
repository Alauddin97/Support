import React from 'react'

function Crash() {
    return (
        <div className='details'>
          <h3>Why is my bridge crashing often? </h3>     
        <ul>
        If your bridge crashes often here might be some of the reasons :
        <li>Low ram (less than 1 GB) </li>   
                    <li>Poor internet connection ( less than 4 MBPS)</li> 
                   <li>Windows defender blocking the application exe. </li>
                   <li>Wrong signal input/output format </li>
                   <li>Clicking on any pointer in the bridge too many times</li> 
                   In case your problem is still unsolved, get in touch with our help desk 
        </ul>
        </div>
    )
}

export default Crash
