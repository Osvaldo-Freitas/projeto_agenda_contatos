const form = document.getElementById('form-agenda');
const nome = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if(nome.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já existe nessa lista!`);
    
    }  else {
    nome.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;
}
    inputNomeContato.value = '';
    inputTelContato.value = '';
}
function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}
