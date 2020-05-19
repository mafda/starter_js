// 1º exercício

console.log('=============== 1º exercício ===============')
function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade > 18) {
        resolve("Maior de 18");
      } else {
        reject("Menor de 18");
      }
    }, 2000);
  });
}

checaIdade(2)
  .then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });

console.log('carregando...')

// 2º exercício

function github(user) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.github.com/users/${user}/repos`);
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      }
    };
  });
};

function adicionar() {

  const user = document.querySelector('#user input').value;
  const repo_list = document.querySelector('#user ul');
  repo_list.innerHTML = '';
  var ulElement = document.createElement('li');
  ulElement.innerText = 'carregando...';
  repo_list.appendChild(ulElement);

  github(user).then((response) => {
    repo_list.innerHTML = '';
    for (res of response) {
      var ulElement = document.createElement('li');
      ulElement.innerText = res.name;
      repo_list.appendChild(ulElement);
    }

  }).catch((error) => {
    repo_list.innerHTML = '';
    var ulElement = document.createElement('li');
    ulElement.innerText = `erro de solicitação: ${error}`;
    repo_list.appendChild(ulElement);
  });
}