const robots = {
  input: require('./robots/input/index.js'),
  text: require('./robots/text/index.js'),
  image: require('./robots/image/index.js'),
  adobe: require('./robots/adobe/index.js'),
  instagram: require('./robots/instagram.js')
}

async function start() {
  //robots.input()
  //await robots.text()
  //await robots.image()
  await robots.adobe()
  //await robots.instagram()
}

start()