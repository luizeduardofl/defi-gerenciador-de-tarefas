import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalCard from "./ModalCard";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Columns from "./Columns";

const APIUrl = "http://localhost:3000/tasks";

function PaginaPrincipal() {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(APIUrl)
      .then((response) => response.json())
      .then((data) => {
        const tasksByStatus = {
          todo: data.filter((task) => task.status === "todo"),
          inProgress: data.filter((task) => task.status === "inProgress"),
          done: data.filter((task) => task.status === "done"),
        };
        setTasks(tasksByStatus);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addTask = (task) => {
    const newTask = { ...task, status: "todo" };
    fetch(APIUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((tasks) => ({
          ...tasks,
          todo: [...tasks.todo, data],
        }));
      })
      .catch((error) => {
        console.error("Erro ao adicionar tarefa:", error);
      });
  };

  const completeTask = (task) => {
    const updatedTask = { ...task, status: "done" };
    fetch(`${APIUrl}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((tasks) => ({
          ...tasks,
          todo: tasks.todo.filter((t) => t.id !== task.id),
          inProgress: tasks.inProgress.filter((t) => t.id !== task.id),
          done: [...tasks.done, data], 
        }));
      })
      .catch((error) => {
        console.error("Erro ao completar tarefa:", error);
      });
  };

  const beginTask = (task) => {
    const updatedTask = { ...task, status: "inProgress" };
    fetch(`${APIUrl}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((tasks) => ({
          ...tasks,
          todo: tasks.todo.filter((t) => t.id !== task.id),
          inProgress: [...tasks.inProgress, data],
        }));
      })
      .catch((error) => {
        console.error('Erro ao mover tarefa para "inProgress":', error);
      });
  };

  const deleteTask = (task) => {
    fetch(`${APIUrl}/${task.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks((tasks) => ({
          ...tasks,
          todo: tasks.todo.filter((t) => t.id !== task.id),
          inProgress: tasks.inProgress.filter((t) => t.id !== task.id),
          done: tasks.done.filter((t) => t.id !== task.id),
        }));
      })
      .catch((error) => {
        console.error("Erro ao deletar a tarefa:", error);
      });
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h1" gutterBottom>
          Defi
        </Typography>
        <Columns
          tasks={tasks}
          addTask={addTask}
          completeTask={completeTask}
          beginTask={beginTask}
          deleteTask={deleteTask}
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: 2 }}>
          <ModalCard open={open} handleClose={handleClose} addTask={addTask} />
        </Box>
        <Stack spacing={2} direction="column">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Nova tarefa
          </Button>
          <Button variant="outlined" component={Link} to="/">
            Sair
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default PaginaPrincipal;
