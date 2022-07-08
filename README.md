# Rent a Movie [Back-end]

API para gerencimento de uma locadora de filmes. A aplicação foi desenvolvida com Typescript, Node, Express, Prisma e PostgreSQL(Supabase). A arquitetura de projeto é baseada em camadas, nesse caso, MSC (Model, Service e Controller).

## :rocket: Como rodar o projeto?

### :warning: O projeto depende do banco de dados online para rodar (Supabase).

Você pode fazer requisições a API nesse link:

 `/movies` - 
 https://rent-a-movie-api.herokuapp.com/movies

Para rodar o projeto, você deve clonar este repositório e o repositório [front-end](https://github.com/matkaf/rent-a-movie-front)

1. Faça o clone do repositório para sua máquina:
```bash
git clone git@github.com:matkaf/rent-a-movie-api.git
```

2. Entre na pasta do projeto e instale as dependências:
```bash
cd rent-a-movie-api
npm install
```

3. O projeto precisa da URL do banco de dados. Copie abaixo e adicionei um arquivo `.env` na raiz do projeto:

4. Inicie a aplicação:
```bash
npm run dev
```

# Documentação da API

### Verifica se existe usuário e senha

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.
| `password` | `string` | **Obrigatória**.

### Retorna todos os filmes

```http
  GET /movies
```

### Insere alugueis de filmes de determinado usuário

```http
  POST /movies
  Recebe um array com os parâmetros abaixo:
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movieId` | `string` | **Obrigatório**.
| `userId` | `string` | **Obrigatório**.
| `returnDate` | `date` | **Obrigatória** mas gerado pelo model

### Retorna todos os jogos

```http
  GET /games
```

### Insere alugueis de jogos de determinado usuário

```http
  POST /games
  Recebe um array com os parâmetros abaixo:
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `gameId` | `string` | **Obrigatório**.
| `userId` | `string` | **Obrigatório**.
| `returnDate` | `date` | **Obrigatória** mas gerado pelo model

# Tecnologias utilizadas

- Typescript

- Node.js

- Express

- Prisma ORM

- PostgreSQL (Supabase)

