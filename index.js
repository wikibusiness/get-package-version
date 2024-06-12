const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const input = core.getInput('input');
  console.log('read input', input);
  const file = fs.readFileSync(input, 'utf8')
  
  console.log(`file is ${file}!`);
  const fileJson = JSON.parse(file);
  core.setOutput("output", fileJson.version);
  console.log(`The output: ${fileJson.version}`);
} catch (error) {
  core.setFailed(error.message);
}
