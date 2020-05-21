// ================ 1º exercício ========================
console.log('================ 1º exercício ========================');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('admin@teste.com', 'senha123');

console.log(User1.email, User1.isAdmin()) // false
console.log(Adm1.email, Adm1.isAdmin()) // true

// ================ 2º exercício ========================
console.log('================ 2º exercício ========================');

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log('==== 2.1 map ====')
const u_map = usuarios.map(item => item.idade);
console.log(u_map);

console.log('==== 2.2 filter ====')
const u_filter = usuarios.filter(item => {
  if (item.idade > 18 && item.empresa === 'Rocketseat') {
    return item;
  }
});
console.log(u_filter);

console.log('==== 2.3 find ====')
const u_find = usuarios.find(item => item.empresa === 'Google');
console.log(u_find);

console.log('==== 2.4 Unindo operações ====')
const usuarios1 = usuarios.map(a => Object.assign({}, a));
const u_find2 = usuarios1.filter(item => {
  item.idade = item.idade * 2;
  if (item.idade < 50) {
    return item;
  }

});
console.log(u_find2);

// ================ 3º exercício ========================
console.log('================ 3º exercício ========================');

console.log('==== 3.1 Arrow Functions ====')
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) { return item + 10; }));
console.log('arr.map(item => item + 10);');
console.log(arr.map(item => item + 10));

console.log('==== 3.2 constante pra function ====')
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}
console.log(mostraIdade(usuario));
const mostraIdade2 = (usuario) => (usuario.idade);
console.log('const mostraIdade = (usuario) => (usuario.idade);');
console.log(mostraIdade2(usuario));

console.log('==== 3.3 constante pra function ====')
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const mostraUsuario2 = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

console.log('==== 3.4 constante pra function ====')
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  })
}

const promise = () => { new Promise((resolve, reject) => resolve()) }