const express = require('express');
const promMid = require('express-prometheus-middleware');
const JsonService = require('./service/JsonService');

const logger = require('./utils/logger');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

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
