import { env } from 'node:process';

const parseEnv = () => {
  const variables = Object.entries(env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`);

  if (variables.length > 0) {
    console.log(variables.join('; '));
  } else {
    console.log('No environment variables');
  }
};

parseEnv();
