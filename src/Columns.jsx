import { Container, Grid, Box, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

function Column({ title, tasks, onCompleteTask, onBeginTask, onDeleteTask }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onComplete={onCompleteTask}
          onBegin={onBeginTask}
          onDelete={onDeleteTask}
        />
      ))}
    </Box>
  );
}

function Columns({ tasks, addTask, completeTask, beginTask, deleteTask }) {
  return (
    <Container>
      <Grid container spacing={2} sx={{ position: "relative" }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <Column
            title="A fazer"
            tasks={tasks.todo}
            onCompleteTask={completeTask}
            onBeginTask={beginTask}
            onDeleteTask={deleteTask}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <Column
            title="Em progresso"
            tasks={tasks.inProgress}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column
            title="Concluído"
            tasks={tasks.done}
            onDeleteTask={deleteTask}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Columns;
