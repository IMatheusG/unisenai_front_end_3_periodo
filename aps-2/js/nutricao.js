function validaPeso(peso) {
    if (peso <= 0) {
        return 1;
    } else if (peso >= 1000){
        return 2;
    }
    return 0;
}

function validaAltura(altura) {
    if (altura <= 0) {
        return 1;
    } else if (altura >= 3){
        return 2;
    }
    return 0;
}

function validaPaciente(nome, peso, altura, gordura) {
    erros = [];

    if (nome === '') {
        erros.push('O nome não pode estar em branco');
    }
    if (gordura === '') {
        erros.push('A gordura não pode estar em branco');
    }
    if (peso === '') {
        erros.push('O peso não pode ser em branco');
    } else {
        status = validaPeso(parseFloat(peso));
        if (status == 1){
            erros.push('O peso não pode ser menor ou igual a zero!');
        } else if (status == 2){
            erros.push('O peso não pode ser maior que 1000Kg!');
        }
    }
    if (altura === '') {        
        erros.push('A altura não pode estar em branco');
    } else {
        status = validaAltura(parseFloat(altura));
        if (status == 1){
            erros.push('A altura não pode ser menor ou igual a zero!');
        } else if (status == 2){
            erros.push('A altura não pode ser maior que três metros!');
        }
    }

    return erros;
}

function exibeErros(erros) {
    lista = document.getElementById('erros');
    lista.innerHTML = '';
    for (i = 0; i < erros.length; i++) {
        
        item = `
            <b>${erros[i]}</b>
        `;        
        lista.innerHTML += item;
    }
}

function adicionaPaciente(nome, peso, altura, gordura) {
    tabela = document.getElementById('tabela');    
    
    altura = parseFloat(altura.replace(',','.')).toFixed(2);
    peso = parseFloat(peso.replace(',','.')).toFixed(2);

    imc = (peso / (altura * altura)).toFixed(2);

    tr = `
        <tr>
            <td class="nome">${nome}</td>
            <td class="peso">${peso}</td>
            <td class="altura">${altura}</td>
            <td class="gordura">${gordura}</td>
            <td class="imc">${imc}</td>
        </tr>
    `;

    tabela.innerHTML += tr;
}

function limpaFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('gordura').value = '';
    document.getElementById('erros').innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function(){
    pacientes = document.querySelectorAll('tbody tr');

    for (i = 0; i < pacientes.length; i++) {
        peso = parseFloat(pacientes[i].querySelector('.peso').innerHTML);
        altura = parseFloat(pacientes[i].querySelector('.altura').innerHTML);
        imc = peso / (altura * altura);
        pacientes[i].querySelector('.imc').innerHTML = imc.toFixed(2);
    }

    document.getElementById('adicionar').addEventListener('click', function() {
        nome = document.getElementById('nome').value;
        peso = document.getElementById('peso').value;
        altura = document.getElementById('altura').value;
        gordura = document.getElementById('gordura').value;

        erros = validaPaciente(nome, peso, altura, gordura);

        exibeErros(erros);

        if (erros.length === 0) {
            adicionaPaciente(nome, peso, altura, gordura);
            limpaFormulario();
        }
    });
})
