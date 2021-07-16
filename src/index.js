const express = require('express');
const JsonService = require('./service/JsonService');

const logger = require('./utils/logger');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

const handleRequest = (req, res) => {
    logger.info('Received body=', JSON.stringify(req.body));
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send(JsonService.enrichJson(req.body));
};

app.use(express.json());

app.post('/api/echo', handleRequest);
app.put('/api/echo', handleRequest);

app.listen(3000, () => {
    logger.info('Application started on port 3000');
});
