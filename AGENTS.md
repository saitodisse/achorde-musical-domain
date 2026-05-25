# AGENTS.md - achorde-musical-domain

## Propósito

Este repositório publica contratos musicais compartilhados para cifras, AST textual, diagnósticos, voicings e portas de teoria musical. Ele não contém React, storage, roteamento, sync ou regras privadas do AC15.

## Regras

- Use `pnpm` para instalar, testar, buildar e publicar.
- Mantenha a API pública pequena, estável e sem dependências runtime.
- Preserve compatibilidade semântica entre `tab-renderer`, `svguitar-react` e `ac15`.
- Atualize `README.md`, `CHANGELOG.md` e `docs/` quando o contrato público mudar.
- Prefira testes de tipo e casos de contrato pequenos para validar o pacote.

## Estrutura

- `src/` contém os contratos públicos e constantes de versão.
- `docs/` contém a explicação do escopo e a estratégia de migração.

