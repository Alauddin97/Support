import React from "react";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import "./css/app.css";
import Symbol from "./topic/Symbol";
import Risk from "./topic/Risk";
import Topic from "./topic/Topic";
import Broker from "./topic/Broker";
import Miscellaneous from "./topic/Miscellaneous";
import Subscription from "./topic/Subscription";
import Payment from "./topic/Payment";
import Troubleshooting from './topic/Troubleshooting';
import Bridge from "./topic/Bridge";
import Convert from "./topic/sub/Symbol/Convert";
import Add from './topic/sub/Symbol/Add';
import Le from './topic/sub/Symbol/Le'
import Response from './topic/sub/Broker/Response';
import Account from './topic/sub/Broker/Account';
import Signal from './topic/sub/Broker/Signal';
import Work from './topic/sub/Broker/Work';
import Position from './topic/sub/Broker/Position'
import Crash from './topic/sub/Bridge/Crash';
import Login from './topic/sub/Bridge/Login';
import Margin from './topic/sub/Bridge/Margin';
import Mobile from './topic/sub/Bridge/Mobile';
import Watch from './topic/sub/Bridge/Watch';
import Web from './topic/sub/Bridge/Web';
import Money from './topic/sub/Payment/Money';
import Subs from './topic/sub/Payment/Subs';
import Use from './topic/sub/Miscellaneous/Use';
import Connect from './topic/sub/Miscellaneous/Connect';
import Current from './topic/sub/Miscellaneous/Current';
import Support from './topic/sub/Miscellaneous/Support';
import Additional from './topic/sub/Miscellaneous/Additional';
import Paper from './topic/sub/Miscellaneous/Paper';
import Semi from './topic/sub/Miscellaneous/Semi';
import Zulo from './topic/sub/Miscellaneous/Zulo';


function App() {
  return (
    <div className='path'>
      <Router>
        <div>
        <Route path="/" component={Topic} />
        </div>
        <div>
        <Route path="/" exact component={Symbol} />
        <Route path="/risk" component={Risk} />
        <Route path="/broker" component={Broker} />
        <Route path="/misc" component={Miscellaneous} />
        <Route path="/sub" component={Subscription} />
        <Route path="/pay" component={Payment} />
        <Route path='/trouble' component={Troubleshooting}/>
        <Route path='/bridge' component={Bridge}/>
        <Route path='/add' component={Add}/>
        <Route path='/convert' component={Convert}/>
        <Route path='/le' component={Le}/>
        <Route path='/response' component={Response}/>
        <Route path='/position' component={Position}/>        
        <Route path='/account' component={Account}/>
        <Route path='/signal' component={Signal}/>
        <Route path='/work' component={Work}/>
        <Route path='/crash' component={Crash}/>
        <Route path='/login' component={Login}/>
        <Route path='/margin' component={Margin}/>
        <Route path='/mobile' component={Mobile}/>
        <Route path='/watch' component={Watch}/>
        <Route path='/web' component={Web}/> 
        <Route path='/money' component={Money}/>
        <Route path='/subs' component={Subs}/>
        <Route path='/use' component={Use}/>
        <Route path='/conn' component={Connect}/>
        <Route path='/current' component={Current}/>
        <Route path='/support' component={Support}/>
        <Route path='/additional' component={Additional}/>
        <Route path='/paper' component={Paper}/>
        <Route path='/semi' component={Semi}/>
        <Route path='/zulo' component={Zulo}/>     
        </div>        
      </Router>
    </div>
  );
}

export default App;
