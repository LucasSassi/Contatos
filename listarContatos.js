import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function listarContatos() {
  console.clear();

  if (contatos.length == 0) {
    console.log("===NENHUM contato registrado!!===");
    exibirMenu();
  } else {
    console.log("=========Contatos=========");

    contatos.forEach((contato) => {
      console.log(
        `ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
      );
    });

    console.log("Pressione Enter para sair");
    prompt("");
    console.clear();
    exibirMenu();
  }
}
