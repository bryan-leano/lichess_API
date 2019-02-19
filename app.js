const personalToken = 'CrLIGIURwChO71pi';

getMyGame();


function getUserData(user) {
  axios.get(`https://lichess.org/api/user/${user}`)
  .then(function (response) {
    console.log(response);
    let userUsername = response.data.username;
    let userGameCount = response.data.count.all;
    let userCompletionRate = response.data.completionRate;
    let userWinRate = Math.round((response.data.count.win / userGameCount) * 100);
    let userBullet = response.data.perfs.bullet.rating;
    let userBlitz = response.data.perfs.blitz.rating;
    let userRapid = response.data.perfs.rapid.rating;

    let showGameCount = document.getElementById('user-game-count');
    showGameCount.innerHTML = `${userUsername} has played ${userGameCount} games.`;

    let showCompletionRate = document.getElementById('user-completion-rate');
    showCompletionRate.innerHTML = `${userUsername} has completed ${userCompletionRate}% of their games.`;

    let showWinRate = document.getElementById('user-win-rate');
    showWinRate.innerHTML = `${userUsername} has won ${userWinRate}% of their games.`;
    
    let showBullet = document.getElementById('user-bullet');
    showBullet.innerHTML = `${userUsername} has a bullet rating of ${userBullet}.`;

    let showBlitz = document.getElementById('user-blitz');
    showBlitz.innerHTML = `${userUsername} has a blitz rating of ${userBlitz}.`;

    let showRapid = document.getElementById('user-rapid');
    showRapid.innerHTML = `${userUsername} has a rapid rating of ${userRapid}.`;

  })
  .catch(function (error) {
    alert('error');
  });
}



function getMyGame() {
  axios.get('/api/account/playing', {
    baseURL: 'https://lichess.org/',
    headers: { 'Authorization': 'Bearer ' + personalToken }})
  .then(function (res) {
    let gameId = res.data.nowPlaying[0].gameId;
    let script = document.getElementById('now-playing');
    script.src = `https://lichess.org/embed/${gameId}?theme=auto&bg=auto`;
  })
  .catch(function (err) {
    alert(err);
  })
}
