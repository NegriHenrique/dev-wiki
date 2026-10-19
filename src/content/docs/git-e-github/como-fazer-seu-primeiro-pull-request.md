---
title: Como Fazer Seu Primeiro Pull Request
description: Guia prático passo a passo para enviar sua primeira contribuição em um projeto open source no GitHub.
---

Um Pull Request (PR) é uma solicitação formal para incorporar alterações feitas no seu repositório bifurcado (*fork*) de volta ao repositório principal de um projeto. É o mecanismo central de colaboração em código aberto em todo o mundo.

:::tip[Sem Medo de Contribuir]
Ninguém nasce sabendo contribuir para o open source. Erros em Pull Requests fazem parte do aprendizado e serão apontados gentilmente pelos revisores durante o code review.
:::

## 1. Bifurcar (Fork) e Clonar

O primeiro passo para contribuir em um projeto no qual você não possui permissão de escrita direta é criar a sua própria cópia remota:

1. Clique no botão **Fork** no canto superior direito do repositório no GitHub.
2. Clone o repositório bifurcado para o seu computador:

```bash
# Clone seu fork pessoal
git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git

# Acesse o diretório do projeto
cd nome-do-repositorio
```

<!-- TODO: Escrever a explicação sobre como configurar o repositório original como 'upstream' remoto aqui -->

## 2. Criar uma Nova Branch

Nunca faça alterações diretamente na branch `main`. Crie uma branch específica para cada tarefa:

```bash
# Cria e muda para a nova branch
git checkout -b docs/corrige-guia-git
```

:::caution[Atenção aos Nomes de Branch]
Escolha nomes curtos e descritivos que resumam a mudança, como `fix/link-quebrado` ou `feat/artigo-api`. Evite nomes genéricos como `minha-branch` ou `teste`.
:::

## 3. Realizar Alterações e Assinar o Commit (DCO)

Edite os arquivos necessários no seu editor de código. Em muitos projetos open source (incluindo a nossa Dev Wiki), a assinatura do autor via **Developer Certificate of Origin (DCO)** é obrigatória através da flag `-s`:

```bash
# Adiciona os arquivos modificados
git add .

# Grava o commit com mensagem descritiva e assinatura DCO
git commit -s -m "docs: adiciona guia prático de primeiro pull request"
```

<!-- TODO: Escrever a explicação sobre a convenção de Conventional Commits (feat, fix, docs, refactor) aqui -->

## 4. Publicar a Branch e Abrir o Pull Request

Envie sua branch recém-criada para o seu repositório no GitHub:

```bash
git push origin docs/corrige-guia-git
```

Após o envio:

1. Acesse a página do repositório original no GitHub.
2. Você verá um aviso destacado sugerindo **Compare & pull request**. Clique no botão.
3. Preencha o formulário descrevendo com precisão o que foi alterado e por qual motivo.
4. Clique em **Create pull request**.

<!-- TODO: Escrever a explicação sobre como responder aos comentários da revisão de código (Code Review) e atualizar o PR aqui -->

## Resumo do Ciclo de Vida do PR

:::note[Fluxo Resumido]
Fork ➔ Clone ➔ Nova Branch ➔ Alterações ➔ Commit Assinado (`-s`) ➔ Push ➔ Abrir PR no GitHub ➔ Revisão da Comunidade.
:::

## Leituras Recomendadas e Referências

* [Documentação Oficial do GitHub: Como Criar um Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) — O passo a passo oficial mantido pelo GitHub.
* [Primeiros Passos no Open Source (Open Source Guides)](https://opensource.guide/pt/how-to-contribute/) — Excelente guia sobre etiqueta, comunicação e cultura em projetos colaborativos abertos.
<!-- TODO: Adicionar recomendações de ferramentas que facilitam o fluxo de PRs (como GitHub CLI - gh) aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? Toda correção é bem-vinda, sinta-se à vontade para enviar seu Pull Request!
:::
