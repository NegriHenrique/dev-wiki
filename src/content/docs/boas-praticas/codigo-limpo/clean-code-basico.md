---
title: "Clean Code Básico: Legibilidade e Simplicidade"
description: Aprenda os fundamentos de Clean Code focados em nomenclatura expressiva de variáveis e criação de funções pequenas e coesas.
sidebar:
  order: 1
  badge:
    text: Disponível
    variant: success
---

Clean Code (Código Limpo) é a prática de escrever código simples, direto e de leitura fluida, facilitando a manutenção e permitindo que qualquer membro da equipe compreenda a intenção do programa sem precisar decifrar comentários complexos.

:::note[A Regra de Ouro]
O código é lido com uma frequência dez vezes maior do que é escrito. Investir alguns minutos a mais para escolher um bom nome economiza horas de depuração no futuro.
:::

## Nomenclatura Expressiva de Variáveis

O nome de uma variável ou constante deve revelar imediatamente a sua intenção, o seu conteúdo e a unidade de medida esperada, sem abreviações obscuras.

### Evite Nomes Genéricos ou Mágicos

```javascript
// Ruim: O que significa 'd'? Dias? Dados? Distância?
const d = 86400;

// Bom: A intenção e a unidade ficam evidentes
const segundosEmUmDia = 86400;
```

```javascript
// Ruim: 'arr' e 'u' não expressam o propósito de negócio
const arr = ["maria", "joao"];
arr.forEach(u => console.log(u));

// Bom: Nomes no plural para coleções e singular no elemento
const usuariosAtivos = ["maria", "joao"];
usuariosAtivos.forEach(usuario => console.log(usuario));
```

<!-- TODO: Escrever a explicação sobre convenções de nomenclatura booleanas (ex: isActive, hasPermission, shouldRender) aqui -->

## Funções Pequenas e com Responsabilidade Única

Uma função ideal deve ser compacta e realizar apenas uma única tarefa bem definida. Quando uma função tenta fazer muitas coisas ao mesmo tempo, ela se torna difícil de testar e propensa a efeitos colaterais ocultos.

```javascript
// Ruim: Função realiza validação, salvamento e disparo de e-mail juntas
function processarUsuario(dados) {
  // validação...
  // salvar no banco...
  // enviar e-mail de confirmação...
}

// Bom: Responsabilidades isoladas em funções pequenas e testáveis
function validarDadosUsuario(dados) { /* ... */ }
function salvarUsuarioNoBanco(usuario) { /* ... */ }
function enviarEmailBoasVindas(email) { /* ... */ }
```

:::tip[Quantidade de Argumentos]
Prefira funções com 0 a 2 argumentos. Se você precisa passar muitos parâmetros, agrupe-os em um objeto descritivo de configuração.
:::

<!-- TODO: Escrever a explicação sobre o princípio DRY (Don't Repeat Yourself) e a regra dos Escoteiros (deixe o código mais limpo do que encontrou) aqui -->

## Tratamento de Erros e Retornos Antecipados (Early Return)

Evite níveis profundos de aninhamento de `if/else`. A técnica de *Early Return* (retorno antecipado) avalia condições de falha logo no início da função e encerra a execução prematuramente.

```javascript
// Bom: Retorno antecipado melhora a escaneabilidade
function calcularDesconto(preco, cupomValido) {
  if (!cupomValido) {
    return preco;
  }

  const taxaDesconto = 0.1;
  return preco * (1 - taxaDesconto);
}
```

<!-- TODO: Adicionar dicas sobre quando comentar e quando NÃO comentar código aqui -->

## Leituras Recomendadas e Referências

* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) — Guia oficial de estilo e convenções adotado pela engenharia do Google.
* [Martin Fowler: Refactoring](https://martinfowler.com/books/refactoring.html) — Artigos e conceitos fundamentais sobre evolução sustentável e clareza de código.
<!-- TODO: Adicionar resenhas e links para artigos da comunidade sobre princípios SOLID aplicados aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
