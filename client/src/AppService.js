import feathers from '@feathersjs/client/dist/feathers';
import socketio from '@feathersjs/client/dist/socketio';
import auth from '@feathersjs/client/dist/authentication';
import io from 'socket.io-client';

// import errors from 'feathers-errors'; // An object with all of the custom error types.
const socket = io();

const AppService = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }));

const errorHandler = (error) => {
  // TODO: Better error handling
  AppService.authenticate()
    .then((response) => {
      console.log(response);
    });
};


// Handle when auth fails during a reconnect or a transport upgrade
AppService.on('reauthentication-error', errorHandler);

export default AppService;
