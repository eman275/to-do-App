import { useState, FC, ChangeEvent, useContext } from "react";
import {
  FormControl,
  Container,
  Button,
  TextField,
  Snackbar,
  Box,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Add } from "@material-ui/icons";


const AddTodo: FC<{ addTodo: (text: string) => void }> = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setText(e.target.value);
  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
    if (text.trim()) setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="sm"  className="Container">
        <form onSubmit={createTodo} className="add-todo">
          <FormControl fullWidth={true}>
            <TextField
              label="add a task"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
              type="submit"
            >
              <Add />
              Add your task
            </Button>
          </FormControl>
        </form>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setOpen(false)}
          severity="success"
        >
          Successfully added task!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddTodo;
