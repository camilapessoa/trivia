const express = require('express');
const app = express()

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

app.get('/', (req, res) =>{
    const currentQuestion = questions[currentQuestionIndex];
    res.send(`
    <h1> Trivia Game</h1>
    <h2>${currentQuestion.question}</h2>
    <ul>
        ${currentQuestion.options.map(option => `<li> <a href="/answer?choice=${encodeURIComponent(option)}">${option}</a></li>`).join('')}
    <ul>
    `);
})

app.get('/answer', (req, res) =>{
    const userChoice = req.query.choice
    const currentQuestion = questions[currentQuestionIndex]

    if(userChoice === currentQuestion.answer){
        res.send('<h1> Resposta correta!</h1>')
    }else{
        res.send(`<h1> ERROUUU. A resposta certa é: ${currentQuestion.answer}</h1>`)
    }


})


const port = 3000;
app.listen(port, () =>{ console.log(`Servidor rodando em localhost:${port}`)})