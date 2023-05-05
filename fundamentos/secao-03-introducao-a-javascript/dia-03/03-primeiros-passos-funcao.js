// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validarCliente(cliente) {
    if (typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionada(o) com sucesso!'

    }   else {
            return 'O parâmetro passado deve ser do tipo "string"';
    }
}

// console.log(validarCliente());

function removeCliente(cliente) {
    let clienteEncontrado = false;
    if (typeof cliente === 'string'){
        for (let index = 0 ; index < clientesTrybeBank.length; index += 1){
            if(cliente === clientesTrybeBank[index]){
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluída(o) com sucesso.';
            }
        }
        if (clienteEncontrado === false){
            return 'Cliente não encontrada(o)'
        }
        

    }   else {
            return 'O parâmetro passado deve ser do tipo "string"';
    }

}


console.log(clientesTrybeBank)