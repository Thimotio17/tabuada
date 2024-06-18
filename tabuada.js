let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Digite numero para saber a tabuada")
process.stdin.on("data", function(data){
    let numero = parseInt(data.toString().trim());

    if (!isNaN(numero)) {
        console.log(`Tabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++){
            let resultado = numero * tabuada[i - 1];
            console.log(`${numero} x ${tabuada[i - 1]} = ${resultado}`);
        }
        process.exit(); // Termina o processo após imprimir a tabuada
    } else {
        console.log("Por favor, digite um número válido.");
    }
});