module.exports =  {
  apps : [{
    name: 'mini-shop',
    script: './app.js',
    watch: '.',
    ignore_watch: ['node_modules'],
    port: 3000,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
