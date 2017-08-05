#!/usr/bin/env node

const fs = require('fs')
const ini = require('ini')

const [, , file, ...fields] = process.argv

fs.readFile(file, 'utf-8', function gotFile(err, buffer) {
  if (err) {
    console.log(err)
    process.exit(-1)
  }
  let result = ini.parse(buffer)
  while (fields.length) {
    const field = fields.shift()
    result = result[field]
  }
  if ('undefined' !== typeof result) {
    process.stdout.write(result)
  }
})
