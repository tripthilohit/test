var userNames = {
  
  memberURL: 'https://sul.staging.socialmedialink.com/',
  memberEmail: 'sansa@yopmail.com',
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
  sprint: '95y',
  adminURL: 'https://admin-smiley.socialmedialink.com/',
  adminEmail: 'suk@yopmail.com',
  adminPassword: 'General1234#',
  facebookEmail: 'sukada.testmember8@socialmedialink.com',
  facebookPass: 'general1234',
  twitterEmail: 'sukada.ramakrishna@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'tripthi.shetty',
  instagramPass: 'abcd1234',
  superAdminEmail: 'tripthi.testmember3@socialmedialink.com',
  superAdminPass: 'General123$',
  account_no: 667,
  path: 'C:/Users/you/Downloads/',
  darDate:"(//td[@class='day'])[12]",
  uin:'12340'
 
   };
  
var cbt = require('cbt_tunnels');

module.exports = {
  beforeEach : function(done) {
    console.log('Starting up tunnel');
    cbt.start({
      'username': 'sukada.ramakrishna@socialmedialink.com',
      'authkey': 'u89e4efd851e17e7'
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
