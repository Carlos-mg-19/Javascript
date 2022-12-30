function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('image')
    
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('erro')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >=0 && idade < 12){
            
                
        
            }else if (idade < 25){
                img.src = 'imagens/18.M.png'
            }else if (idade < 45){

            }else {

            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                
            }else if (idade < 25){
                
            }else if (idade < 45){

            }else {
                
            }
        }
        res.innerHTML = `detectamos um ${genero} com ${idade} anos.`
    }
}