// Docker course 5-48 code for container to HTTP respond with number of visits

const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

client.set('visits', 0);    // client - Redis in-memory db

// if request, respond with total number of visits so far
app.get('/', (request, response) => {
    client.get('visits', (err, visits) => {
        response.send('Number of visits is: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(808, () => {
    console.log('Listening on port 8081');
});