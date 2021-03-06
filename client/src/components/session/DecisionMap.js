import React from 'react';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { throttle } from 'lodash';
import Paper from 'material-ui/Paper';
import { Motion, spring } from 'react-motion';
import amber from 'material-ui/colors/amber';
import lightGreen from 'material-ui/colors/lightGreen';
import OpenWithIcon from 'material-ui-icons/OpenWith';
import EditIcon from 'material-ui-icons/Edit';
import PersonIcon from 'material-ui-icons/Person';
import ChipTextEdit from './ChipTextEdit';
import BallPopover from './BallPopover';


const styles = theme => ({
  root: {
    maxWidth: 420,
    minWidth: 360,
    paddingTop: 5,
    marginBottom: 16,
  },
  map: {
    height: 320,
    // flex: '1 100%',
    maxWidth: 860,
    borderRadius: 10,
    padding: '5px 10px 10px 5px',
    position: 'relative',
    // backgroundImage: 'radial-gradient(800px 1000px at center 200px,#f3c38f 0,#fc7946 100%)',
    userSelect: 'none',
    tapHighlightColor: 'transparent',
  },
  myBall: {
    position: 'absolute',
    zIndex: 2,
    top: 110,
    left: 135,
    borderRadius: '99px;',
    backgroundColor: theme.palette.grey[300],
    opacity: '0.6',
    width: 40,
    height: 40,
  },
  ball: {
    position: 'absolute',
    zIndex: 1,
    top: 110,
    left: 135,
    borderRadius: '99px;',
    // backgroundColor: '#2196f3',
    width: 40,
    height: 40,
  },
  myBallIcon: {
    marginTop: 8,
    color: theme.palette.secondary.main,
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  chip: {
    backgroundColor: theme.palette.grey[100],


  },
  topicChip: {
    // paddingBottom: 5,

  },
  topicTitle: {
    // backgroundColor: lightGreen[500],
    background: 'none',
    // color: theme.palette.secondary.main,
    padding: 16,
  },
  option1: {
    backgroundColor: theme.palette.grey[50],
    // color: theme.palette.secondary.main,

  },
  option2: {
    // backgroundColor: lightGreen[500],
    color: theme.palette.secondary.main,

  },
  option3: {
    // backgroundColor: lightGreen[500],
    color: theme.palette.secondary.main,

  },
  option4: {
    // backgroundColor: lightGreen[500],
    color: theme.palette.secondary.main,

  },
});

// const springSetting1 = { stiffness: 180, damping: 10 };
// const springSetting2 = { stiffness: 120, damping: 17 };

class DecisionMap extends React.Component {
    state = {
      // x: this.props.session.attendees[this.props.userIndex].status.x,
      // y: this.props.session.attendees[this.props.userIndex].status.y,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      isPressed: false,
      optionEdit: false,
      selectedOption: '',
    };

    componentDidMount() {
      document.getElementById('map').addEventListener('mousemove', throttle(this.handleMouseMove, 100));
      document.getElementById('map').addEventListener('touchmove', throttle(this.handleTouchMove, 100));
      window.addEventListener('touchend', this.handleMouseUp);
      window.addEventListener('mouseup', this.handleMouseUp);
      window.addEventListener('resize', this.setMapCoordinates);
      this.setMapCoordinates();
    }

    setMapCoordinates = () => {
      const element = document.getElementById('map');
      let position = {};

      if (element) {
        position = element.getBoundingClientRect();
        this.setState({ left: position.left + 20 });
        this.setState({ top: position.top + 20 });
        this.setState({ width: position.right - position.left - 40 });
        this.setState({ height: position.bottom - position.top - 40 });
      }
    }

    getTextEdit = () => (
      <ChipTextEdit
        text={this.props.session[this.state.selectedOption]}
        handleTextChange={this.handleTextChange}
      />
    )

    handleMouseUp = () => {
      this.setState({ isPressed: false });
      this.props.handleDisableSwipe(false);
    }

    handleMouseDown =() => {
      this.setState({ isPressed: true });
    }

    handleTouchMove = (e) => {
      e.preventDefault();
      this.handleMouseMove(e.touches[0]);
    };

     handleTouchStart = (key, pressLocation, e) => { // eslint-disable-line
       this.setState({ isPressed: true });
       this.props.handleDisableSwipe(true);
     };

    handleClick =(selectedOption) => {
      this.setState({ optionEdit: !this.state.optionEdit, selectedOption });
    }

    handleTextChange = (values) => {
      const updateObj = {};
      updateObj[this.state.selectedOption] = values.text;
      this.props.handleMapLabel(updateObj);
      this.setState({ optionEdit: false });
    }

    handleMouseMove = ({ clientX, clientY }) => {
      if (this.state.isPressed) {
        this.setMapCoordinates();
        const { x, y } = this.limitCoordinates(clientX, clientY);
        this.props.handleUpdate({ x, y });
      }
    };

    limitCoordinates= (clientX, clientY) => {
      let x = clientX;
      let y = clientY;
      x -= this.state.left;
      y -= this.state.top;
      x = Math.min(Math.max(x, 0), this.state.width);
      y = Math.min(Math.max(y, 0), this.state.height);
      x /= (this.state.width);
      y /= (this.state.height);
      // console.log(`x,y: (${x}, ${y} )top: ${this.state.top} bottom: ${this.state.bottom} left: ${this.state.left} right: ${this.state.right}`);
      return { x, y };
    }

    render() {
      const scale = this.state.isPressed ? 'scale(1.2)' : 'scale(1)';
      const boxShadow = this.state.isPressed ? '6px 12px 5px #424242' : 'none';
      return (

        <Paper className={this.props.classes.root}>
          <Grid container direction="column" >
            <Chip
              label={this.props.session.topicTitle}
              onClick={() => this.handleClick('topicTitle')}
              className={this.props.classes.topicChip}
              component={(this.state.optionEdit && this.state.selectedOption === 'topicTitle') ?
                  this.getTextEdit
                : 'div'}
              style={{ flexDirection: 'row-reverse', background: 'none', fontSize: 16 }}
            />

            <Grid container id="map" className={this.props.classes.map} direction="row" spacing={0} >

              <Grid container justify="space-between" spacing={0}>
                <Grid item >
                  <Chip
                    label={this.props.session.option1}
                    onClick={() => this.handleClick('option1')}
                    className={this.props.classes.chip}
                    component={(this.state.optionEdit && this.state.selectedOption === 'option1') ?
                  this.getTextEdit
                : 'div'}
                  />
                </Grid>
                <Grid item >
                  <Chip
                    label={this.props.session.option2}
                    onClick={() => this.handleClick('option2')}
                    className={this.props.classes.chip}
                    component={(this.state.optionEdit && this.state.selectedOption === 'option2') ?
                  this.getTextEdit
                : 'div'}
                    style={{ flexDirection: 'row-reverse' }}
                  />
                </Grid>
              </Grid>

              <Motion style={{
                    left: spring(this.props.status.x * this.state.width, { stiffness: 150, damping: 12 }),
                    top: spring(this.props.status.y * this.state.height, { stiffness: 150, damping: 12 }),
                    }}
              >{ motionStyle => (

                <div
                  className={this.props.classes.myBall}
                  onMouseDown={this.handleMouseDown}
                  onTouchStart={this.handleTouchStart}
                  role="presentation"
                  style={{
                 left: motionStyle.left,
                 top: motionStyle.top,
                transform: scale,
                boxShadow,
               }}
                >
                  <OpenWithIcon className={this.props.classes.myBallIcon} />
                </div>

            )}
              </Motion>

              {/* <BallPopover name={this.props.session.attendees[this.props.userIndex].name} > */}
              {/* </BallPopover> */}

              {this.props.session.attendees.map((attendee, index) => (
            attendee && this.props.userIndex !== index ?
              <Motion
                key={attendee.userId}
                style={{
              left: spring(attendee.status.x * this.state.width, { stiffness: 150, damping: 12 }),
              top: spring(attendee.status.y * this.state.height, { stiffness: 150, damping: 12 }),

            }}
              >
                {motionStyle => (
                  <BallPopover name={attendee.name} >
                    <div
                      className={this.props.classes.ball}
                      role="presentation"
                      style={{
                    left: motionStyle.left,
                    top: motionStyle.top,
                    }}
                    >
                      <PersonIcon style={{ marginTop: 6, color: 'darkSlateGrey' }} />
                    </div>
                  </BallPopover>
                  )}
              </Motion>

              : null

          )) }
              <Grid container justify="space-between" alignItems="flex-end" spacing={0} >
                <Grid item >
                  <Chip
                    label={this.props.session.option3}
                    onClick={() => this.handleClick('option3')}
                    className={this.props.classes.chip}
                    component={(this.state.optionEdit && this.state.selectedOption === 'option3') ?
                  this.getTextEdit
                : 'div'}
                  />
                </Grid>
                <Grid item >
                  <Chip
                    label={this.props.session.option4}
                    onClick={() => this.handleClick('option4')}
                    className={this.props.classes.chip}
                    component={(this.state.optionEdit && this.state.selectedOption === 'option4') ?
                  this.getTextEdit
                : 'div'}
                    style={{ flexDirection: 'row-reverse' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    }
}

export default withStyles(styles)(DecisionMap);
