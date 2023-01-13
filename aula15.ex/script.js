let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#fliste')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para poder finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            if(valores[pos] > maior){
                soma += valores[pos]
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>media e ${media}</p>`
        res.innerHTML += `<p>doma do valores e ${soma}</p>`
        res.innerHTML += `<p>O maior valor ${maior}</p>`
        res.innerHTML += `<p>O meor valor ${menor}</p>`
        res.innerHTML += `<p>O valor total é ${tot}</p>`
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        window.alert('Tudo ok')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}


