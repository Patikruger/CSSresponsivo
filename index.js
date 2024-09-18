
/*push = Adiciona item na ultima posicao
const tarefas = ['estudar', 'ler', 'pintar', 'jogar', 'andar'];
tarefas.push('cantar');
console.log(tarefas);


//pop = Remove da Ultima posicao
const nomes = ['Ana', 'Maria', 'Joana'];
nomes.pop();
console.log(nomes);


//find = Percorre o array e devolve o primeiro item que encontrar na condicao passada.
const cadastro = [
  {nome: 'Paulo', valor: 300},
  {nome: 'Larissa', valor: 200},
  {nome: 'Marina', valor: 455},
  {nome: 'Vitor', valor: 290},
  {nome: 'Henrique', valor: 10}

]

const selecionar = cadastro.find((selecionar) => {
  return selecionar.valor >= 200

})
console.log(selecionar);


//filter = Percorre e devolve uma lista com a condicao passada.
const cores = [
  {cor: 'Branco', valor: 30},
  {cor: 'Vermelho', valor: 20},
  {cor: 'Roxo', valor: 50},
  {cor: 'Cinza', valor: 100},
  {cor: 'Amarelo', valor: 40}

]

const color = cores.filter((color)=> {
 return color.valor <= 30

})

console.log(color);


//findIndex = Devolve a posicao da condicao passada.
const lista = [
  {cor: 'Branco', valor: 30},
  {cor: 'Vermelho', valor: 20},
  {cor: 'Roxo', valor: 50},
  {cor: 'Cinza', valor: 100},
  {cor: 'Amarelo', valor: 40}

]

const busca = lista.findIndex((busca) => {
  return busca.cor === 'Cinza'

})

console.log(busca);


//map = Percorre o array e devolve um novo array com a condicao passada.
const pessoas = [
  {nome: 'Paulo', valor: 300},
  {nome: 'Larissa', valor: 200},
  {nome: 'Marina', valor: 455},
  {nome: 'Vitor', valor: 290},
  {nome: 'Henrique', valor: 10}

]

const user = pessoas.map((user)=> {
  return {
    
    valor: user.valor
  }
})

console.log(user);*/


/*const data = [
  {nome: 'Patricia Kruger', idade:36, salario: 2000, ativo:true, equipe:'Front-end', bonus: 0},
  {nome: 'Jessica Andrade', idade:28, salario: 3000, ativo:true, equipe:'Back-end', bonus: 0},
  {nome: 'Mateus Rocha', idade:34, salario: 4000, ativo:true, equipe:'FullStack', bonus: 0},
  {nome: 'Henrique Oliveira', idade:29, salario: 1000, ativo:true, equipe:'Mobile', bonus: 0},
  {nome: 'Junior Albuquerque', idade:23, salario: 5000, ativo:false, equipe:'React', bonus: 0},
]

const user = data.find((user) => {
 return user.idade >= 20
 
})

console.log(user);*/

/*let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

/*if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}*/


let calculadora = [1,2,3,4,5]

calculadora[0] = 'teste'
console.log(calculadora)