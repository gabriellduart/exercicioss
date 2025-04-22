function verificaAdmin() {
    const email = document.getElementById("email3").value.trim();
    if (email.startsWith("admin")) {
      alert("Bem-vindo, administrador!");
    } else {
      alert("Acesso comum.");
    }
  }