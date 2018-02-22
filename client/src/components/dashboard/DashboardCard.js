import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
// import { LinearProgress } from 'material-ui/Progress';
import Chips from './Chip';

const styles = theme => ({
  root: {
    minHeight: '180px',
  },
  cardMedia: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
  },
  cardDesc: {
    padding: '0 020px 0',
    textAlign: 'left',
  },
  img: {
    marginTop: 10,
    width: 65,
    height: 65,
  },
  cardContent: {
    margin: 2,
  },
  cardActions: {
    flexDirection: 'row-reverse',
  },
});

const DashboardCard = (props) => {
  const {
    classes, heading, content, children, background, progress, route, chip, history,
  } = props;
  return (
    <Card raised className={classes.root} >
      <CardMedia className={classes.cardMedia} src="" >
        {children}
        <div className={classes.cardDesc}>
          <Typography variant="title" component="h2" gutterBottom className={classes.cardText}>
            {heading}
          </Typography>
          <Typography variant="subheading" className={classes.cardText} >
            {content}
          </Typography>
        </div>
      </CardMedia>
      <CardContent className={classes.cardContent} >
        <Divider />
        {/* <LinearProgress mode="query" value={progress} /> */}
      </CardContent>
      <CardActions className={classes.cardActions} >
        {/* <Chips label={chip} /> */}
        <Button onClick={() => history.push(route)} color="default" >CONTINUE</Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(withStyles(styles)(DashboardCard));
