# Digimon API

## Descrição

Esta é uma API RESTful desenvolvida em Node.js com TypeScript, utilizando Prisma como ORM para interação com o banco de dados. A API permite a consulta de informações sobre Digimons, incluindo busca por nome e nível.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Jest (para testes)

## Pré-requisitos

- Node.js >= 18
- PostgreSQL

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/digimon-api.git
   cd digimon-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Certifique-se de ter o PostgreSQL em execução localmente. Crie um banco de dados para o projeto:

   ```sql
   CREATE DATABASE digimon;
   ```

4. Crie um arquivo .env na raiz do projeto e configure a variável de ambiente DATABASE_URL com as credenciais do seu banco de dados:

   ```plaintext
   DATABASE_URL="postgresql://username:password@localhost:5432/digimon"
   ```

   Substitua username e password pelos seus dados.

5. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

6. Certifique-se de ter o PostgreSQL em execução localmente. Crie um banco de dados para o projeto:

   ```sql
   CREATE DATABASE digimon;
   ```

## Executando a Aplicação

### Para desenvolvimento

Para iniciar o ambiente de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

### Para Produção

Antes de iniciar a aplicação em produção, siga os passos abaixo:

1. **Transpile o Código TypeScript**  
   Execute o seguinte comando para transpilação:

   ```bash
   npm run build
   ```

2. **Inicie a Aplicação**  
   Depois de transpilar, inicie a aplicação com o comando:

   ```bash
   npm start
   ```

A API estará disponível em http://localhost:3000.

## Testes

Para executar os testes end-to-end, você pode usar:

```bash
npm test
```

## Endpoints da API

| Método | Endpoint                    | Descrição                                | Parâmetros                |     |
| ------ | --------------------------- | ---------------------------------------- | ------------------------- | --- |
| GET    | `/api/digimon`              | Retorna todos os Digimons.               | Nenhum                    |
| GET    | `/api/digimon/name/:name`   | Retorna um Digimon específico pelo nome. | `name`: Nome do Digimon   |
| GET    | `/api/digimon/level/:level` | Retorna todos os Digimons pelo nível.    | `level`: Nível do Digimon |

## Referência de Campos

| Nome do Campo | Descrição         | Tipo de Dados |
| ------------- | ----------------- | ------------- |
| `name`        | Nome do Digimon   | String        |
| `img`         | Imagem do Digimon | String        |
| `level`       | Nível do Digimon  | String        |
