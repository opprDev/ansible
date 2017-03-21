module.exports = {
  app: {
    port: 9090,

    logs: {

      console: {
        level: 'debug'
      },

      file: {
        level: 'debug'
      }

    },

    jwt_key: 'aaaaaaaaa',
    passwords: {
      saltRounds: 10
    },

    database: {
      host: '127.0.0.1',
      user: 'snapjob',
      password: 'snapjob',
      database: 'snapjob'
    }
  }
}