const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let contagem = 1
    for (let pais of maioresPaises) {
      let ranking = `${contagem} ${pais}` 
      console.log (ranking)
      contagem += 1
    }