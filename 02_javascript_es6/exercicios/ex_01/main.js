// ================ 1º exercício ========================
console.log('========== 1º exercício ==================');

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
console.log('============ 2º exercício =================');

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
console.log('============= 3º exercício =================');

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
const promise1 = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  })
}

const promise2 = () => { new Promise((resolve, reject) => resolve()) }
console.log('const promise = () => { new Promise((resolve, reject) => resolve()) }');

// ================ 4º exercício ========================
console.log('=========== 4º exercício ===================');

console.log('4.1 Desestruturação simples');

const empresa = {
  nome_e: 'Rocketseat',
  endereco_e: {
    cidade_e: 'Rio do Sul',
    estado_e: 'SC',
  }
};

const { nome_e, endereco_e: { cidade_e }, endereco_e: { estado_e } } = empresa;
console.log('const { nome, endereco: { cidade }, endereco: { estado } } = empresa');
console.log(nome_e); // Rocketseat
console.log(cidade_e); // Rio do Sul
console.log(estado_e); // SC

console.log('4.2 Desestruturação em parâmetros');

function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));

// ================ 5º exercício ========================
console.log('========== 5º exercício ==================');

console.log('5.1 REST');
const arr2 = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr2;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

console.log('5.1 SPREAD');

const usuario_spread = {
  nome: 'Diego',
  idade: 23,
  endereco:
  {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario_spread2 = { ...usuario_spread, nome: 'Gabriel' };
console.log(usuario_spread2);

const usuario_spread3 = { ...usuario_spread, cidade: 'Lontras' };
console.log(usuario_spread3);

// ================ 6º exercício ========================
console.log('=========== 6º exercício ===================');

const usuario_6 = 'Diego';
const idade_6 = 23;
console.log('O usuário ' + usuario_6 + ' possui ' + idade_6 + ' anos');
console.log(`O usuário ${usuario_6} possui ${idade_6} anos`);

// ================ 7º exercício ========================
console.log('========== 7º exercício ==================');

const nome_7 = 'Diego';
const idade_7 = 23;

const usuario_7 =
{
  nome_7,
  idade_7,
  cidade_7: 'Rio do Sul',
};