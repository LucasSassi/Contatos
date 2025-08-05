import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function atualizarContato() {
  console.clear();
  console.log("=========CONTATOS=========");
  contatos.forEach((contato) => {
    console.log(
      `ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
    );
  });

  console.log("Qual o ID do contato que deseja atualizar?: ");
  let idSelecionado = prompt("> ");
  idSelecionado = parseInt(idSelecionado);

  const contatoParaAtualizar = contatos.find(
    (contato) => contato.id === idSelecionado
  );

  if (!contatoParaAtualizar) {
    console.clear();
    console.log("Contato não encontrado. Por favor, digite um ID válido.");
    prompt("Pressione Enter para continuar...");
    return;
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.nome}) Digite o NOVO nome do contato (ou deixe em branco): `
  );
  let novoNome = prompt("> ");

  if (novoNome !== "") {
    contatoParaAtualizar.nome = novoNome;
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.telefone}) Digite o NOVO telefone do contato (ou deixe em branco): `
  );
  let novoTelefone = prompt("> ");

  const telefoneFormatado2 = `(${novoTelefone.substring(0,2)})${novoTelefone.substring(2, 7)}-${novoTelefone.substring(7)}`;
  contatoParaAtualizar.telefone = telefoneFormatado2;

  if (novoTelefone !== "") {
    contatoParaAtualizar.telefone = telefoneFormatado2;
  }

  console.log(
    `(Atual: ${contatoParaAtualizar.email}) Digite o NOVO email do contato (ou deixe em branco): `
  );
  let novoEmail = prompt("> ");

  if (novoEmail !== "") {
    contatoParaAtualizar.email = novoEmail;
  }

  console.clear();
  console.log(
    `===Contato: ${contatoParaAtualizar.nome}, editado com sucesso!! `
  );
  exibirMenu();
}
