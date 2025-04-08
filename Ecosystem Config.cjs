// ecosystem.config.cjs
module.exports = {
    apps: [{
      name: "paramedical-app",
      script: "serve",
      env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 5174,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }]
  }