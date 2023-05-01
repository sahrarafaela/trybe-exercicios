// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// let a = 5
// let b = 10

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

// let primeiroValor = 10
// let segundoValor = 60
// if (primeiroValor>segundoValor){
//     console.log(`${primeiroValor} é maior que ${segundoValor}`)
// } 
// else if(primeiroValor < segundoValor){
//     console.log(`${segundoValor} é maior que ${primeiroValor}`)
// } 

// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
// let a = 110
// let b = 120
// let c = 130

// if (a > b && a > c){
//     console.log(`${a} é maior que ${b} e ${c}`)
// } else if (b > a && b> c){
//     console.log(`${b} é maior que ${a} e ${c}`)
// } else {
//     console.log(`${c} é maior que ${a} e ${b}`)
// // }

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

// let receberValor = 0
// if (receberValor > 0){
//     console.log('positive')
// } else if (receberValor < 0){
//     console.log('negative')
// } else{
//     console.log('zero')
// }

// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// let degreeAngleA = 65;
// let degreeAngleB = 1;
// let degreeAngleC = 2

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido!');
// }

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let peca = 'cAvAlo'
// switch(peca.toLowerCase()){
//     case 'rei':
//         console.log('Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.')
//         break
//     case 'dama': 
//     console.log('A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.')
//     break
//     case 'torre':
//         console.log('A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.')
//         break
//     case 'bispo':
//         console.log('O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro  (claras ou escuras).')
//         break
//     case 'cavalo':
//         console.log('O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.')
//         break
//     case 'peao':

//         console.log('Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas. Captura ao tomar o lugar ocupada pela peça oponente que está na direção diagonal na fileira imediatamente à sua frente, tomando o lugar da peça. Ele tem um movimento especial chamado En passant.')
//         break
//         default:
//             console.log('inválido') 
// }

// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let porcentagem = 101
// if (porcentagem < 0 || porcentagem > 100){
//     console.log('ERRO')
// } else if (porcentagem >= 80){
//     console.log('B')
// }else if (porcentagem >= 70){
//     console.log('C')
// }else if (porcentagem >= 60){
//     console.log('D')
// }else if (porcentagem >= 50){
//     console.log('E')
// } else if(porcentagem >= 90){
//     console.log('A')
// } else {
//     console.log('F')
// // }

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

// let numberA = 3
// let numberB = 3
// let numberC = 3

// if(numberA % 2 == 0 || numberB % 2 == 0 || numberC % 2 == 0){
//     console.log(true)
// } else {
//     console.log(false)
// }

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

// let numberA = 2
// let numberB = 2
// let numberC = 2

// if(numberA % 2 == 1 || numberB % 2 == 1 || numberC % 2 == 1 ){
//     console.log(true)
// } else {
//     console.log(false)
// }

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

// let valorProduto = 1
// let valorVenda = 3

// if (valorProduto >= 0 && valorVenda >= 0){
//     let valorDeCusto = valorProduto * 1.2
//     let total = (valorVenda - valorDeCusto) * 1000
//     console.log(total)
// } else {
//     console.log('valor inválido')
// }

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

let salario = 20000
let valorASerPagoINSS
let valorASerPagoIR

if(salario <= 1556.94){
   valorASerPagoINSS = salario * 0.08
} else if(salario <= 2594.92){
    valorASerPagoINSS = salario * 0.09
} else if (salario <= 5189.82){
        valorASerPagoINSS = salario * 0.11
} else{
    valorASerPagoINSS = 570.88
}
let valorComINSS = salario - valorASerPagoINSS

if (valorComINSS <= 1903.98){
    valorASerPagoIR = 0
} else if (valorComINSS <= 2826.65){
    valorASerPagoIR = (valorComINSS * 0.075 ) - 142.80
} else if (valorComINSS <= 3751.05){
    valorASerPagoIR = (valorComINSS * 0.15) - 354.80
} else if (valorComINSS <= 4664.68){
    valorASerPagoIR = (valorComINSS * 0.225) - 636.13
} else {
    valorASerPagoIR = (salario * 0.275) - 869.36
}
console.log(valorComINSS - valorASerPagoIR)

