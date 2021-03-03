const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let candidates = [];
let totalVotes = 0;

function fillCandidates(){
    candidates = [
        {
            id: 1,
            name: 'Corey Taylor',
            votes: 0,
            percentage: 0,
        },
        {
            id: 2,
            name: 'Chester Bennington',
            votes: 0,
            percentage: 0,
        },
        {
            id: 3,
            name: 'Chris Cornell',
            votes: 0,
            percentage: 0,
        }
    ];
}

function simulateVotes(){
    setInterval(() => {
        candidates.forEach(candidate => {
        const votes = getRandomNumber();
        totalVotes += votes;
        candidate.votes += votes;
        candidate.percentage = (candidate.votes / totalVotes) * 100;
    });

    console.log(candidates)       
    }, 1000)
}

function getRandomNumber(from = 1, to = 10000){
    return Math.max(from, Math.ceil(Math.random() * to));
}

//Routes

app.get('/', (req, res)=> {
    res.json({messege:'Olá do servidor'});

});

app.get('/votes', (req, res)=> {
    const sortedCandidates = candidates.sort((a,b) => {
        b.votes - a.votes;
    });
    res.json({candidates: sortedCandidates});
});

app.listen(8080);

fillCandidates();
simulateVotes();