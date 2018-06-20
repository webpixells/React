import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import CreateCampaign from './CreateCampaign';
import CampaignPlanner from './CampaignPlanner';
import PendingApproval from './PendingApproval';

class InnerPage extends Component {
  render() {
    return (
      <div className="App-innerpage">

      			   <Route exact path="/CreateCampaign" component={CreateCampaign} />
                   <Route path="/CampaignPlanner" component={CampaignPlanner} />
                   <Route path="/PendingApproval" component={PendingApproval} />
                   

 	
      </div>
    );
  }
}

export default InnerPage;
