# Movie App

Movie App é uma aplicação web desenvolvida com Node.js e TypeScript que permite aos usuários gerenciar sua coleção de filmes. Com uma interface responsiva, os usuários podem adicionar, visualizar, editar e excluir filmes associados às suas contas. Experimente uma experiência rica e personalizada para gerenciar suas preferências de filmes!

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo:
Primeiramente apenas tenha seu ambiente de desenvolvimento com nodejs instalado funcionando, recomendamos a IDE VSCode e pelo próprio terminal do VSCode digitar o seguinte comando:

```
git clone https://github.com/mrjonas151/movie-app
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução:

Primeiramente identifique as 2 principais pastas de nossa aplicação: "frontend" e "backend".
navegue até a pasta "frontend" e prossiga com o seguinte comando para instalar todas as dependências do node_modules.

```
npm install
```

Após isso, retorne e navegue na pasta "backend" e repita o processo:

```
npm install
```

Agora você tem todas as dependências necessárias instaladas, quase lá!

### 🔥Firebase
Por fim, como utilizamos o Firebase para gerenciar a autenticação dos usuários da nossa aplicação, você deve criar um projeto no Firebase e resgatar sua Key para conseguir ter acesso ao Firebase:
Observe que na nossa aplicação temos 2 arquivos em referência ao exemplo do .env como ele deve ficar, siga aquele exemplo para colocar as Keys de seu firebase de maneira segura!
Por fim, você precisa resgatar e baixar o json do Firebase admin sdk diretamente do site do Firebase e colar este arquivo diretamente na pasta backend e nomear como "ServiceAccountKey.json".


## ⚙️ Executando o ambiente no seu navegador local

Agora que você configurou suas chaves do Firebase corretamente e já possui os pacotes instalados, hora de rodar o projeto em seu navegador local. Primeiramente navegue até a pasta frontend e execute o comando:

```
npm run dev
```

Logo após, retorne e se direcione até a pasta backend e digite novamente:

```
npm run dev
```
Agora você será capaz de ter o servidor rodando no backend e entrar no link fornecido pelo frontend para poder navegar na interface de nossa aplicação!

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [React Vite](https://vitejs.dev/guide/) - A biblioteca web utilizada.
* [Node.Js](https://nodejs.org/en) - Ambiente de execução no servidor.
* [Typescript](https://www.typescriptlang.org/) - Linguagem utilizada.
* [Express.js](https://expressjs.com/pt-br/) - Framework para o servidor.

## ✒️ Autores

Autores que contribuíram para a construção dessa aplicação:

* [Alisson Akio](https://nodejs.org/en)
* [Jonas Tomaz](https://www.typescriptlang.org/) 
* [Keila Prado](https://expressjs.com/pt-br/)

## 🎁 Expressões de gratidão

* Primeiramente gostaríamos de agradecer a Compass UOL e sua equipe de instrutores e Scrum Masters para o apoio a construção do projeto, além dos materiais de apoio fornecido. 📢;
* Um grande agradecimento ao esforço de todos os 3 membros que desenvolveram a aplicação desde o planejamento a execução do banco de dados, frontend e backend da aplicação 🤘;
* Um agradecimento publicamente a quem está lendo e pretende utilizar nossa aplicação para se inspirar ou apenas por curiosidade 🫂;


---
⌨️ com ❤️ por Alisson Akio, Jonas Tomaz e Keila Prado.
