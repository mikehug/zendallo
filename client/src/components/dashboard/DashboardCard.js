import React, { Children } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import { LinearProgress } from 'material-ui/Progress';
import Chips from './Chip';

const styles = {
  root: {
    minHeight: '200px',
  },
  cardMedia: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
  },
  cardDesc: {
    padding: '20px',
    textAlign: 'left',
  },
  cardText: {
    color: 'white',
  },
  img: {
    paddingTop: 15,
  },
  cardContent: {
    margin: 2,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const DashboardCard = (props) => {
  const {
    classes, heading, content, children, background, progress, route, chip, history,
  } = props;
  return (
    <Card raised className={classes.root} >
      <CardMedia className={classes.cardMedia} style={background} >
        <div className={classes.img} >
          {children}
        </div>
        <div className={classes.cardDesc}>
          <Typography type="title" component="h2" gutterBottom className={classes.cardText}>
            {heading}
          </Typography>
          <Typography type="subheading" className={classes.cardText} >
            {content}
          </Typography>
        </div>
      </CardMedia>
      <CardContent className={classes.cardContent} >
        <LinearProgress mode="determinate" value={progress} />
      </CardContent>
      <CardActions className={classes.cardActions} >
        <Chips label={chip} />
        <Button color="primary" onClick={() => history.push(route)} >CONTINUE</Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(withStyles(styles)(DashboardCard));
