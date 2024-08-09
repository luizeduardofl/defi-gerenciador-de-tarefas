# Defi: o gerenciador de tarefas

## Descrição

O Defi consiste numa aplicação de **gerenciamento de tarefas** desenvolvido com **React**. Ele permite que os usuários adicionem, editem e excluam tarefas, as quais podem ter três categorias: **A Fazer** (todo), **Em Progresso** (inProgress) e **Concluído** (done).

O projeto foi criado com o objetivo de proporcionar uma interface intuitiva e simples para gerenciar tarefas, facilitando o acompanhamento do progresso de diferentes atividades. A aplicação é um exemplo prático de como usar React para criar uma aplicação CRUD (Create, Read, Update, Delete) e como integrar essa aplicação com um back-end simulado usando JSON Server.

Esta aplicação foi desenvolvida para a disciplina "Desenvolvimento Web Front-End" ministrada pelo professor Diego Rodrigo Cabral Silva no semestre 2024.1 da UFRN. Feita por Luiz Eduardo Fernandes Lobato, aluno da Escola de Ciências e Tecnologia (ECT).



## Funcionalidades

- **Adicionar Tarefas**: Permite ao usuário criar novas tarefas.
- **Visualizar Tarefas**: As tarefas são organizadas e exibidas em colunas de acordo com o status.
- **Atualizar Tarefas**: O usuário pode mover tarefas entre diferentes status, como "A Fazer" para "Em Progresso" e de "Em Progresso" para "Concluído".
- **Excluir Tarefas**: O usuário pode deletar tarefas indesejadas.
- **Persistência de Dados**: As tarefas são armazenadas usando JSON Server, simulando uma API RESTful.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI (MUI)**: Biblioteca de componentes React para estilização da aplicação.
- **React Router**: Biblioteca para gerenciamento de rotas em uma aplicação React.
- **JSON Server**: Ferramenta para simular uma API REST rapidamente, usada para persistência de dados.

## Requisitos
- npm (gerenciador de pacotes do Node.js).
- MUI, React Router, JSON Server instalados.
- Git para controle de versão.

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências do projeto:**
   - Certifique-se de estar na raiz do diretório do projeto (onde está localizado o arquivo `package.json`). Em seguida, execute:
   ```bash
   npm install
   ```
   - Este comando instala todas as dependências listadas no `package.json`, incluindo React, React Router, Material-UI e outras bibliotecas necessárias.

3. **Instale e configure o React Router:**
   - O React Router já deve estar incluído nas dependências instaladas pelo comando anterior. Caso precise instalá-lo manualmente, execute:
   ```bash
   npm install react-router-dom
   ```
   - Em seguida, verifique se as rotas estão corretamente configuradas no seu projeto. Por exemplo, no arquivo `App.js` ou outro responsável pelas rotas:
   ```javascript
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import PaginaPrincipal from './components/PaginaPrincipal';
   // Outras importações

   function App() {
     return (
       <Router>
         <Switch>
           <Route path="/" exact component={PaginaPrincipal} />
           {/* Adicione outras rotas conforme necessário */}
         </Switch>
       </Router>
     );
   }

   export default App;
   ```

4. **Instale e configure o Material-UI:**
   - Material-UI (MUI) já deve estar instalado, mas caso precise instalá-lo manualmente, execute:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```
   - Para utilizar os componentes do Material-UI, importe-os nos seus componentes React. Por exemplo:
   ```javascript
   import { Button, Container } from '@mui/material';

   function MeuComponente() {
     return (
       <Container>
         <Button variant="contained" color="primary">
           Meu Botão
         </Button>
       </Container>
     );
   }

   export default MeuComponente;
   ```

5. **Inicie o JSON Server para simular o back-end:**
   - O JSON Server deve ser configurado para simular uma API RESTful. Verifique se o arquivo `db.json` está na raiz do projeto e execute:
   ```bash
   npx json-server --watch db.json --port 3001
   ```
   - Isso iniciará o JSON Server e ele ficará disponível em `http://localhost:3001`. Ele será usado para armazenar as tarefas e permitir as operações de CRUD (Criar, Ler, Atualizar, Deletar).

6. **Inicie o servidor de desenvolvimento do React:**
   - Finalmente, para iniciar a aplicação React, execute:
   ```bash
   npm start
   ```
   - O aplicativo será aberto automaticamente no navegador em `http://localhost:3000`.
