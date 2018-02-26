import AppService from '../../AppService';

export const login = credentials => AppService.authenticate(credentials)
  .then(response => AppService.passport.verifyJWT(response.accessToken))
  .then(payload => AppService.service('users').get(payload.userId))
  .then((user) => {
    AppService.set('user', user);
    return user;
  });

export const localLogin = () => {
  if (window.localStorage && window.localStorage.getItem('feathers-jwt')) {
    return login();
  } throw Error;
};

export const getUser = () => {
  const user = AppService.get('user');
  if (user) return user;
  return localLogin();
};

export const logout = () => {
  AppService.set('user', null);
  AppService.logout();
};

export const AuthManagement = AppService.service('authManagement');
