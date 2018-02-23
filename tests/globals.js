var userNames = {
  
<<<<<<< HEAD
  memberURL: 'https://suksprint96a.staging.socialmedialink.com',
  memberEmail: 'suk@yopmail.com',
=======
  memberURL: 'https://tripsprint95t.staging.socialmedialink.com',
  memberEmail: 'mark@yopmail.com',
>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
<<<<<<< HEAD

  sprint: '96a',
  adminURL: 'https://admin.staging.socialmedialink.com/',
  adminEmail: 'tripsprint95kroger@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'sukada.testmember8@socialmedialink.com',
  facebookPass: 'general1234',
  twitterEmail: 'sukada.ramakrishna@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'sukadar',
  instagramPass: 'general1234',
  superAdminEmail: 'sukada.ramakrishna@socialmedialink.com',
  superAdminPass: 'General1234#',
  account_no: 667,
  path: 'C:/Users/you/Downloads/',
  darDate:"(//td[@class='day'])[12]",
  uin:'12340'
 
   };
=======
  sprint: '95t',
  adminURL: 'https://admin.staging.socialmedialink.com',
  adminEmail: 'tripsprint95t@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'kqqdfbv_alisonsen_1454598705@tfbnw.net',
  facebookPass: 'general1234',
  twitterEmail: 'tripthi.testmember15@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'tripthi.shetty',
  instagramPass: 'abcd1234',
  superAdminEmail: 'tripthi.testmember3@socialmedialink.com',
  superAdminPass: 'General123$',
  account_no: 667,
  path: 'C:/Users/you/Downloads/',
  memberEmailFemale: 'lolo@yopmail.com',
  darDate:"(//td[@class='day'])[12]",
  uin:'12340'
};

>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
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