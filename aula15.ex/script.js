let num = document.getElementById('txnum')
let sel = document.getElementById('select')
let res = document.getElementById('res')
let valores = []

function isnumeros(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{ 
        return false
    }
}

function inlista(n, 1){
    if(1.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adionar(){
    if(isnumeros(num.value) && !inlista(num.value, valores)){
        window.alert('tudo ok')
    }else{
        window.alert('valores invalido ja encontrado na lista')
    }
}