let cars = ['Saab', 'Volvo', 'BMW'];

for (let index = 0; index < cars.length; index += 1) {
    //percorre pelo ARRAY e juntamente com o for mostra na tela cada um dos resultados, pois está indo no [index]
//   console.log(cars[index]);
}

// exercício

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i+= 1){
    // console.log(`${groceryList[i]}`)
}
// OK


// utilizando for/of para percorrer um array
for (let index of groceryList){
    console.log(index)
}