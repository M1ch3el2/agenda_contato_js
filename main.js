const form = document.getElementById('form-agenda')
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomes = document.getElementById('nome');
    const inputTelefones = document.getElementById('telefone');
    const foot = document.getElementById('foot');

    foot.style.display = 'none';

    if (nomes.includes(inputNomes.value)) {
        alert(`O nome ${inputNomes.value} já foi inserido`);
    } else {
        nomes.push(inputNomes.value);
        telefones.push(parseFloat(inputTelefones.value));

        let linha = '<tr>';
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputTelefones.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomes.value = '';
    inputTelefones.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}