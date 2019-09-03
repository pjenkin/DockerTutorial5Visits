// Docker course 5-48 code for container to HTTP respond with number of visits

const express = require('express');
const redis = require('redis');
const process = require('process');     // 5-56/57 to deliberately ensure crash, for instruction purposes only

const app = express();
const client = redis.createClient({
    host: 'redis-server',    // would normally be URL here (if not in docker-compose) - else use service name as in yml
    port: 6379              // 6379 is default Redis port anyway
});    // 5-53 refer to redis container as defined as service in docker-compose yml

client.set('visits', 0);    // client - Redis in-memory db

// if request, respond with total number of visits so far
app.get('/', (request, response) => {
    process.exit(123);        // 5-56/57 to deliberately ensure crash, for instruction purposes only
    client.get('visits', (err, visits) => {
        response.send('Number of visits is: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 4001 (on host machine, actually on 8081 in container)');
});