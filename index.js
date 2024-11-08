import inquirer from 'inquirer';
import chalk from 'chalk';

async function getUserInfo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Qual é o seu nome?',
    },
    {
      type: 'input',
      name: 'age',
      message: 'Qual é a sua idade?',
      validate: (value) => {
        const valid = !isNaN(parseInt(value));
        return valid || 'Por favor, insira uma idade válida';
      },
    },
  ]);

  console.log(
    chalk.bgYellow.black(`Olá, ${answers.name}! Você tem ${answers.age} anos.`)
  );
}

getUserInfo();
