// ============ 1º exercício ================================

var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function enderecoUsuario(endereco) {
  // return console.log('O úsuario mora em + endereco['cidade']');
  return console.log('O usuário mora em '
    + endereco['cidade']
    + '/' + endereco['uf']
    + ', no bairro ' + endereco['bairro']
    + ', na rua "' + endereco['rua']
    + '" com no ' + endereco['numero'])
}

enderecoUsuario(endereco);

// ============ 2º exercício ================================

function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

pares(1, 10);

// ============ 3º exercício ================================

function temHabilidade(skills) {
  // código aqui
  return skills.indexOf('Javascript') == 0;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false

// ============ 4º exercício ================================

function experiencia(anos) {
  // código aqui
  if (0 < anos && anos <= 1) {
    console.log('Iniciante');
  }
  if (1 < anos && anos <= 3) {
    console.log('Intermediario');
  }
  if (3 < anos && anos <= 6) {
    console.log('Avanzado');
  }
  if (anos > 7) {
    console.log('Jedi Master');
  }
}
var anosEstudo = 9;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// ============ 5º exercício ================================

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function usuarioSkills(usuarios) {
  // console.log(usuarios[0]['nome'])

  for (usuario of usuarios) {
    // console.log(usuario)
    console.log('O ' + usuario['nome'] + ' possui as habilidades '
      + usuario['habilidades'].join(', '))
  }
}

usuarioSkills(usuarios)