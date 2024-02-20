$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');
  $('#telefone').mask('(00)00000-0000');
  $('#numero').mask('00000');
  $('#cep').mask('00000-000');

  jQuery.validator.addMethod('cpf_valido', function(value, element){
    value = value.replace(/[.-]/g,'');
    let a = validacpf(value)
    return a
  })
  
  jQuery.validator.addMethod('numero_valido', function(value, element){
    value = value.replace(/[()-]/g,'');
    codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99];
      if (value.length == 11){
        if(parseInt(value.slice(0, 2)) in codigosDDD){
          if(value[2]==9){
            return true
          }
        }
      }else{
        return false;
      } 
  })

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      sobrenome: {
        required: true
      },
      cpf: {
        required: true,
        cpf_valido: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
        numero_valido: true
      },
      cep: {
      required: true
      },
      logradouro: {
        required: true
      },
      numero: {
        required: true
      },
      bairro: {
        required: true
      },
      cidade: {
        required: true
      },
      estado: {
        required: true
      }
    },
    messages: {
        nome: "Campo obrigatório",
        sobrenome: "Campo obrigatório",
        cpf: "CPF inválido",
        email: "E-mail invalido",
        telefone: "Campo obrigatório",
        logradouro: "Campo obrigatório",
        numero: "Campo obrigatório",
        bairro: "Campo obrigatório",
        cep: "CEP invalido",
        cidade: "Campo obrigatório",
        estado: "Campo obrigatório"
    }
  })

  $("#cep").on( "blur", function() {
    let cep = this.value.replace(/-/g,'');
    $('#estado').val('...');
    $('#cidade').val('...');
    $.ajax({
      url: "https://viacep.com.br/ws/"+ cep +"/json/?callback=?",
      async: false,
      dataType: 'json',
      success: function(dados) {
        if (!("erro" in dados)) {
          $('#estado').val(dados.uf);
          $('#cidade').val(dados.localidade);
        }else{
          $('#cep').val('');
          $('#estado').val('');
          $('#cidade').val('');
          alert('CEP inválido!')
        }
      }
    })
  })

  function validacpf(cpf) {
    let valido = false;
  
    if (cpf.length != 11) {
      return valido;
    }
    
    let soma = 0;
    let resto = 0;
  
    if (cpf === '00000000000'|| 
        cpf === '11111111111'||
        cpf === '22222222222'||
        cpf === '33333333333'||
        cpf === '44444444444'||
        cpf === '55555555555'||
        cpf === '66666666666'||
        cpf === '77777777777'||
        cpf === '88888888888'||
        cpf === '99999999999') {
      return valido;
    }
  
    for (let i = 1; i <= 9; i++) {
      soma += (parseInt(cpf.slice(i - 1, i)) * (11 - i));
    }
  
    resto = (soma * 10) % 11;
  
    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }
  
    if (resto != parseInt(cpf.slice(9, 10))) {
      return valido;
    }
    
    soma = 0

    for (let i = 1; i <= 10; i++) {
      soma += (parseInt(cpf.slice(i - 1, i)) * (12 - i));
    }
  
    resto = (soma * 10) % 11;
  
    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }
  
    if (resto != parseInt(cpf.slice(10, 11))) {
      return valido;
    }

    valido = true;
    return valido;
  }
  
})