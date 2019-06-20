module.exports = {
  apps : [{
    name      : '24cryptobank.com', // App name that shows in `pm2 ls`
    exec_mode : 'cluster', // enables clustering
    instances : 'max', // or an integer
    // cwd       : './', // only if using a subdirectory
    script    : './node_modules/nuxt/bin/nuxt-start', // The magic key
  }]
};
