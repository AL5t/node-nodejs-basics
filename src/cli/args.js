import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);
  const argsWithValue = [];
  let result = '';

  for(let i = 0; i < args.length; i++) {
    if(args[i].startsWith('--')) {
      argsWithValue.push(`${args[i].slice(2)} is ${args[i + 1]}`); 
    }
  }
  result = argsWithValue.join(', ');
  console.log(result);
};

parseArgs();
