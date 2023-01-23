let amigo = {nome: 'carlos' , sexo: 'M' , peso: 57,  engorda(p=0){
    this.peso += p
    console.log `engordou` 
}}
amigo.engorda(8)

console.log `${amigo.nome} peso ${amigo.peso} ele engordou  `