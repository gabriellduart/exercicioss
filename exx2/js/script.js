function verificarFinal() {
    const palavra = document.getElementById("palavra2").value;
    const final = document.getElementById("final2").value;
    const resultado = palavra.endsWith(final);
    document.getElementById("resultado2").textContent = "Resultado: " + resultado;
  }