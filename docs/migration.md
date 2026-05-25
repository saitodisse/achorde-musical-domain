# Migração

## Ordem recomendada

1. Publicar `achorde-musical-domain`.
2. Apontar `tab-renderer` para o pacote novo.
3. Apontar `svguitar-react` para o pacote novo.
4. Reduzir `@ac15/contracts` a contratos privados do AC15 e reexports dos tipos públicos.

## Critérios de corte

- `svguitar-react` não deve mais referenciar `@ac15/contracts`.
- `tab-renderer` deve compilar apenas com o pacote novo para os contratos públicos.
- O AC15 deve continuar funcionando com seus contratos privados sem carregar dependência pública de um produto privado.

