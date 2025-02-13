'use strict';

const categorias = [
    { nome: 'Mobile', icon: 'iconmobile.png', cor: 'white' },
    { nome: 'Shoes', icon: 'iconshoes.png', cor: 'white' },
    { nome: 'SmartWatch', icon: 'iconsmartwatch.png', cor: 'white' },
    { nome: 'HeadPhone', icon:'iconheadphones.png', cor: 'white' }
];

function criarMenu(categoria) {
    const novoItem = document.createElement('li');
    const novaImagem = document.createElement('img');
    const novoSpan = document.createElement('span');
    const lista = document.getElementById('menu');

    novaImagem.src = `./img/${categoria.icon}`;
    novaImagem.alt = categoria.nome; 
    novaImagem.loading = "lazy"; 
    novoSpan.textContent = categoria.nome;
    novoItem.style = `--cor-hover: ${categoria.cor}`;

    novoItem.appendChild(novaImagem);
    novoItem.appendChild(novoSpan);
    lista.appendChild(novoItem);
}

categorias.forEach(criarMenu);
