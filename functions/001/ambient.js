function calculadora(a,b,callback){
let soma = a + b
callback(soma)
}
calculadora(4,5, function(result){
    console.log(result)
})