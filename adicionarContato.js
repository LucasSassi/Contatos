import { contatos, exibirMenu, prompt } from "./atvdd.js";

export function adicionarContato() {
  console.log("Qual o nome do contato que deseja adicionar?: ");
  let nome = prompt("> ");
  console.log("Qual o telefone do contato que deseja adicionar? (com DDD): ");
  let telefone = prompt("> ");

  if (isNaN(telefone)|| telefone.length != 11) {
    console.clear();
    console.log("Digite um numero valido!!");
    adicionarContato();
  }

  let telefoneFormatado = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2, 7) + "-" + telefone.substring(7);

  console.log("Qual o email do contato que deseja adicionar?: ");
  let email = prompt("> ");
  const id = Date.now();

  contatos.push({
    id,
    nome,
    telefone: telefoneFormatado,
    email,
  });

  console.clear();
  console.log("===Contato adicionado com sucesso!!===");
  exibirMenu();
}