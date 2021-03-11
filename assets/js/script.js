/*No java Script as variaveis não se coloca o tipo dela como no java     
Case sensetive => reconhece letras maiuscula e menusculas
 Posso acessar o DOM por:
 por Tag:getElementByTagName()
 por Id:getElementById()
 por Tag:getElementsByName()
 por Calsse:getElementsByClasseName()
 por Seletor:queryySeletor()
 */
let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
 
nome.style.width ='100%'
email.style.width ='100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto excede o limite de 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
     else{
    alert('Preencha o formulário corretamente antes de enviar!')
}
}
function mapaZoom(){
    mapa.style.width ='800px'
    mapa.style.height ='600px'

}

function mapaNormal(){
    mapa.style.width ='400px'
    mapa.style.height ='250px'

}
