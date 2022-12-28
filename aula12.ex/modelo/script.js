function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/bomdia.png'
        document.body.style.background = '#fedcc0'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/boatarde.png'
        document.body.style.background = '#b13404'
    }else{
        img.src = 'imagens/boanoite.png'
        document.body.style.background = '#e7abcd'
    }
}

