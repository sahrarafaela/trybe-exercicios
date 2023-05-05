function validaParametros(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function verificaSaldo(valor, saldo) {
    if (valor <= saldo) {
      return true;
    } else {
      return false;
    }
  }

  function sacar(valor, saldo) {
    if (validaParametros(valor, saldo) === false) {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
    };
  
    if (verificaSaldo(valor, saldo) === true) {
      return "Saque realizado com sucesso. Novo saldo: " + (saldo - valor);
    } else {
      return "Saldo insuficiente. Seu saldo atual é: " + saldo;
    };
  }