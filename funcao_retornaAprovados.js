// Array utilizado como teste no exercício
/* const turma = [    
  {aluno: 'Aline', nota:2},
  {aluno: 'Adam', nota:9},
  {aluno: 'Bruno', nota:4},
  {aluno: 'Beatriz', nota:3},
  {aluno: 'Camila', nota:6},
  {aluno: 'Carlos', nota:10},
  {aluno: 'David', nota:0},
  {aluno: 'Eduarda', nota:8},
  {aluno: 'Francisco', nota:7}, 
  {aluno: 'Greta', nota:5}
] */

// Funcao retornaAprovados(array_turma) DEVERÁ receber um ARRAY de objetos (turma de alunos) e retornar um ARRAY de aprovados 
function retornaAprovados(turma){
  const aprovados = turma.filter(function(aluno){
    return aluno.nota >= 6;
  })
  return aprovados
}

// console.log(turma); visualizar o array da turma (todos alunos)
// console.log(retornaAprovados(turma)); visualizar o array com apenas os alunos aprovados