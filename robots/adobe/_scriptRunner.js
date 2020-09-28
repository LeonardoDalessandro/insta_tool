const spawn = require('child_process').spawnSync

async function runAiTask() {

  const path = './content/aiTask.vbs'
  const vbs = spawn('cscript.exe', [path, 'one'] )

  console.log( `stderr: ${vbs.stderr.toString()}` );
  console.log( `stdout: ${vbs.stdout.toString()}` );
  console.log( `status: ${vbs.status}` );
  
}

module.exports = {
  runAiTask,
}