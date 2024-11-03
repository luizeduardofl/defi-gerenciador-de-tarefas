# Defi: o gerenciador de tarefas

## Descrição

O Defi é uma aplicação de **gerenciamento de tarefas** desenvolvida com **React**. Ele permite aos usuários adicionar, editar e excluir tarefas, organizadas em três categorias: **A Fazer** (todo), **Em Progresso** (inProgress) e **Concluído** (done).

O projeto foi criado com o objetivo de proporcionar uma interface intuitiva e simples para gerenciar tarefas, facilitando o acompanhamento do progresso das atividades. É um exemplo prático de como usar React para criar uma aplicação CRUD (Create, Read, Update, Delete) e como integrar essa aplicação com um back-end simulado usando JSON Server.

Esta aplicação foi desenvolvida para a disciplina "Desenvolvimento Web Front-End", ministrada pelo professor Diego Rodrigo Cabral Silva no semestre 2024.1 da UFRN. Feita por Luiz Eduardo Fernandes Lobato, aluno da Escola de Ciências e Tecnologia (ECT).

## Funcionalidades

- **Adicionar Tarefas**: Permite ao usuário criar novas tarefas.
- **Visualizar Tarefas**: As tarefas são organizadas e exibidas em colunas de acordo com o status.
- **Atualizar Tarefas**: O usuário pode mover tarefas entre diferentes status, como "A Fazer" para "Em Progresso" e de "Em Progresso" para "Concluído".
- **Excluir Tarefas**: O usuário pode deletar tarefas indesejadas.
- **Persistência de Dados**: As tarefas são armazenadas usando JSON Server, simulando uma API RESTful.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI (MUI)**: Biblioteca de componentes React para estilização.
- **React Router**: Biblioteca para gerenciamento de rotas.
- **JSON Server**: Ferramenta para simular uma API RESTful.

## Requisitos
- npm (gerenciador de pacotes do Node.js)
- MUI, React Router, JSON Server instalados
- Git para controle de versão

---

# Defi: the task manager

## Description

Defi is a **task management** application built with **React**. It allows users to add, edit, and delete tasks, which are organized into three categories: **To Do** (todo), **In Progress** (inProgress), and **Done** (done).

The project was created to provide an intuitive and simple interface for managing tasks, making it easy to track the progress of different activities. The app serves as a practical example of how to use React to create a CRUD (Create, Read, Update, Delete) application and how to integrate it with a simulated back-end using JSON Server.

This application was developed for the "Front-End Web Development" course taught by Professor Diego Rodrigo Cabral Silva in the 2024.1 semester at UFRN. It was created by Luiz Eduardo Fernandes Lobato, a student at the School of Science and Technology (ECT).

## Features

- **Add Tasks**: Allows users to create new tasks.
- **View Tasks**: Tasks are organized and displayed in columns based on their status.
- **Update Tasks**: Users can move tasks between statuses, such as from "To Do" to "In Progress" and from "In Progress" to "Done."
- **Delete Tasks**: Users can remove unwanted tasks.
- **Data Persistence**: Tasks are stored using JSON Server, simulating a RESTful API.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React component library for styling the app.
- **React Router**: Library for route management in a React app.
- **JSON Server**: Tool for quickly setting up a RESTful API simulation.

## Requirements
- npm (Node.js package manager)
- MUI, React Router, JSON Server installed
- Git for version control

---

## Instalação / Installation

### Português

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Configure o React Router:**
   ```bash
   npm install react-router-dom
   ```
   Verifique se as rotas estão corretamente configuradas.

4. **Configure o Material-UI:**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

5. **Inicie o JSON Server:**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

6. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

### English

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Set up React Router:**
   ```bash
   npm install react-router-dom
   ```
   Ensure routes are correctly configured.

4. **Set up Material-UI:**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

5. **Start the JSON Server:**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

6. **Start the development server:**
   ```bash
   npm start
   ```
