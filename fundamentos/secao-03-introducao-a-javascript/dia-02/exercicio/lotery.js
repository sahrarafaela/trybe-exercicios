// Jogo do Neidson
let studentGame = [18, 26, 35, 50, 60, 5];

// Jogo sorteado
let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
}

// Confere o jogo
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawnNumber = megaSenaNumbers[index];
  // console.log("-------");
  // console.log("Número sorteado", drawnNumber);
  
  for (let gameIndex = 0; gameIndex < studentGame.length; gameIndex += 1) {
    let studentNumber = studentGame[gameIndex];
    // console.log("Número do Neidson:", studentNumber);
    
    if (drawnNumber === studentNumber) {
      numberOfHits += 1;
    }
  }
}

console.log("Jogo do Neidson:", studentGame);
console.log("jogo sorteado", megaSenaNumbers);
console.log("Número de acertos:", numberOfHits);
