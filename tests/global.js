var userNames = 
{
	url: 'https://www.compass.com/',
email: 'tripthishetty86@gmail.com',
pass: 'watchit2$',
sprint: 'sprint1'
}

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