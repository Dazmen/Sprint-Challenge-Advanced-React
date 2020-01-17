import React from 'react';
import Axios from 'axios';
import './App.css';
import PlayerList from './components/playerList';
import NavBar from './components/navBar';

class App extends React.Component {

  state = {
    wwcPlayers: []
  };

  componentDidMount(){
    Axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('player data recieved', res);
        this.setState({wwcPlayers: res.data})
      })
      .catch(err => {
        console.log('Player Data was not fetched', err);
      })
  };

  render(){
    return (
      <div className="App">
        <NavBar />
        <PlayerList wwcPlayers={this.state.wwcPlayers}/>
      </div>
    );
  }
}

export default App;
