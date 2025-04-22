function exibirLista() {
    const texto = document.getElementById("lista1").value;
    const array = texto.trim().split(" ");
    document.getElementById("resultado1").textContent = JSON.stringify(array, null, 2);
  }