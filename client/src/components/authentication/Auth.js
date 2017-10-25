import AuthManagement from 'feathers-authentication-management/lib/client';
import AppService from '../../AppService';

export const authManagement = new AuthManagement(AppService);

export const login = credentials => AppService.authenticate(credentials)
  .then(response => AppService.passport.verifyJWT(response.accessToken))
  .then(payload => AppService.service('users').get(payload.userId))
  .then((user) => {
    AppService.set('user', user);
    return user;
  });

export const logout = () => {
  AppService.set('user', null);
  AppService.logout();
};
