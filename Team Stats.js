const team = {
    _players: [
      {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }, {
      firstName: 'Nana',
      lastname: 'Yaw',
      age: 13
    }, {
      firstName: 'Kojo',
      lastName: 'Yeboah',
      age: 15
    }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }, {
        opponent: 'Kotoko',
        teamPoints: 56,
        opponentPoints: 46
      }, {
        opponent: 'Hearts',
        teamPoints: 59,
        opponentPoints: 28
      }
    ],
    get players () {
      return this._players
    },
    get games () {
      return this._games
    },
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age,
      };
      this._players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints,
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Chelsea', 79, 70);
  team.addGame('Manchester City', 67, 50);
  team.addGame('Liverpool', 89, 41);
  
  console.log(team.games);