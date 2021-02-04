const mongoose = require('../db/connection')
const Tunr = require('../models/tunr')
const db = mongoose.connection
const manyTunrs = require('./seed.json')

async function createTunrs(array) {
  const tunrs = await Tunr.insertMany(manyTunrs)
  console.log('tunrs', tunrs)
}
createTunrs(manyTunrs)