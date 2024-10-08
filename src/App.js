import './App.css';
import React from 'react';

import NewsBar from './NewsBar';
import MainContent from './MainContent';
import StatusBar from './StatusBar';

class App extends React.Component {
  eventsEndpoint = "/pomidor/someEvents";

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <NewsBar events={this.state.events} />
        <MainContent events={this.state.events} />
        <StatusBar events={this.state.events} />
      </div>
    );
  }

  componentDidMount() {
    this.refreshEvents();
    setInterval(() => this.refreshEvents(), 1000)
  }

  refreshEvents() {
    fetch(this.eventsEndpoint,
      {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(async res => {
        const data = await res.json();
        this.setState({ events: data })
      }).catch(err => console.log(err))
  }
}



export default App;
