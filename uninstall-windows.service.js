var Service = require('node-windows').Service
const { join } = require('path')

const svc = new Service({
  name: 'KeePass TlBackup',
  description:
    'Node application as Windows Service for backing up KeePass database to telegram',
  script: join(__dirname, '/app.js'),
})

svc.on('uninstall', () => {
  console.log('Uninstall complete.')
  console.log('The service exists: ', svc.exists)
})

svc.uninstall()
