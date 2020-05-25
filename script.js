function Logar() {
    var temp = document.getElementById("lgnome").value;
    var nome = document.getElementById("lgsenha").value;

    if (document.getElementById("lgnome").value == "") {
        alert("Campo nome e obrigatorio!");
    } else if (document.getElementById("lgsenha").value == "") {
        alert("Campo senha e obrigatorio!");
    }

    if (document.getElementById("lgnome").value != "" && document.getElementById("lgsenha").value != "") {
        if (document.getElementById("lgnome").value == "Admin") {
            if (document.getElementById("lgsenha").value == "Admin") {
                alert("Login Realizado com sucesso!");
                var link_acesso = document.getElementById("login");
                window.location.replace("coleta_sinais.html");
            }
        } else {
            alert("Nome de usuario ou senha incorreto!");
            document.getElementById("lgnome").value = "";
            document.getElementById("lgsenha").value = "";
        }
    }
}


function Coletadesinais() {
    var prerArterial = document.getElementById("prerArterial");
    var temp = document.getElementById("temp");
    var nome = document.getElementById("nome");
    var saturacao = document.getElementById("saturacao");
    var glicemia = document.getElementById("glicemia");
    var freRespiratoria = document.getElementById("freRespiratoria");
    var freCardiaca = document.getElementById("freCardiaca");

    var dados = [];

    if (document.getElementById("nome").value == "") {
        alert("Campo nome deve ser preenchido");
    } else if (document.getElementById("temp").value == "") {
        alert("Campo temperatura deve ser preenchido");
    } else if (document.getElementById("prerArterial").value == "") {
        alert("Campo pressão arterial deve ser preenchido");
    } else if (document.getElementById("saturacao").value == "") {
        alert("Campo saturacao deve ser preenchido");
    } else if (document.getElementById("glicemia").value == "") {
        alert("Campo glicemia deve ser preenchido");
    } else if (document.getElementById("freRespiratoria").value == "") {
        alert("Campo frequencia respiratoria deve ser preenchido");
    } else if (document.getElementById("freCardiaca").value == "") {
        alert("Campo frequencia cardiaca deve ser preenchido");
    } else {
        alert("Checagem realizada com sucesso!");
        document.getElementById("prerArterial").value = "";
        document.getElementById("temp").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("saturacao").value = "";
        document.getElementById("glicemia").value = "";
        document.getElementById("freRespiratoria").value = "";
        document.getElementById("freCardiaca").value = "";
    }
}