import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  bg: {
    backgroundColor: grey[500],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const Chips = (props) => {
  const { classes, label } = props;
  return (
    <div className={classes.row}>
      <Chip
        classes={{
          root: classes.bg, // className, e.g. `OverridesClasses-root-X`
        }}
        label={label}
        className={classes.chip}
      />
    </div>
  );
};

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'Chips' })(Chips);

