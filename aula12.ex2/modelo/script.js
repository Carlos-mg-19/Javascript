function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] ')
    
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var foto = document.getElementById('image')
        
        
        if (fsex[0].checked){
            
            genero = 'Homen'
            if (idade >=0 && idade < 12){
                foto.src = 'imagens/Criança.M.png'
                
            }else if (idade < 25){
                foto.src = 'imagens/18.M.png'
            }else if (idade < 45){
                foto.src = 'imagens/45.M.png'
            }else {
                foto.src = 'imagens/65.M.png'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                foto.src = 'imagens/Criança.F.png'
            }else if (idade < 25){
                foto.src = 'imagens/18.F.png'
            }else if (idade < 45){
                foto.src = 'imagens/45.F.png'
            }else {
                foto.src = 'imagens/65.F.png'
            }
        }
        
        res.innerHTML = `detectamos um ${genero} com ${idade} anos.`
    }
}