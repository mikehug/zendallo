import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const AlertDialog = props => (
  <div>
    <Dialog open={props.open} onRequestClose={props.handleAlertClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleAlertClose} color="primary">
              Disagree
        </Button>
        <Button onClick={props.action} color="primary">
              Agree
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default AlertDialog;
