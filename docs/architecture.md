# Arquitetura

`achorde-musical-domain` é a superfície pública de linguagem musical compartilhada entre os três projetos locais.

## O que entra aqui

- contratos de diagnóstico
- símbolo de acorde parseado
- AST textual de cifra
- AST de cifra por seções e linhas
- voicings de instrumentos trasteados
- porta explícita para teoria musical externa

## O que não entra aqui

- React
- storage local
- sync
- roteamento
- regras privadas do produto AC15
- renderização SVG
- parser textual completo

## Regra de uso

`tab-renderer` e `svguitar-react` devem depender desse pacote para os tipos públicos compartilhados. O AC15 deve tratá-lo como dependência pública e manter os contratos privados separados.

