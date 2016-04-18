module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/shipit_workspace',
      deployTo: '/home/nodejs/app/test',
      repositoryUrl: 'https://github.com/norimasuda/test.git',
    },
    staging: {
      servers: 'nodejs@ec2-52-11-19-57.us-west-2.compute.amazonaws.com',
      key: '/Users/Nori/Keypairs/myawskeypair3.pem'
    },
    staging-local: {
      servers: 'nodejs@ec2-52-11-19-57.us-west-2.compute.amazonaws.com',
      key: '/home/nodejs/keys/myaswkeypair3.pem'
    },
  });

  shipit.task('pwd', function () {
    shipit.start('task1');
    return shipit.remote('cd galarm; echo TEST > test.log; pwd');
  });

  shipit.task('task1', function () {
    return shipit.remote('cd galarm; echo TASK1 > task1.log; pwd');
  });
 
};

