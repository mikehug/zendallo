import React from 'react';
import TextField from 'material-ui/TextField';

const RenderTextField = ({ field, form: { touched, errors }, ...props }) =>
  (<TextField
    label={(touched[field.name] && errors[field.name]) ? errors[field.name] : ''}
    error={!!((touched[field.name] && errors[field.name]))}
    {...field}
    {...props}
  />);

export default RenderTextField;
