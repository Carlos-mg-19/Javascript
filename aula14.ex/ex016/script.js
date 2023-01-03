function tabuada(){
    let num = document.getElementById('txn')
    let tab = document.getElementById('seletab')

    if(num.value.length == 0){
        window.alert('Por favor difite um numero')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 20; c++){
            let item = document.createElement('option') /* cria um elemento*/
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) /*gera o elemento dentro  dentro do select*/
        }
    }
}