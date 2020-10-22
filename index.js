const robots = {
  input: require('./robots/input/index.js'),
  text: require('./robots/text/index.js'),
  image: require('./robots/image/index.js'),
  adobe: require('./robots/adobe/index.js'),
  //social: require('./robots/social/index.js')
}

async function start() {
  await robots.input()
  await robots.text()
  await robots.image()
  await robots.adobe()
  //await robots.social()
}

try{
  start()
} catch (e) {
  console.log('[index] Generic error')
  console.error(e)
}
