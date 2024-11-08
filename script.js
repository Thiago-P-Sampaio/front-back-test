document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("festaForm");
    const Inome = document.getElementById("nome");
    const Ipresente = document.getElementById("presente");

    // Função para cadastrar
    function cadastrar() {
        const dados = {
            nome: Inome.value,
            presente: Ipresente.value
        };

        
        fetch("http://localhost:8080/api/new", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: Inome.value,
                presente: Ipresente.value
            }) 
        })
        .then(function (res) {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json(); 
        })
        .then(function (data) {
            console.log(data); 
        })
        .catch(function (error) {
            console.log('Houve um problema com a requisição Fetch:', error); 
        });
    }

 
    function limpar() {
        Inome.value = "";
        Ipresente.value = "";
    }

    // Adiciona um evento ao formulário para o envio
    formulario.addEventListener('submit', function (event) {
        if(presente.value != "", nome.value != ""){
            event.preventDefault(); 
            cadastrar()
            limpar();
        }
        
    });
});