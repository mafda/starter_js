
// ================== Exercício 1 ==================

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
  delay().then(() => {
    console.log('1s');

    delay().then(() => {
      console.log('2s');

      delay().then(() => {
        console.log('3s');
      });
    })
  });
}

async function umPorSegundoAsync() {
  for (let i = 1; i <= 3; i++) {
    await delay();
    console.log(`${i}s_async`);
  }
}


umPorSegundo();
umPorSegundoAsync();


// ================== Exercício 2 ==================
import axios from 'axios';


function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    }).catch(err => {
      console.log('Usuário não existe');
      console.log(err);
    })
}

async function getUserFromGithubAsync(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log('Async');
    console.log(response);
  }
  catch (err) {
    console.log('Async - Usuário não existe');
  }
}


getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
getUserFromGithubAsync('diego3g');
getUserFromGithubAsync('diego3g124123');

// ================== Exercício 3 ==================

class Github {
  static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
      .then(response => { console.log(response.data); })
      .catch(err => {
        console.log('Repositório não existe');
      })
  }
}


class GithubAsync {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    } catch (err) {
      console.log('Async - Repositório não existe');
    }
  }
}

Github.getRepositories('keras-team/keras');
Github.getRepositories('rocketseat/dslkvmskv');
GithubAsync.getRepositories('keras-team/keras');
GithubAsync.getRepositories('rocketseat/dslkvmskv');

// ================== Exercício 4 ==================

const buscaUsuario = (user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Usuário não existe');
    });
}

const buscaUsuarioAsync = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }
  catch (err) {
    console.log('Async - Usuário não existe');
  }
}

buscaUsuario('diego3g');
buscaUsuario('diego3gsfasfas');
buscaUsuarioAsync('diego3g');
buscaUsuarioAsync('diego3g4987549');