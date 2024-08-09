import { Typography, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function PaginaInicial() {
  return (
    <Container maxWidth="md">
      <Stack spacing={1} alignItems="center">
        <Typography variant="h1" gutterBottom>
          Bem-vindo ao Defi
        </Typography>
        <Typography variant="h4" gutterBottom>
          Seu gerenciador de tarefas simples e eficiente.
        </Typography>
        <Button
          sx={{ width: "360px" }}
          variant="contained"
          component={Link}
          to="/main"
        >
          Iniciar
        </Button>
        <Button
          sx={{ width: "360px" }}
          variant="outlined"
          component={Link}
          to="/about"
        >
          Sobre
        </Button>
      </Stack>
    </Container>
  );
}
export default PaginaInicial;
