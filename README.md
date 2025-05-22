## Projeto de API TypeScript + Express + TypeORM

## Criando as migracoes do projeto

- Criar a migration de Role:

```bash
  npx typeorm migration:create src/shared/typeorm/migrations/CreateRolesTable
```

- Executar todas as migrations:

```bash
  ## realizar o transpile
  tsc
  ## executar apontando para o compilado ./dist/ (Testado no Linux)
  npx typeorm -d ./dist/shared/typeorm/index.js migration:run
  ## caso esteja no Windows
  npx typeorm -- -d ./src/shared/typeorm/index.ts migration:run
```
