const { writeFileSync } = require('fs');
const { argv } = require('yargs');

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment || 'dev';
const isProd = () => environment === 'prod';

const envConfigFile = `
export const environment = {
  production: ${isProd()},
  firebaseConfig: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${process.env.FIREBASE_DATABASE_URL}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
  },
  rollbarConfig: {
    accessToken: '${process.env.ROLLBAR_ACCESS_TOKEN}',
    captureUncaught: true,
    captureUnhandledRejections: true,
  }
};
`;

const envFolder = './src/environments';

writeFileSync(`${envFolder}/environment.ts`, envConfigFile);
if (isProd()) {
  writeFileSync(`${envFolder}/environment.${environment}.ts`, envConfigFile);
}
