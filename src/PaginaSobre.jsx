import { Typography, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function PaginaSobre() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h1" gutterBottom>
          Defi
        </Typography>
        <Typography variant="body1" gutterBottom>
          O Defi é feito para aqueles que têm dificuldade em ser organizados.
          Ele cria e mostra tarefas usando um sistema intuitivo de cartões. Após
          criar uma tarefa, aperte um botão e ela será concluída.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Esta aplicação foi desenvolvida para a disciplina Desenvolvimento Web
          Front-End ministrada pelo professor Diego Rodrigo Cabral Silva no
          semestre 2024.1.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feito por Luiz Eduardo Fernandes Lobato, aluno da Escola de Ciências e
          Tecnologia (ECT).
        </Typography>
        <Button variant="outlined" component={Link} to="/">
          Voltar
        </Button>
      </Stack>
    </Container>
  );
}

export default PaginaSobre;
