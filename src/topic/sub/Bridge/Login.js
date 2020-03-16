import React from 'react'

function Login() {
    return (
        <div className='details'>
            <h3>I am not able to login to my bridge. </h3>
          <ul>
          This issue can arise due to :
          <li>
          Poor internet issue 
          </li>
          <li>
          Wrong username/password 
          </li>
          <li>
          Windows blocking our Algo bridge </li>
          <li>
          Logging in with same username and password in multiple machines 
          </li>
          <li>
          Admin blocking you for breaching our policies
          </li>
              </ul> 
        </div>
    )
}

export default Login
