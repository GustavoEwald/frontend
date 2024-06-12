function Telefone(modelo, marca, anoFabricacao){
  this.modelo = modelo;
  this.marca = marca;
  this.ano_fabricacao = anoFabricacao;
  this.telefonar = function(num_telefone){
    if(typeof(num_telefone)!='number'){
      console.log('Nao foi possivel completar a chamada');
    }else{
      console.log(`Ligando para ${num_telefone}`);
    }
  }
}

function TelefoneLinha(modelo, marca, ano_fabricacao, mobilidade, regChamada, agendaTelefones){
  this.mobilidade = mobilidade;
  this.regChamada = regChamada;
  this.agendaTelefones = agendaTelefones;
  Telefone.call(this, modelo, marca, ano_fabricacao);
}

function Celular(modelo, marca, anoFabricacao, memInterna, acessoInternet, tipoTeclado, possuiCamera){
  this.memInterna = memInterna;
  this.acessoInternet = acessoInternet;
  this.tipoTeclado = tipoTeclado;
  this.possuiCamera = possuiCamera;
  this.enviarSMS = function(mensagem){
    console.log(`Mensagem: ${mensagem}`);
  }
  Telefone.call(this, modelo, marca, anoFabricacao);
}

function Smartphone(modelo, marca, anoFabricacao, memInterna, tipoTeclado){
  Celular.call(this, modelo, marca, anoFabricacao, memInterna, acessoInternet=true, tipoTeclado, possuiCamera=true);
  this.ativarWifi = function(){
    console.log("Wi-fi ativado, buscando redes próximas ...");
  }
  this.fotografar = function(){
    console.log(`A foto capturada foi enviada para a galeria`);
  }
}

telefoneA = new Telefone(modelo="XFS4411", marca="Telcom", anoFabricacao = 1992);
telefoneMaria = new TelefoneLinha("A3549F", "LostTech", 2002, "Sem fio", true, false);
celularJoao = new Celular("KMF0091", "TrashTech", 1999, "512kb", false, "Alfanumérico", false);
smartphoneBruna = new Smartphone("KJW9001", "HighTech", 2014, "16gb", "touch");



// Bloco de testes:
/* console.log(telefoneA);
telefoneA.telefonar(8878);

console.log(telefoneMaria);
telefoneMaria.telefonar(29834);

console.log(celularJoao);
celularJoao.enviarSMS("Esta é a mensagem");

console.log(smartphoneBruna);
smartphoneBruna.ativarWifi();
smartphoneBruna.fotografar();
smartphoneBruna.telefonar(8001);
smartphoneBruna.enviarSMS("Msg do smartphone"); */