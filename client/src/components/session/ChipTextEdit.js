import React from 'react';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import SendIcon from 'material-ui-icons/Send';
import { Formik, Form, Field } from 'formik';
import RenderTextField from '../utils/RenderTextField';

const styles = theme => ({
  field: {
    // backgroundColor: theme.palette.grey[300],
    paddingLeft: 10,
    margin: 3,
    // width: 40,
    // borderRadius: '15px;',
  },

});

const ChipTextEdit = props => (
  <Formik
    initialValues={{ text: props.text }}
    onSubmit={props.handleTextChange}
    render={() => (
      <Form className={props.classes.field} >
        <Field
          autoFocus
          name="text"
          type="text"
          component={RenderTextField}

        />
        <IconButton type="submit" color="primary" > <SendIcon /></IconButton>
      </Form>
    )}
  />

);

export default withStyles(styles)(ChipTextEdit);
