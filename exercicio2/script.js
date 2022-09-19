const userInput=Number(prompt("Digite um número para saber sua tabuada."))
let calculadora = [1,2,3,4,5,6,7,8,9,10]
for (let i in calculadora){
  
  console.log(`${userInput} x ${calculadora[i]}: (${calculadora[i]*userInput})`)
}
