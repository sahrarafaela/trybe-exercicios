function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
        } else {
            return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
        }
    } else {
        return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
    }
  }
  
  console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
  console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
  console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00