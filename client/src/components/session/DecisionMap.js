import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  map: {
    flex: '1 100%',
    height: 300,
    margin: 35,
    maxWidth: 950,
    position: 'relative',
  },
  ball: {
    position: 'absolute',
    top: 110,
    left: 135,
    borderRadius: '99px;',
    backgroundColor: '#3f51b5',
    width: 30,
    height: 30,
  },
});


class DecisionMap extends React.Component {
    state = {
      x: '',
      y: '',
      left: '',
      top: '',
      bottom: '',
      right: '',
      isPressed: false,
    };

    componentDidMount() {
      document.getElementById('map').addEventListener('mousemove', this.handleMouseMove);
      document.getElementById('map').addEventListener('touchmove', this.handleTouchMove);
      window.addEventListener('mouseup', this.handleMouseUp);
      window.addEventListener('resize', this.setMapCoordinates);
    }

    setMapCoordinates = () => {
      const element = document.getElementById('map');
      let position = {};

      if (element) {
        position = element.getBoundingClientRect();
        this.setState({ left: position.left + 15 });
        this.setState({ top: position.top + 15 });
        this.setState({ bottom: position.bottom - 15 });
        this.setState({ right: position.right - 15 });
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

    handleMouseMove = ({ clientX, clientY }) => {
      let x = clientX;
      let y = clientY;
      if (this.state.isPressed) {
        this.setMapCoordinates();

        x -= this.state.left;
        y -= this.state.top;
        x = Math.min(Math.max(x, 5), this.state.right - this.state.left - 5);
        y = Math.min(Math.max(y, 5), this.state.bottom - this.state.top - 5);
        this.setState({ x, y });
      }
    };

    render() {
      const scale = this.state.isPressed ? 'scale(1.2)' : 'scale(1)';
      return (
        <div>
          <div id="map" className={this.props.classes.map} >
            <div
              className={this.props.classes.ball}
              onMouseDown={this.handleMouseDown}
              role="presentation"
              style={{
                    left: this.state.x,
                    top: this.state.y,
                    transform: scale,
                    }}
            />
          </div>
          {/* x: {this.state.x} y:{this.state.y} xDiff: {this.state.right - this.state.left} yDiff: {this.state.bottom - this.state.top} */}
        </div>
      );
    }
}

export default withStyles(styles)(DecisionMap);
