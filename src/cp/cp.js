import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./files/script.js', ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.stderr.pipe(process.stderr);

  process.on('exit', () => {
    childProcess.kill();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg-1', 'arg-2', 'arg-2', 'arg-4']);
