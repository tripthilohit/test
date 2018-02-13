var userNames = {
  
  memberURL: 'https://tripsprint95q.staging.socialmedialink.com',
  memberEmail: 'sansa@yopmail.com',
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
  sprint: '95q',
  adminURL: 'https://admin.staging.socialmedialink.com',
  adminEmail: 'tripsprint95q@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'tripthishetty20@gmail.com',
  facebookPass: 'qwerty$',
  twitterEmail: 'tripthi.testmember15@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'tripthi.shetty',
  instagramPass: 'abcd1234',
  superAdminEmail: 'tripthi.testmember3@socialmedialink.com',
  superAdminPass: 'General123$',
  account_no: 673,
  path: 'C:/Users/you/Downloads/',
  memberEmailFemale: 'andrew@yopmail.com'
};

var cbt = require('cbt_tunnels');

module.exports = {
  beforeEach : function(done) {
    console.log('Starting up tunnel');
    cbt.start({
      'username': 'tripthi.shetty@socialmedialink.com',
      'authkey': 'u283c7d7d4fafeb7'
    }, function(err, data) {
      if (err) {
        done(err);
      } else {
        done(data);
      }
    });
  },
  userNames: userNames,

  afterEach : function(done) {
    console.log('Closing Down Tunnel');
    cbt.stop();
    done();
  }
}
