
function filtrarNomes() {
    const texto = document.getElementById("nomes4").value;
    const nomes = texto.split(",").map(nome => nome.trim());
  
    const comA = nomes.filter(n => n.startsWith("A"));
    const comO = nomes.filter(n => n.endsWith("o"));
  
    let saida = "Começam com A: " + comA.join(", ") + "\n";
    saida += "Terminam com o: " + comO.join(", ");
    document.getElementById("resultado4").textContent = saida;
  }