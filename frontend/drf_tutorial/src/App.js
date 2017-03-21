import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.fetchPosts} />
      </div>
    );
  }

  fetchPosts = function () {
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.data['username'] = 'testuser';
      axios.get('http://127.0.0.1:8000/users/')
          .then(function(response){
              console.log(response.data);
              console.log(response.status);
          });
  }
}



export default App;
