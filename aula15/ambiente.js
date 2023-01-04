let num = [10, 6, 3, 4, 5,]
num[5] = 8 /*adiciona um valor na casa do elemento selecionado pelo vetor [] */
num.push(7) /*adiciona um valor na ultima casa do elemento*/
num.sort()  /* coloca numeros em ordem */
console.log(num)
console.log(`${num.length} posições`)
console.log(`o valor do primeiro elemento ${num[0]}`)
let pos = num.indexOf(6) /* Procura o valor do indice selecionado pelo numero que se encontra dentro do vetor[] */
if (pos == -1){
    console.log('valor não encontrado')
}else{
    console.log(`a valor do indice ${pos}`)
}

