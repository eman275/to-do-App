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
  close: () => void;
  yes: () => void;
}

export const DeleteConfirm = ({ open, close, yes }: Props) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
        <div style={{ display: matches ? "none" : "block" }}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
        </div>
      <DialogActions>
        <Button onClick={close} color="primary">
          No
        </Button>
        <Button onClick={yes} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};


