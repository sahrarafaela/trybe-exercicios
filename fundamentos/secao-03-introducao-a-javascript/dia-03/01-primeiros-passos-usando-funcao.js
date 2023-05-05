function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }
  
//   console.log(cumprimentaCliente('Isaac')) // Olá, Isaac. Essa é sua conta do TrybeBank

let saldoCliente = 300

  function adicionarSaldo (valor){
   return valor + saldoCliente
  }
//   console.log(adicionarSaldo(1000))

  function tiraValor(valor){
    return valor - saldoCliente
  }

// console.log(tiraValor(1300));

function multiplicaValor(valor){
    return valor * saldoCliente
}

// console.log(multiplicaValor(12))

function dividindoValor(valor){
    return valor / saldoCliente
}
// console.log(dividindoValor(20)); 

