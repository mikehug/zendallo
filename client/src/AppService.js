import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
// import errors from 'feathers-errors'; // An object with all of the custom error types.
import auth from 'feathers-authentication-client';
import io from 'socket.io-client';
import AuthManagement from 'feathers-authentication-management/lib/client';

const socket = io();

const AppService = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(auth({ storage: window.localStorage }));

export const authManagement = new AuthManagement(AppService);

export default AppService;
