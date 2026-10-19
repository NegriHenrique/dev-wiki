---
title: Introdução ao Versionamento com Git
description: Entenda o que é o Git, como funciona o controle de versão distribuído e por que ele é indispensável para todo desenvolvedor.
---

O Git é um sistema de controle de versão distribuído que rastreia todo o histórico de alterações no código-fonte, permitindo reverter erros, testar novas funcionalidades em paralelo e colaborar com múltiplos desenvolvedores sem sobrescrever o trabalho de ninguém.

:::note[Conceito Essencial]
Pense no Git como um gravador contínuo do seu projeto. A cada confirmação (*commit*), ele registra um retrato exato do estado dos arquivos, permitindo navegar no tempo com total segurança.
:::

## O Que É Controle de Versão?

Controle de versão é a prática de registrar o ciclo de vida de arquivos ao longo do tempo. Sem ele, equipes recorrem a táticas arriscadas como pastas duplicadas (`projeto_final_v2_agora_vai.zip`).

* **Histórico Confiável**: Saber exatamente quem alterou o quê, quando e por qual motivo.
* **Ramificações Seguras (Branches)**: Criar caminhos paralelos para novas funcionalidades sem impactar a versão estável.
* **Colaboração Descentralizada**: Várias pessoas trabalhando simultaneamente no mesmo arquivo com resolução inteligente de conflitos.

<!-- TODO: Escrever a explicação detalhada comparando sistemas de versão centralizados (como SVN) com distribuídos (Git) aqui -->

## Os Três Estados do Git

O funcionamento do Git se baseia em três áreas fundamentais que todo iniciante precisa dominar:

1. **Working Directory (Diretório de Trabalho)**: Onde os arquivos são editados diretamente no seu editor de código.
2. **Staging Area (Área de Preparação / Index)**: Onde você seleciona com precisão quais modificações farão parte do próximo registro.
3. **Repository (Repositório / Histórico Local)**: Onde as modificações são gravadas permanentemente como *commits*.

<!-- TODO: Adicionar diagrama ou explicação passo a passo do fluxo entre Working Directory, Staging Area e Repositório aqui -->

## Comandos Fundamentais

Estes são os comandos básicos para iniciar seu fluxo de trabalho no terminal:

```bash
# Inicia um novo repositório na pasta atual
git init

# Verifica o estado dos arquivos modificados
git status

# Adiciona arquivos à área de preparação (staging)
git add .

# Registra as alterações no histórico com mensagem descritiva
git commit -m "feat: cria estrutura inicial do projeto"
```

:::tip[Boas Práticas de Commit]
Faça commits pequenos e frequentes. Cada commit deve representar uma unidade lógica de mudança bem definida.
:::

## Próximos Passos

<!-- TODO: Escrever a explicação sobre comandos de inspeção de histórico (git log, git diff) e ramificações (git branch) aqui -->

Agora que você compreende a base do Git local, o próximo passo indispensável é aprender a colaborar em projetos remotos e enviar seu primeiro Pull Request no GitHub.

## Leituras Recomendadas e Referências

* [Livro Pro Git (Gratuito em Português)](https://git-scm.com/book/pt-br/v2) — Obra de referência oficial e aprofundada sobre a arquitetura e uso avançado do Git.
* [Documentação Oficial do Git](https://git-scm.com/doc) — Manuais detalhados de cada comando e parâmetro do Git.
<!-- TODO: Adicionar recomendações de artigos e tutoriais da comunidade sobre Git aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/git-e-github/como-fazer-seu-primeiro-pull-request/)
:::
