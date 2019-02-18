const personalToken = 'CrLIGIURwChO71pi';

function getUserData(user) {
  axios.get(`https://lichess.org/api/user/${user}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    alert('error');
  });
}

getUserData('breaker90');


function getMyGame() {
  axios.get('/api/account/playing', {
    baseURL: 'https://lichess.org/',
    headers: { 'Authorization': 'Bearer ' + personalToken }})
  .then(function (res) {
    console.log(res.data.nowPlaying[0].gameId);
    
  })
  .catch(function (error) {
    alert(error);
  })
}

getMyGame();

/*
function getLastBulletGame(user) {
  axios.get(`https://lichess.org/api/games/user/${user}?perfType=bullet&max=1`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {

  });
}

getLastBulletGame('breaker90');
*/
