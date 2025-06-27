console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()


function numPointsScored(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let player of teamObj.players) {
      if (player.name === playerName) {
        return player.points;
      }
    }
  }
  return null; // if player not found
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let player of teamObj.players) {
      if (player.name === playerName) {
        return player.shoe;
      }
    }
  }
  return null; // if player not found
}

function teamColors(teamName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    if (teamObj.teamName === teamName) {
      return teamObj.color;
    }
  }
  return null; // if team not found
}
function teamNames() {
  let game = gameObject();
  return [game.homeTeamName, game.awayTeamName];
}

function playerNumbers(){
  return[game.homeTeam.players.length, game.awayTeam.players.length]
}

function playerStats(){
  let game = gameObject();
  let stats = {};
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let player of teamObj.players) {
      stats[player.name] = {
        points: player.points,
        shoe: player.shoe
      };
    }
  }
  return stats;
}

function bigShoeRebounds() {
  let game = gameObject();
  let maxShoe = -Infinity;
  let rebounds = null;

  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let player of teamObj.players) {
      if (player.shoe > maxShoe) {
        maxShoe = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}