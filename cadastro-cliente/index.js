function capturarDados() {
  const nomePet = document.getElementById('txtnome').value;
  const nomeProprietario = document.getElementById('txtprop').value;
  const raca = document.getElementById('dog-breed').value;

  // Captura o valor do sexo selecionado
  const sexo = document.querySelector('input[name="radsex"]:checked').id === 'mach' ? 'Macho' : 'Fêmea';

  const rua = document.querySelector('input[name="rua"]').value;
  const numero = document.querySelector('input[name="numero"]').value;
  const bairro = document.querySelector('input[name="bairro"]').value;
  const cidade = document.querySelector('input[name="cidade"]').value;
  const servico = document.getElementById('servico').value;
  const telefone = document.getElementById('telefone').value;

  // Cria um objeto com os dados capturados
  const dadosPet = {
    nomePet,
    nomeProprietario,
    raca,
    sexo,
    endereco: {
      rua,
      numero,
      bairro,
      cidade
    },
    servico,
    telefone
  };

  // Exibe os dados no console
  console.log('Dados do Pet cadastrados:', dadosPet);

  // Adiciona aqui qualquer outra lógica que você deseja executar ao capturar os dados
}

// Função para limpar os campos do formulário
function limparFormulario() {
  document.getElementById('cadastroPetForm').reset();
}

// Adiciona o evento de clique ao botão "Cadastrar!"
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault(); // Evita o envio do formulário
  capturarDados(); // Chama a função para capturar os dados
  limparFormulario(); // Limpa os campos do formulário
});