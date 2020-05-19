// 1º exercício

function quadrado() {
  var boxElement = document.createElement('div');
  boxElement.style.width = 100;
  boxElement.style.height = 100;
  boxElement.style.backgroundColor = '#f00';

  // 2º exercício

  boxElement.onmouseover = function () {
    var newColor = getRandomColor();
    boxElement.style.backgroundColor = newColor;
  };

  document.querySelector('.box').appendChild(boxElement);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  } return color;
}

// 3º exercício

var listElement = document.querySelector('#list ul')
var nomes = ["Diego", "Gabriel", "Lucas"];

function renderNome() {
  listElement.innerHTML = '';

  for (nome of nomes) {
    var nomeElement = document.createElement('li');
    var nomeText = document.createTextNode(nome);

    nomeElement.appendChild(nomeText);
    listElement.appendChild(nomeElement);
  }
}

renderNome();

// 4º exercício

var inputElement = document.querySelector('#list input');
var buttonElement = document.querySelector('#list button');
function addNome() {
  var nomeText = inputElement.value;

  nomes.push(nomeText);
  inputElement.value = '';
  renderNome();
}

buttonElement.onclick = addNome;