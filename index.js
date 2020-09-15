const robots = {
  input: require('./robots/input/index.js'),
  text: require('./robots/text/index.js'),
  image: require('./robots/image/index.js'),
  //illustrator: require('./robots/illustrator.js'),
  //instagram: require('./robots/instagram.js')
}

async function start() {
  //robots.input()
  //await robots.text()
  await robots.image()
  //await robots.illustrator()
  //await robots.instagram()
}

start()