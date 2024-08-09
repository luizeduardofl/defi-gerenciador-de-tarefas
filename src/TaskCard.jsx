import { Card, Typography, Box, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab"; // Floating Action Button
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskCard({ onComplete, onBegin, onDelete, task }) {
  const { title, description } = task;
  const handleCompletion = () => {
    onComplete(task);
  };

  const handleBeginning = () => {
    onBegin(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Divider />
        <Stack spacing={2} alignContent={"center"}>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
          <Stack direction={"row"} spacing={9.3}>
            <Fab
              color="primary"
              aria-label="start"
              size="small"
              onClick={handleBeginning}
            >
              <PlayArrowIcon />
            </Fab>
            <Fab
              color="primary"
              aria-label="finish"
              size="small"
              onClick={handleCompletion}
            >
              <CheckIcon />
            </Fab>
            <Fab
              style={{ backgroundColor: "white" }}
              aria-label="delete"
              size="small"
              onClick={handleDelete}
            >
              <DeleteIcon style={{ color: "#1976d2" }} />
            </Fab>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}

export default TaskCard;
