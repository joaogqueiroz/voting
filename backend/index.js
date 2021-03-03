const express = require('express');
const app = express();

let candidates = [];
let totalVotes = 0;

function fillCandidates(){
    candidates = [
        {
            id: 1,
            name: 'Marco Minnemann',
            votes: 0,
            percentage: 0,
        },
        {
            id: 2,
            name: 'Mike Portnoy',
            votes: 0,
            percentage: 0,
        },
        {
            id: 3,
            name: 'Neil Peart',
            votes: 0,
            percentage: 0,
        }
    ];
}

function getRandomNumber(from = 1, to = 10000){
    return Math.ceil(Math.random() * to);
}


app.get('/', (req, res)=> {
    res.json({messege:'Olá do servidor'});

});

app.listen(8080);

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());