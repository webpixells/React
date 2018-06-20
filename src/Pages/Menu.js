import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends Component {
  render() {
    return (
      <div className="App-Menu">

      		<ul>
                <li>
                      <Link to="/CreateCampaign">CreateCampaign</Link>
                    </li>
                    <li>
                      <Link to="/PendingApproval">PendingApproval</Link>
                    </li>
                
                    <li>
                      <Link to="/CampaignPlanner">CampaignPlanner</Link>
                    </li>  


            </ul>
 
      </div>
    );
  }
}

export default Menu;
