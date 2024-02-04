let numA = document.getElementById('numA');
let numB = document.getElementById('numB');
const form = document.getElementById('form-testar');
const msg = document.querySelector('#msg');

form.addEventListener('submit', function(e){
  e.preventDefault();

  if(numA.value < numB.value){
    msg_positiva = `Sim, ${numB.value} é maior que ${numA.value}`;
    msg.innerHTML = msg_positiva;
    msg.classList.remove('msg-negativa');
    msg.classList.add('msg-positiva');
    
  }else{
    msg_negativa = `Não, ${numB.value} não é maior que ${numA.value}`;
    msg.innerHTML = msg_negativa;
    msg.classList.remove('msg-positiva');
    msg.classList.add('msg-negativa');
  }

  numA.value = '';
  numB.value = '';
})


