module.exports = {
  apps : [{
    name      : '24cryptobank.com', // App name that shows in `pm2 ls`
    exec_mode : 'fork', // enables clustering
    instances : 1, // or an integer
    // cwd       : './', // only if using a subdirectory
    script    : './node_modules/nuxt/bin/nuxt.js', // The magic key
  }]
};
