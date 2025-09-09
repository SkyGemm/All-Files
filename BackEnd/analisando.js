var idade = 67
console.log(`Você tem ${idade} anos.`) // Exibe no console a idade informada
if (idade < 16) {
    console.log("Não vota.") // não vota se menor que 16 anos
} else if (idade < 18 || idade > 65) {
        console.log("Voto opcional.")
    } else { // vota se tem entre 16-17 anos OU maior que 65 anos
        console.log("Voto obrigatório.")
    } // para idades entre 18-65 anos