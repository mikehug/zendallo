import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Toys from 'material-ui-icons/Toys';
import Typography from 'material-ui/Typography';
import teal from 'material-ui/colors/teal';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 15,
  },
  actions: {
    display: 'flex',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: teal[300],
  },
});

class Challenge extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <Toys />

              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            classes={{ title: classes.title }}
            title="Build Idea Collaboration App"
            subheader="February 21, 2018"
          />

          <CardContent>
            <Typography component="p">
              Praesentium adipisci id quam perspiciatis velit eum ut explicabo. Unde ex tenetur quod. Sequi ut nostrum qui. Aut non vitae necessitatibus.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Considerations:
              </Typography>
              <Typography paragraph>
                Nemo dolorum pariatur voluptatem et quia accusamus eum distinctio. Voluptas voluptatem ex eum similique. Beatae temporibus omnis qui omnis magni doloremque consequatur. Voluptate fuga necessitatibus quo recusandae enim aut debitis non.
              </Typography>
              <Typography paragraph>
                Et quidem facilis unde consequatur aut ea. Sit totam asperiores voluptas velit deserunt rerum. Harum repudiandae odio reprehenderit dignissimos odit recusandae ipsam. Porro voluptas autem voluptatibus non beatae nihil. Neque et nihil nostrum iusto laboriosam vero. Consequatur dolorum sunt ducimus.
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <Toys />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            classes={{ title: classes.title }}
            title="Devlop Team Building Resources "
            subheader="February 14, 2018"
          />

          <CardContent>
            <Typography component="p">
              Praesentium adipisci id quam perspiciatis velit eum ut explicabo. Unde ex tenetur quod. Sequi ut nostrum qui. Aut non vitae necessitatibus.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Considerations:
              </Typography>
              <Typography paragraph>
                Nemo dolorum pariatur voluptatem et quia accusamus eum distinctio. Voluptas voluptatem ex eum similique. Beatae temporibus omnis qui omnis magni doloremque consequatur. Voluptate fuga necessitatibus quo recusandae enim aut debitis non.
              </Typography>
              <Typography paragraph>
                Et quidem facilis unde consequatur aut ea. Sit totam asperiores voluptas velit deserunt rerum. Harum repudiandae odio reprehenderit dignissimos odit recusandae ipsam. Porro voluptas autem voluptatibus non beatae nihil. Neque et nihil nostrum iusto laboriosam vero. Consequatur dolorum sunt ducimus.
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Challenge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Challenge);

