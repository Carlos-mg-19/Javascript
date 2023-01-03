function contar(){
    var nume1 = document.getElementById('num1')
    var nume2 = document.getElementById('num2')
    var nume3 = document.getElementById('num3')
    var n1 = Number(nume1.value)
    var n2 = Number(nume2.value)
    var n3 = Number(nume3.value)
    var res = document.getElementById('res')

    for (var c = n1; c < n2; c += n3){
        res.innerHTML += `<div>${c},</div>`
    }
}
