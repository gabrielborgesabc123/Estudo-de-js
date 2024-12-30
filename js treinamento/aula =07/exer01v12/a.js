function  carregar(){
var msg = window.document.getElementById('msg')
var img  = window.document.getElementById('imagem')
var date = new Date();
var hora = data.getHours()
var hora = 


if (hora >= 0 && hora <12){
msg.innerHTML=`agora sao ${hora} Horas, BOM DIA!`
 img.src='manha.png'
document.body.style.background = '#e2cd9f'
}else if (hora>12 && hora < 18){
msg.innerHTML=`agora sao ${hora} Horas, BOA TARDE!`
 img.src='tarde.png'
 document.body.style.background = '#b9846f'
}else{
    document.body.style.background = '#515154'
    msg.innerHTML=`agora sao ${hora} Horas, BOA NOITE!`
    img.src= 'noite.png'
}
}