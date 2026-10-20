---
title: Estruturas de Repetição
description: Aprenda como funcionam as estruturas de repetição for e while para automatizar tarefas repetitivas no seu código.
sidebar:
  order: 2
  badge:
    text: Disponível
    variant: success
---

Estruturas de repetição (também chamadas de loops ou laços) permitem executar o mesmo bloco de código repetidas vezes enquanto uma condição lógica específica for verdadeira, evitando a duplicação desnecessária de instruções.

:::note[Por Que Usar Loops?]
Sem estruturas de repetição, imprimir números de 1 a 100 exigiria escrever 100 linhas manuais. Com um loop, isso é resolvido com apenas 3 linhas legíveis.
:::

## O Laço `for`

O laço `for` é tipicamente utilizado quando você sabe antecipadamente a quantidade de vezes que o bloco de instruções deve ser executado ou quando precisa percorrer todos os itens de uma lista ou coleção de dados.

```javascript
// Exemplo de loop for contando de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log(`Número atual: ${i}`);
}
```

<!-- TODO: Escrever a explicação sobre as três partes do cabeçalho do for (inicialização, condição de parada e incremento) aqui -->

<!-- TODO: Adicionar exemplo prático percorrendo arrays com for clássico e for...of aqui -->

## O Laço `while`

O laço `while` é ideal quando a quantidade de repetições não é previamente conhecida, dependendo exclusivamente de uma condição dinâmica que pode mudar a qualquer instante durante a execução.

```javascript
// Exemplo de loop while com decremento
let tentativas = 3;

while (tentativas > 0) {
  console.log(`Tentativas restantes: ${tentativas}`);
  tentativas--;
}
```

:::caution[Cuidado com Loops Infinitos]
Se a condição de parada do `while` nunca se tornar falsa (por esquecimento de incrementar ou atualizar a variável de controle), o programa entrará em loop infinito e travará o navegador ou servidor.
:::

<!-- TODO: Escrever a explicação e exemplo de loop do...while comparando sua execução mínima de uma vez com o while tradicional aqui -->

## Comandos de Controle de Fluxo: `break` e `continue`

Comandos de controle permitem alterar o fluxo natural de repetições quando determinadas condições são atendidas:

* **`break`**: Interrompe e encerra imediatamente a execução do loop.
* **`continue`**: Pula a iteração atual e avança diretamente para a próxima rodada.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula o número 3
  }
  console.log(i); // Imprime 1, 2, 4, 5
}
```

<!-- TODO: Escrever a explicação detalhada com casos de uso comuns de break em buscas em listas aqui -->

## Leituras Recomendadas e Referências

* [MDN Web Docs: Laços e Iterações](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration) — Guia aprofundado da Mozilla sobre todas as estruturas de repetição em JavaScript.
* [W3Schools: JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp) — Exemplos interativos para praticar a sintaxe diretamente no navegador.
<!-- TODO: Adicionar recomendações de artigos e desafios de lógica (ex: Beecrowd, LeetCode) sobre loops aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
