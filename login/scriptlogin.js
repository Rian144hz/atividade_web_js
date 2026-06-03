const login = document.getElementById('tela_login');

login.addEventListener('submit', function(event) {
    
    const usuario = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(usuario == "rianmatheus11@gmail.com" && senha == "matheuslindo123"){
    alert("Senha correta!");
    }else{
    alert("Senha incorreta!");
    }
});

sessionStorage.setItem("token", "jwt123");