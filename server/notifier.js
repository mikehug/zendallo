module.exports = function(app) {

  function getLink(type, hash) {
    let host = 'http://localhost:3000/app/auth/';  
    
    if (process.env.NODE_ENV==='production'){
      host = 'https://zendallo.com/app/auth/';
    }
    const url = host + type + '/' + hash;
    return url;
  }
  
  function sendEmail(email) {
    return app.service('mailer').create(email).then(function (result) {
      console.log('Sent email', result);
    }).catch(err => {
      console.log('Error sending email', err);
    });
  }
  
  return {
    notifier: function(type, user, notifierOptions) {
      let tokenLink;
      let email;
      switch (type) {
      case 'resendVerifySignup': //sending the user the verification email
        tokenLink = getLink('verify', user.verifyToken);
        email = {
          from: app.get('emailFrom'),
          to: user.email,
          subject: 'Verify Signup',
          html: 'Welcome to Zendallo! ' +'Please verify your email here: ' +tokenLink
        };
        return sendEmail(email);
        break;
  
      case 'verifySignup': // confirming verification
        tokenLink = getLink('verify', user.verifyToken);
        email = {
          from: app.get('emailFrom'),
          to: user.email,
          subject: 'Confirm Signup',
          html: 'Thanks for verifying your email'
        };
        return sendEmail(email);
        break;
  
      case 'sendResetPwd':
        tokenLink = getLink('reset', user.resetToken);
        email = {
          from: app.get('emailFrom'),
          to: user.email,
          subject: 'Reset Password',
          html: 'Please follow link to reset password: ' +tokenLink
        };
        return sendEmail(email);
        break;
  
      case 'resetPwd':
        tokenLink = getLink('reset', user.resetToken);
        email = {
          from: app.get('emailFrom'),
          to: user.email,
          subject:  'Password chnaged',
          html: 'Your password has been changed.'
        };
        return sendEmail(email);
        break;
  
      case 'passwordChange':
        email = {};
        return sendEmail(email);
        break;
  
      case 'identityChange':
        tokenLink = getLink('verifyChanges', user.verifyToken);
        email = {};
        return sendEmail(email);
        break;
  
      default:
        break;
      }
    }
  };
};