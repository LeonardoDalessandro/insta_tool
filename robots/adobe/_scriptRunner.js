const spawn = require('child_process').spawnSync

async function runAiTask() {
  console.log('> [adobe-robot] Running Adobe Illustrator automation ...')
  const path = './content/aiTask.vbs'
  const vbs = spawn('cscript.exe', [path, 'one'] )

  console.log( `stderr: ${vbs.stderr.toString()}` );
  console.log( `stdout: ${vbs.stdout.toString()}` );
  console.log( `status: ${vbs.status}` );
  console.log(`> [adobe-robot] All slide are ready to upload`)
}

module.exports = {
  runAiTask,
}