function contar(){
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let pass = document.getElementById('num3')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('ERRO FALTA DADOS')
    }else{
         res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if(p <= 0){
            window.alert('passo sera trocado para 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }
        }
        if(i > f){
            for(let c = i ; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }
    
    }
        
    
}