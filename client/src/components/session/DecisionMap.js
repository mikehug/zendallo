import React from 'react';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { throttle } from 'lodash';
import { Motion, spring } from 'react-motion';

const styles = theme => ({
  map: {
    flex: '1 100%',
    height: 300,
    maxWidth: 950,
    position: 'relative',
    backgroundImage: 'radial-gradient(800px 1000px at center 200px,#6c38a0 0,#351552 100%)',
  },
  myBall: {
    position: 'absolute',
    zIndex: 2,
    top: 110,
    left: 135,
    borderRadius: '99px;',
    backgroundColor: '#8bc34a',
    width: 30,
    height: 30,
  },
  ball: {
    position: 'absolute',
    zIndex: 1,
    top: 110,
    left: 135,
    borderRadius: '99px;',
    backgroundColor: '#2196f3',
    width: 30,
    height: 30,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


class DecisionMap extends React.Component {
    state = {
      x: 0.5,
      y: 0.5,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      isPressed: false,
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
        this.setState({ left: position.left + 15 });
        this.setState({ top: position.top + 15 });
        this.setState({ width: position.right - position.left });
        this.setState({ height: position.bottom - position.top });
      }
    }

    handleMouseUp = () => {
      this.setState({ isPressed: false });
    }

    handleMouseDown =() => {
      this.setState({ isPressed: true });
    }

    handleTouchMove = ({ touches }) => {
      this.handleMouseMove(touches[0]);
    };

     handleTouchStart = (key, pressLocation, e) => {
       this.setState({ isPressed: true });
     };

    handleClick =() => {
      console.log('test');
    }

    handleMouseMove = ({ clientX, clientY }) => {
      if (this.state.isPressed) {
        this.setMapCoordinates();
        const { x, y } = this.limitCoordinates(clientX, clientY);
        this.props.handleUpdate({ x, y });
        this.setState({ x, y });
      }
    };

    limitCoordinates= (clientX, clientY) => {
      let x = clientX;
      let y = clientY;
      x -= this.state.left;
      y -= this.state.top;
      x = Math.min(Math.max(x, 5), this.state.width - 5);
      y = Math.min(Math.max(y, 5), this.state.height - 5);
      x /= (this.state.width);
      y /= (this.state.height);
      // console.log(`x,y: (${x}, ${y} )top: ${this.state.top} bottom: ${this.state.bottom} left: ${this.state.left} right: ${this.state.right}`);
      return { x, y };
    }

    render() {
      const scale = this.state.isPressed ? 'scale(1.2)' : 'scale(1)';
      return (
        <Grid container id="map" className={this.props.classes.map} direction="row" spacing={0} >
          <Grid container justify="space-between" spacing={0}>
            <Grid item >
              <Chip
                avatar={<Avatar>A</Avatar>}
                label="Option 1"
                onClick={() => this.handleClick()}
                className={this.props.classes.chip}
              />
            </Grid>
            <Grid item >
              <Chip
                avatar={<Avatar>B</Avatar>}
                label="Option 2"
                onClick={() => this.handleClick()}
                className={this.props.classes.chip}
              />
            </Grid>
          </Grid>

          <Motion style={{
                    left: spring(this.state.x * this.state.width, { stiffness: 200, damping: 10 }),
                    top: spring(this.state.y * this.state.height, { stiffness: 200, damping: 10 }),
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
               }}
            />)}
          </Motion>

          {this.props.attendees.map((attendee, index) => (
            attendee && this.props.userIndex !== index ?
              <Motion
                key={attendee.userId}
                style={{
              left: spring(attendee.status.x * this.state.width, { stiffness: 200, damping: 10 }),
              top: spring(attendee.status.y * this.state.height, { stiffness: 200, damping: 10 }),

            }}
              >
                {motionStyle => (
                  <div
                    className={this.props.classes.ball}
                    role="presentation"
                    style={{
                    left: motionStyle.left,
                    top: motionStyle.top,
                    }}
                  />)}
              </Motion>

              : null

          )) }
          <Grid container justify="space-between" alignItems="flex-end" spacing={0} >
            <Grid item >
              <Chip
                avatar={<Avatar>C</Avatar>}
                label="Option 3"
                onClick={() => this.handleClick()}
                className={this.props.classes.chip}
              />
            </Grid>
            <Grid item >
              <Chip
                avatar={<Avatar>D</Avatar>}
                label="Option 4"
                onClick={() => this.handleClick()}
                className={this.props.classes.chip}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }
}

export default withStyles(styles)(DecisionMap);
