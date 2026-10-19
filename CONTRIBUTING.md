# Guia de Contribuição: Bem-vindo(a) à Dev Wiki! 🚀

Em primeiro lugar, muito obrigado por dedicar seu tempo para contribuir! Este é um acervo de conhecimento técnico aberto feito **pela** comunidade e **para** a comunidade.

Não importa se você é um desenvolvedor sênior ou se está escrevendo sua primeira linha de código hoje: **toda contribuição é bem-vinda**. Você pode ajudar escrevendo novos artigos, revisando textos existentes, adicionando exemplos práticos ou esclarecendo dúvidas da comunidade.

---

## 🧭 Onde Começar?

* **Iniciantes no Open Source**: Procure por tarefas marcadas com o selo `good first issue` ou `help wanted` na aba de Issues. Elas foram preparadas especialmente para quem está dando os primeiros passos.
* **Propostas e Dúvidas**: Se você quer propor um novo tópico ou debater ideias antes de escrever, utilize a aba **GitHub Discussions**. Reservamos as **Issues** para tarefas acionáveis e reporte de problemas.

---

## 🛠️ Passo a Passo para Contribuir

Nosso projeto utiliza o **Astro Starlight** para geração da documentação estática.

### 1. Faça o Fork e Clone

Faça o fork do projeto na sua conta do GitHub e clone para o seu computador:

```bash
git clone https://github.com/SEU_USUARIO/dev-wiki.git
cd dev-wiki
```

### 2. Crie uma Branch

Nunca faça alterações diretamente na branch `main`. Crie uma branch com um nome descritivo:

```bash
git checkout -b docs/meu-novo-artigo
```

### 3. Instale as Dependências e Execute o Projeto

Certifique-se de ter o Node.js instalado (v18+) e execute:

```bash
npm install
npm run dev
```

O servidor local iniciará e estará disponível em `http://localhost:4321`. As alterações salvas nos arquivos serão atualizadas em tempo real no navegador.

### 4. Escreva ou Edite o Conteúdo

Os artigos da wiki ficam localizados no diretório `src/content/docs/`. Crie ou edite arquivos `.md` (Markdown) ou `.mdx` seguindo rigorosamente o nosso **Padrão de Escrita**.

### 5. Assine seu Commit (DCO)

Este projeto adota o **Developer Certificate of Origin (DCO)**. Todos os commits devem conter a assinatura de confirmação de autoria através da flag `-s`:

```bash
git commit -s -m "docs: adiciona artigo sobre introdução ao Git"
```

### 6. Abra o Pull Request

Envie sua branch para o seu fork no GitHub:

```bash
git push origin docs/meu-novo-artigo
```

Em seguida, acesse o repositório principal no GitHub e clique no botão **Compare & pull request**. Descreva com clareza o que foi adicionado ou modificado.

---

## 📝 Padrão de Escrita (Style Guide)

Para garantir que o conteúdo seja acessível, claro e rápido de assimilar, seguimos diretrizes editoriais padronizadas:

1. **Frontmatter Obrigatório**: Todo arquivo deve iniciar com bloco YAML contendo `title` e `description`. O `title` atuará automaticamente como o Heading 1 (H1) da página.
2. **Estrutura de Cabeçalhos**: O corpo do texto deve iniciar com títulos H2 (`##`). Nunca use H1 (`#`) no corpo do markdown.
3. **Pirâmide Invertida**: Vá direto ao ponto. Apresente a conclusão ou o conceito fundamental logo no primeiro parágrafo antes de detalhar o funcionamento técnico.
4. **Escaneabilidade e Clareza**: Escreva parágrafos curtos, frases em voz ativa e divida conceitos em listas numeradas ou tópicos com marcadores. Evite jargões desnecessários.
5. **Asides (Admonitions)**: Destaque pontos cruciais usando os blocos visuais do Starlight:
   * `:::note` para notas informativas contextuais.
   * `:::tip` para dicas práticas e atalhos úteis.
   * `:::caution` para alertas de erros frequentes e armadilhas.
6. **Blocos de Código**: Todo bloco de código delimitado por crases triplas deve conter a linguagem explícita (ex: `javascript`, `bash`, `python`, `html`).
7. **Leituras Recomendadas e Humildade Comunitária**: Todo artigo deve encerrar com uma seção `## Leituras Recomendadas e Referências`, trazendo links úteis para aprofundamento e o aviso padrão de que estamos aprendendo juntos e correções são sempre bem-vindas.

---

## 📄 Modelo Oficial de Artigo

Copie o modelo abaixo ao criar um novo artigo na pasta `src/content/docs/`:

````markdown
---
title: Título Claro e Objetivo do Assunto
description: Breve resumo em uma ou duas frases explicando o que o leitor aprenderá.
---

Explicação direta do conceito em um ou dois parágrafos curtos, apresentando o que é e qual problema resolve.

## O Que É e Por Que Importa

Apresente a definição essencial e os casos de uso práticos.

:::tip
Adicione aqui uma dica rápida que economize tempo ou facilite o aprendizado.
:::

## Exemplo Prático

Apresente exemplos diretos com comentários explicativos no código:

```javascript
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log(calcularMedia(8, 10)); // Saída: 9
```

:::caution
Alerte sobre comportamentos inesperados ou equívocos comuns que iniciantes costumam cometer.
:::

## Leituras Recomendadas e Referências

* [Nome da Referência ou Artigo](link-para-artigo-ou-documentacao-oficial) - Breve descrição de por que vale a leitura.

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O propósito deste projeto é transmitir conhecimento e aprender em conjunto — não somos especialistas supremos nos tópicos, mas pessoas apaixonadas por tecnologia querendo se ajudar mutuamente. Encontrou algum erro, imprecisão ou tem uma explicação melhor? Toda contribuição e correção é super bem-vinda via Pull Request!
:::
````

---

## ⚖️ Licenciamento do Conteúdo

Ao submeter contribuições para este repositório, você concorda que:

* O conteúdo em texto e documentação é licenciado sob **Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)**.
* Os trechos e exemplos de código-fonte são licenciados sob a **Licença MIT**.

---

## 🏅 Reconhecimento da Comunidade

Utilizamos a especificação **All-Contributors** para valorizar cada pessoa que ajuda a construir este acervo. Toda forma de contribuição conta: criação de conteúdo, revisão de PRs, sugestões de design, reporte de bugs e mentoria na comunidade.
