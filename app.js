const request = require('request')
const { createReadStream } = require('fs')
const { basename } = require('path')

//! chat_id is the id of the telegram account chat use ur own
const { apiUrl, token, chat_id, db_path } = require('./config.json')

const url = `${apiUrl}${token}/sendDocument`

setInterval(() => {
  let r = request(url, (err, _, body) => {
    if (err) console.log(err)
    console.log(body)
  })

  let f = r.form()

  f.append('chat_id', chat_id)

  const filename = `${basename(db_path)}_${new Date().toISOString()}`
  f.append('document', createReadStream(db_path), {
    filename,
  })
}, 604800000) //* 604800000 is equivalent to one week in milliseconds
