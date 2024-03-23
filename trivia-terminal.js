const readline = require('readline')

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
        answer: 'Brasília'
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        options: ['Miguel de Cervantes', 'William Shakespeare', 'Charles Dickens', 'Jane Austen'],
        answer: 'Miguel de Cervantes'
    },
    // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;

function askQuestion(){
    const currentQuestion = questions[currentQuestionIndex]

    console.log(`Pergunta: ${currentQuestion.question}`);
    console.log("Opções: ");

    currentQuestion.options.forEach((option, index) =>{
        console.log(`${index + 1}. ${option}`);
    })

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Escolha a opção correta (digite o número correspondente): ', (answer) =>{
        const selectedOptionIndex = parseInt(answer) - 1;
        const selectedOption = currentQuestion.options[selectedOptionIndex];

        console.log('teste');
        if(selectedOption === currentQuestion.answer){
            console.log("Resposta certa!");
        }else{
            console.log(`ERRRROU. A resposta é: ${currentQuestion.answer}`);
        }
        rl.close();
    })
   
} askQuestion();

