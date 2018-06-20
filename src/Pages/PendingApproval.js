import React, { Component } from 'react';
import '../App.css';

class PendingApproval extends Component {
  render() {
    return (
      <div className="App-pending">

     <table class="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
         <td>john@example.com</td>
            <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
         <td>mary@example.com</td>
            <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
         <td>july@example.com</td>
          <td>july@example.com</td>
      </tr>
    </tbody>


  </table>
 
      </div>
    );
  }
}

export default PendingApproval;
