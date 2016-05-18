module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/shipit_workspace',
      dirToCopy: 'www',
      deployTo: '/home/nodejs/app/test',
      repositoryUrl: 'https://github.com/norimasuda/test.git',
      branch: 'master',
      keepReleases: 10,
      deleteOnRollback: false
    },
    staging: {
      servers: 'nodejs@ec2-52-11-19-57.us-west-2.compute.amazonaws.com',
      key: '/Users/Nori/Keypairs/myawskeypair3.pem'
    },
    staging_jenkins: {
      servers: 'nodejs@ec2-52-11-19-57.us-west-2.compute.amazonaws.com',
      key: '/var/lib/jenkins/keys/myawskeypair3.pem'
    },
  });

  shipit.task('task2', function () {
    return shipit.remoteCopy ('/tmp/shipit_workspace/www/main.js', '/home/nodejs/app/test/current/main.js');
  });

  shipit.task('pwd', function () {
    shipit.start('task1');
    return shipit.remote('cd galarm; echo TEST > test.log; pwd');
  });

  shipit.task('task1', function () {
    return shipit.remote('cd galarm; echo TASK1 > task1.log; pwd');
  });
 
};

