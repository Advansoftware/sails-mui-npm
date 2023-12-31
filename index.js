#!/usr/bin/env node

const readline = require('readline-sync');
const colors = require('colors');
const { execSync } = require('child_process');
const open = require('open');
const fs = require('fs');
const name = readline.question('Digite o nome do projeto:\n-> '.green).trim();

const repoLink = 'https://github.com/Advansoftware/SailsMui.git';
const repoName = repoLink.concat(' '+ name);
if(name===''){
  return console.log('Error: Nome do projeto obrigatorio!'.red);
}

execSync(`git clone ${repoName}`, { stdio: 'inherit' });

execSync(
  `cd ${name} && npm install`,
  { stdio: 'inherit' }
);