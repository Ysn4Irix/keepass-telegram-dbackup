const Service = require('node-windows').Service
const { join } = require('path')

const svc = new Service({
  name: 'KeePass TlBackup',
  description:
    'Node application as Windows Service for backing up KeePass database to telegram',
  script: join(__dirname, '/app.js'),
})

svc.install()

svc.on('install', () => {
  svc.start()
})
