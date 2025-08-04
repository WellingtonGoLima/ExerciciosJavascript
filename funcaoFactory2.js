
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Noteook', 2199.50))
console.log(criarProduto('Celular', 199.50))