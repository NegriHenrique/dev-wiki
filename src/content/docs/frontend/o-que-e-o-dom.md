---
title: O Que É o DOM (Document Object Model)?
description: Compreenda como os navegadores transformam código HTML em uma árvore interativa de objetos manipuláveis via JavaScript.
---

O **DOM (Document Object Model)** é a representação em memória estruturada em formato de árvore que o navegador cria a partir do código HTML da página, permitindo que linguagens de programação como JavaScript leiam, alterem, adicionem ou removam elementos visuais e estilos em tempo real.

:::note[HTML vs DOM]
O HTML é apenas o texto inicial enviado pelo servidor. O DOM é o modelo vivo em execução na memória do navegador. Quando o JavaScript modifica a tela, ele interage diretamente com o DOM, e não com o arquivo HTML original.
:::

## Como o Navegador Constrói a Árvore do DOM

Quando você acessa uma página web, o navegador executa um processo ordenado de conversão:

1. **Bytes para Caracteres**: Lê o código bruto enviado pela rede.
2. **Tokens**: Identifica tags HTML (`<html>`, `<body>`, `<h1>`, `<p>`).
3. **Nós (Nodes)**: Cria objetos em memória para cada tag, atributo e trecho de texto.
4. **Árvore do DOM**: Organiza esses nós em uma hierarquia de pais, filhos e irmãos (*parent-child relationships*).

<!-- TODO: Inserir ilustração ou diagrama visual da hierarquia da árvore do DOM aqui -->

## Manipulando o DOM com JavaScript

Com o JavaScript, podemos selecionar nós do DOM e escutar eventos do usuário (como cliques de botão):

```javascript
// 1. Seleciona um elemento na árvore do DOM
const botao = document.querySelector("#botao-enviar");
const paragrafo = document.querySelector(".mensagem-status");

// 2. Escuta eventos e altera o conteúdo dinamicamente
botao.addEventListener("click", () => {
  paragrafo.textContent = "Dados enviados com sucesso!";
  paragrafo.classList.add("sucesso");
});
```

<!-- TODO: Escrever a explicação sobre os métodos modernos de seleção (querySelector, querySelectorAll) vs métodos legados (getElementById) aqui -->

## Eventos e Delegação de Eventos

<!-- TODO: Escrever a explicação sobre o ciclo de propagação de eventos (Capturing e Bubbling) no DOM aqui -->

:::caution[Performance e Reflow]
Alterações frequentes e desordenadas no DOM forçam o navegador a recalcular posições visuais na tela (*reflow* e *repaint*), o que pode causar lentidão perceptível na experiência do usuário.
:::
