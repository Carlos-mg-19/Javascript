let valores = [2, 3, 4, 9, 8, 6]
valores.sort()
/*
for (let pos=0 ; pos < valores.length; pos++){
    console.log(`a posiçao ${pos} e tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
