import { Worker } from 'node:worker_threads';
import os from 'node:os';

const performCalculations = async () => {
  const numOfCPUs = os.cpus().length;
  const results = [];
  const workers = [];

  for (let i = 0; i < numOfCPUs; i++) {
    const worker = new Worker('./worker.js');
    const numberToSend = 10 + i;

    worker.postMessage(numberToSend);

    worker.on('message', (result) => {
      results[i] = { status: 'resolved', data: result };
      worker.terminate();
      if (results.length === numOfCPUs && !results.includes(undefined)) {
        console.log(results);
      }
    });

    worker.on('error', (error) => {
      results[i] = { status: 'error', data: null };
      worker.terminate();
      if (results.length === numOfCPUs && !results.includes(undefined)) {
        console.log(results);
      }
    });

    workers.push(worker);
  }
};

await performCalculations();
