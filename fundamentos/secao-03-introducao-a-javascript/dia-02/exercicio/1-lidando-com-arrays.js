let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 207]
// Percorra o array imprimindo todos os valores contidos nele com a função console.log()

for (let value of numbers){
   
 // console.log(value)
}

// Some todos os valores contidos no array e imprima o resultado.


let sum = 0

for (let value of numbers){
    
sum += value
}
  

  // console.log(sum)
    

//     Calcule e imprima a média aritmética dos valores contidos no array.


// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.


let mediaArray = sum / numbers.length


// console.log(mediaArray)


// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem O valor da média aritmética é maior que 20; e, caso não seja maior que 20, imprima a mensagem O valor da média aritmética é menor ou igual a 20.

// 
// if (mediaArray > 20){

//     console.log('O valor da média aritmética é maior que 20')
//} else {

//     console.log('O valor da média aritmética é menor ou igual a 20')

// }


let result = numbers[0]

// Utilizando for, descubra o maior valor contido no array e imprima-o.



// for (let index = 0 ; index < numbers.length; index+= 1){

//     if (numbers[index] > result){

//         result = numbers[index]

//     }

// }

// console.log(result)

for (let value of numbers){
    
if (value < result){
    
    result = value
    }

}

// console.log(result)

let valores = 0


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: Nenhum valor ímpar encontrado.


for (let value of numbers){
  
  if(value % 2 == 0){
    
    valores += 1
      
  // console.log(valores)

   }

}


// console.log(valores)


// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.


let valorees = []

for(let i = 1; i<= 25; i+= 1){
  
  valorees.push(i)

}

// console.log(valorees)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let fatorial = 1
for (let index = 0; index < valorees.length; index += 1) {

//   console.log(valorees[index] / 2)

} 
for (let index = 1; index <numbers.leng; index+= 1){
 
 fatorial *= index;
  
console.log(fatorial)

}