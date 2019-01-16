import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Table from './table/Table';


class App extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(respond => {
      this.setState({posts : respond.data});
    })
    .catch(error => {

    });
  }
  render() {
    return (
      <div className="App">
         <Table dataSource = {this.state.posts} />
      </div>
    );
  }
}

export default App;
