//exemplos de como se usa
let rotina = ['7h acordar', '7h30 trabalhar', '12h almoçar', '13h estudar', '15h academia', '16h40 estudar', '19h jantar', '23h dormir']

//adicionar uma substituindo outra
rotina[0] = '6h40 tomar café'
// console.log(rotina)

// adicionar na última posição sem substituir
rotina.push('23h30 assistir dorama')
// console.log(rotina)

// saber tamanho do array 
// console.log(rotina.length)

// colocar en ordem
rotina.sort()
// console.log(rotina)


// saber um valor em específico
// console.log(rotina[4])

//usando laço de repetição
for (let i = 0; i < rotina.length; i+=1){
    // console.log(rotina[i])
}
// adicionando no começo
rotina.unshift('6h acordar')
// console.log(rotina)

// remover o último
rotina.pop()
// console.log(rotina)

// mostrar qual o número do index de algum valor
let tastks = rotina.indexOf('23h30 assistir dorama')
// console.log(tastks)