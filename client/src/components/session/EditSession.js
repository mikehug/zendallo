import React from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import { Formik, Form, Field } from 'formik';
import Grid from 'material-ui/Grid';
import { FormGroup } from 'material-ui/Form';
import AppService from '../../AppService';
import RenderTextField from '../utils/RenderTextField';

const styles = theme => ({
  dialog: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 120,
      marginTop: -30,
    },
  },
  agendaEdit: {
    width: 30,
    height: 30,
    marginLeft: 10,
    paddingTop: 0,
  },
  dialogContent: {
    width: 300,
    marginBottom: 10,
    paddingTop: 0,
  },
  dialogTitle: {
    paddingTop: 16,
  },
});

const sessionService = AppService.service('sessions');

class EditSession extends React.Component {
  state = {
    open: false,
  };

  handleEdit = (values) => {
    const { agenda } = values;
    sessionService.patch(
      this.props.session._id,
      { agenda },
    );
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleValidate = (values) => {
    const errors = {};
    if (!values.agenda) {
      errors.agenda = 'Agenda item(s) required';
    }
    return errors;
  };

  handleSubmit = (values, props) => {
    props.setSubmitting(true);
    this.handleEdit(values);
    this.handleRequestClose();
  };

  render() {
    return (
      <Grid >

        <IconButton className={this.props.classes.agendaEdit} onClick={this.handleClickOpen}>
          <EditIcon color="secondary" style={{ fontSize: 19 }} />
        </IconButton>


        <Dialog open={this.state.open} onClose={this.handleRequestClose} className={this.props.classes.dialog}>
          <Formik
            initialValues={{ name: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}

            render={props => (
              <Form >
                <DialogTitle>Update Agenda</DialogTitle>
                <DialogContent className={this.props.classes.dialogContent}>
                  <Field
                    margin="dense"
                    multiline
                    rows="5"
                    rowsMax="15"
                    name="agenda"
                    defaultValue={this.props.session.agenda}
                    variant="multiline"
                    component={RenderTextField}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleRequestClose}>Cancel</Button>
                  <Button
                    type="submit"
                    disabled={props.isSubmitting && props.isValid}
                    color="default"
                  >
                    Update
                  </Button>
                </DialogActions>
              </Form>
            )}
          />
        </Dialog>
      </Grid>
    );
  }
}

export default withStyles(styles)(EditSession);
