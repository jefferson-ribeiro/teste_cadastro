function cadastro() {
    //Variaveis obrigatorias
    var no = document.getElementById('txtnom')
    var cpf = document.getElementById('txtcpf')
    var end = document.getElementById('txtend')
    var num = document.getElementById('txtnum')
    var cel = document.getElementById('txtcel')
    //Outras variaveis
    var rg = document.getElementById(`txtrg`)
    var sexm = document.getElementById(`masc`)
    var sexf = document.getElementById(`fem`)
    var bair = document.getElementById(`txtbair`)
    var cid = document.getElementById(`txtcid`)
    var est = document.getElementById(`txtest`)
    var cep = document.getElementById(`txtcep`)
    var tel = document.getElementById(`txtfixo`)
    //Variavel resultado
    var res = document.getElementById(`resultado`)

    // Converter em número
    /* var ncpf = Number(cpf.value)
    var nnum = Number(num.value)
    var ncel = Number(cel.value)
    var nrg = Number(rg.value)
    var ncep = Number(cep.value)
    var ntel = Number(tel.value)
    */

    //Função de Validação de CPF
    function validaCPF(cpf) {

        if(cpf.length != 11) {
        return false;
        } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
    
            var soma = 0
            for (var i = 10; i > 1; i --) {
                soma += numeros.charAt(10 - i) * i;
            }
            var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    
            //validação do primeiro digito
            if(resultado != digitos.charAt(0)) {
                return false;
            }
           soma = 0;
           numeros = cpf.substring(0, 10);
    
           for (var k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) *k;
           }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    
            //validação do segundo digito
            if (resultado != digitos.charAt(1)) {
                return false;
            }
            return true;
        }
    }

    //Validação dos campos
    if (no.value.length == 0 || cpf.value.length == 0 || end.value.length == 0 || num.value.length == 0 || cel.value.length == 0) {
        window.alert(`Preencha os itens obrigatórios*!`)
        no.style.backgroundColor = "#ff0000"
        cpf.style.backgroundColor = "#ff0000"
        end.style.backgroundColor = "#ff0000"
        num.style.backgroundColor = "#ff0000"
        cel.style.backgroundColor = "#ff0000"

    } else if (validaCPF(cpf.value) == false) {
        window.alert(`CPF inválido!`)
    } else {
        // Checagem de sexo
        if (sexm.checked) {
            var genero = "Masculino"
        } else if (sexf.checked) {
            var genero = "Feminino"
        } else {
            var genero = "Indefinido"
        }
        // Mostrar o resultado
        window.alert(`${no.value} o seu cadastro foi efetuado com sucesso!`)
        res.innerHTML = `<p><strong>Nome: </strong>${no.value}</p>`
        res.innerHTML += `<p><strong>CPF: </strong>${cpf.value}</p>`
        res.innerHTML += `<p><strong>RG: </strong>${rg.value}</p>`
        res.innerHTML += `<p><strong>Sexo: </strong>${genero}</p>`
        res.innerHTML += `<p><strong>Endereço: </strong>${end.value} <strong>Número: </strong>${num.value}</p>`
        res.innerHTML += `<p><strong>Bairro: </strong>${bair.value}</p>`
        res.innerHTML += `<p><strong>Cidade: </strong>${cid.value} <strong>Estado: </strong>${est.value}</p>`
        res.innerHTML += `<p><strong>CEP: </strong>${cep.value}</p>`
        res.innerHTML += `<p><strong>Telefone: </strong>${tel.value} <strong>Celular: </strong>${cel.value}</p>`
    }
}
