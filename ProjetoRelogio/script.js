function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Hora.`
    if( hora >= 6 && hora < 12) {
    img.src = '/Img/manha.jpg'
    document.body.style.background = '#48D1CC'
} else if (hora >= 12 && hora <18){
    img.src = '/Img/tarde.jpg'
    document.body.style.background = '#FFB6C1'
} else if (hora >=18 && hora <23){
    img.src = '/Img/noite.jpg'
    document.body.style.background = '#4169E1'
}else if(hora >=0 && hora <6){
img.src = '/Img/madrugada.jpg'
    document.body.style.background = '#000000'
}
}
