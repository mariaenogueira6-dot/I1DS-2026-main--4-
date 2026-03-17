//Criando variaveis do tipo array (Vetor)

var dinos = ["Tiranousauro Rex", "Estegoussauro", "Brontossaurro"]

//Imprimindo os dados em forma de linha
console.log(dinos);
//Imprimindo os dados em forma de tabelas
console.table(dinos);

//legth -> "Tamanho" do Array (Quantidade de elementos)
console.log("O vetor tem", dinos.length, "elementos");

//Imprimir elemento  a partir do indice
console.log(dinos[2]);
console.table(dinos);

//push -> Adiciona um novo elemento no final da fila;
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

//unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor")
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

//Obter um elemento a partir do indice
console.log("1 posição:", dinos[0]);
console.log("4 posição:", dinos [3]);
console.log("20 posição (não existe)", dinos [20])