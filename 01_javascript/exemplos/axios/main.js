axios.get('https://api.github.com/users/mafda')
  .then(function (response) {
    console.log(response.data.avatar_url);
  })
  .catch(function (error) {
    console.log(error);
  });