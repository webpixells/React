import React, { Component } from 'react';


import Menu from './Pages/Menu'; 
import Header from './Pages/Header';
import InnerPage from './Pages/InnerPages';



class Main extends Component {
  render() {
    return (
      <div className="Main">

        <Header/>
      	<div>
      	  <Menu/>
      	  <InnerPage/>
       	</div>

     </div>
    );
  }
}

export default Main;
