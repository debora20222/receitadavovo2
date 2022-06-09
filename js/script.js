let nome=window.document.getElementById ('nome')
let email=document.querySelector('#email')
let assunto=document.querySelector('#assunto')


/*
function validarNome() {
  if (nome.value.length < 3)  {
alert('nome invalido!digite um nome com mais 3 de letras')
  }
}




function validaremail() {
let txemail=document.querySelector('#txemail')
if(email.value.indexOf('@') == -1  || email.value.indexOf('.') == -1)   {
alert('email invalido!digite um email com @')  
}

}

*/


function validarNome() {
  let txtnome=document.querySelector('#txtnome')
if (nome.value.length <3) {
txtnome.innerHTML='nome invalido'
txtnome.style.color= 'red'
} else {
  txtnome.innerHTML='nome valido'
  txtnome.style.color= 'green'
}
}

function validaremail() {
let txtemail=document.querySelector('#txtemail')
  if (email.value.length <3) {
  txtemail.innerHTML= 'email invalido'
  txtemail.style.color='red'
  } else {
    txtnome.innerHTML='email valido'
    txtnome.style.color= 'green'
  }
}


function validarassunto() {
  let txtassunto = document.querySelector('#txtassunto')
 
  if (assunto.value.length <3)  {
  txtassunto.innerHTML = 'assunto invalido'
  txtassunto.style.color ='red'
  } else {
    txtassunto.innerHTML ='assunto valido'
    txtassunto.style.color= 'green'
  }
} 