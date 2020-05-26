# Async/Await

## Exercício 1.1

```
async function umPorSegundoAsync() {
  for (let i = 1; i <= 3; i++) {
    await delay();
    console.log(`${i}s_async`);
  }
}

umPorSegundoAsync();

```

## Exercício 1.2

```
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

getUserFromGithubAsync('diego3g');
getUserFromGithubAsync('diego3g124123');
```

## Exercício 1.3

```
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

GithubAsync.getRepositories('keras-team/keras');
GithubAsync.getRepositories('rocketseat/dslkvmskv');
```

## Exercício 1.4

```
const buscaUsuarioAsync = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }
  catch (err) {
    console.log('Async - Usuário não existe');
  }
}

buscaUsuarioAsync('diego3g');
buscaUsuarioAsync('diego3g4987549');
```