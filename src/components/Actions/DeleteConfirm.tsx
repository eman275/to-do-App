import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  useMediaQuery,
} from "@material-ui/core";

interface Props {
  open: boolean;
  onClickCancel: () => void;
  onClickDeleteBtn: () => void;
}

export const DeleteConfirm = ({ open, onClickCancel, onClickDeleteBtn }: Props) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Dialog open={open} onClose={onClickCancel}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
        <div style={{ display: matches ? "none" : "block" }}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
        </div>
      <DialogActions>
        <Button onClick={onClickCancel} color="primary">
          cancel
        </Button>
        <Button onClick={onClickDeleteBtn} color="primary" variant="contained">
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};


