import createMuiTheme from 'material-ui/styles/createMuiTheme';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';

export default createMuiTheme({
  palette: {
    primary: purple, // Purple and lightBlue play nicely together.
    secondary: {
      ...pink,
      // A400: '#00e677',
    },
  },
});
