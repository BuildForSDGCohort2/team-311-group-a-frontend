import React from 'react';
import './App.css';
import './semantic-ui/semantic.min.css';

function Home() {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="ui sixteen wide column" id="head">
            <h1 className="apptitle">Hello World</h1>
          </div>
        </div>
        <div className="ui tabular menu">
          <a href="#" className="active item">Home</a>
          <a href="#" className="active item">Register</a>
          <a href="#" className="active item">Login</a>
          <a href="#" className="active item">Room</a>
          <a href="#" className="active item">Profile</a>
        </div>
        <div className="row" id="body">
          <div className="ui nine wide column mainbody">
            <h1>Main Content</h1>
          </div>
          <div className="ui six wide column announcement">
            <h1>Notification</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
