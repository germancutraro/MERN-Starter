import React, { Component } from 'react';

class App extends Component {

  state = { message: '' };

  componentDidMount() {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(({ message }) => this.setState({ message }))
      .catch(err => console.log(err));
  }   

  render() {
    return (
      <div className="App">
        <p>
          The message from the server is: <strong>{this.state.message}</strong>
        </p>
      </div>
    );
  }
}

export default App;
