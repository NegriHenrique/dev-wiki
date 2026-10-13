---
title: Estruturas de Repetição
description: Aprenda como funcionam as estruturas de repetição for e while para automatizar tarefas repetitivas no seu código.
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
