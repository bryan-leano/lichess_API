function getUserData(user) {
  axios.get(`https://lichess.org/api/user/${user}`)
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
   
  });
}

getUserData('breaker90');
