import React, { Component } from 'react';
import styles from './styles/App';
import Panel from './Panel';

class App extends Component {
  render() {
    return (
      <div style = {styles.container}>
        <Panel />
      </div>
    );
  }
}

export default App;
