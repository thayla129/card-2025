'use strict'

const categorias =[
    {nome: 'Celulares', icon: 'telefone.png', cor: 'red'},
    {nome:'Tenis',icon: 'tenis.png', cor: 'blue'},
    {nome:'Televisão Retro', icon: 'tvretro.png', cor: 'pink'},
    {nome:'Televisão', icon: 'tv.png', cor: 'blue'}

]
function criarMenu(categoria){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome
    novoItem.style = `--cor-hover: ${categoria.cor}`

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)

    lista.appendChild(novoItem)

}
categorias.forEach(criarMenu)


criarMenu()