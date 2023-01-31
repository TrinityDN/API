// const valor = ["Juliana", "Jessica", "Evelyn", "Trinity", "Geovana"];

// document.getElementById("teste").innerHTML = valor[2];

// console.log(valor);


//Criando outro array com Json

const inf = '{"nome1": "Juliana", "nome2": "Jessica", "nome3": "Evelyn", "nome4": "Trinity", "nome5": "Beatriz"}'

const nomes = JSON.parse(inf)
document.getElementById("nome1").innerHTML = nomes.nome1;
document.getElementById("nome2").innerHTML = nomes.nome2;
document.getElementById("nome3").innerHTML = nomes.nome3;
document.getElementById("nome4").innerHTML = nomes.nome4;
document.getElementById("nome5").innerHTML = nomes.nome5;

console.log(nomes);