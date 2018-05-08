const fs = require('fs')
const request = require('request')
const sri = require('sri')

module.exports = function (path) {
  const getFileFunc = /^http/.test(path) ? fetchFile : getFileFromPath

  getFileFunc(path).then((file) => {
    console.log('sha384 encryption result:')
    console.log(sri.getSRIString(file))
  }).catch((err) => {
    console.log(err)
  })
}

function fetchFile (url) {
  return new Promise((resolve, reject) => {
    request.get({ url }, (error, response, body) => {
      if (!error) {
        // eslint-disable-next-line
        if (response.statusCode == 200) {
          resolve(body)
        } else {
          reject(new Error(response.statusCode + ':' + response.statusMessage))
        }
      } else {
        reject(error)
      }
    })
  })
}

function getFileFromPath (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) resolve(err)
      resolve(data)
    })
  })
}
