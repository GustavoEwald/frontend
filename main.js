$(document).ready(function(){
  const adicionar = $('#btn-add');
  let cont = 0;
  
  $('form').submit(function(e){
    e.preventDefault();
    const tarefa = $('#nova-tarefa');
    
    let classe_aleatoria = rndClassId();
    $(`
    <li id="${classe_aleatoria}">
      <span>${tarefa.val()}</span>
      <div id="btn-acoes">
        <button class="check" type="button"><img src="./images/check.png" alt="marcar"></button>
        <button class="remove" type="button"><img src="./images/desmarcar.png" alt="desmarcar"></button>
      </div>
    </li>
    `).appendTo('#lst-tarefas');
    tarefa.val('');
  })
  
  function rndClassId(){
    let rndClassId = `rnd-classId-${cont}`;
    cont++;
    return rndClassId;
  }

  $('ul').on('click', '.check', function(){
    let id_li = $(this).parents('li').attr("id");
    let tarefa = $(`#${id_li} span`);
    if(tarefa.hasClass("checked")){
      tarefa.removeClass();
    }else{
      tarefa.addClass('checked');
    }
  })

  $('ul').on('click', '.remove', function(){
    let id_li = $(this).parents('li').attr("id");
    let apagar = window.confirm("Tem certeza que deseja remover esta tarefa?");
    if(apagar){
      $(`#${id_li}`).remove();
    }
  })
})
