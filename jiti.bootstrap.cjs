const path = require('path')

process.env.JITI_ALIAS = JSON.stringify({
  '@src': path.resolve(__dirname, 'src'),
})

const jiti = require('jiti')(__filename)

jiti('./playground/index.ts')
