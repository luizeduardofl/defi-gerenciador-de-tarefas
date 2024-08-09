import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalCard({ open, handleClose, addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    addTask({ title, description });
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
          />
          <Stack spacing={2} direction="row">
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Adicionar
            </Button>
            <Button
              onClick={handleClose}
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
            >
              Cancelar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalCard;
