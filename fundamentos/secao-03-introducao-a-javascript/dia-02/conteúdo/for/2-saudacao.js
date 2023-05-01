// dar um start dentro do array

let names = ['Paula', 'Roberto', 'Amanda', 'Cleide', 'Daniel', 'Rods', 'Rogério']
            // incremento '+= 1' (para não causar bugs inesperados)
for (let i = 0 ; i < names.length; i += 1){
    console.log(`Olá, ${names[i]}`)
}