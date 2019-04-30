import React from 'react';
import logo from './logo.svg';
import './App.css';

import teams from './teams'
import SportList from './SportList'
import TeamsList from './TeamsList'
import PlayerList from './PlayerList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sport: '',
      team: '',
      player: ''
    }
  }

  _setSport = (sport) => {
    this.setState({
      sport,
      team: ''
    })
  }

  _setTeam = (team) => {
    this.setState({
      team,
      player: ''
    })
  }

  _setPlayer = (player) => {
    this.setState({
      player
    })
  }

  render() {
  return (
    <div className="App">
        <SportList sports={Object.keys(teams)} handleClick={this._setSport}/>
        {
          this.state.sport ? <TeamsList teams={Object.keys(teams[this.state.sport])} handleClick={this._setTeam}/> : null
        }
        {
          this.state.team ? <PlayerList players={teams[this.state.sport][this.state.team]} /> : null
        }
    </div>
  );
}
}
export default App;
