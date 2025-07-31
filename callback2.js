const notas = [7.7, 6.5, 5.3, 8.9, 4.0, 7.5,9.5]

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas)

notasBaixas = notas.filter(function(nota) {
    return nota < 7
})