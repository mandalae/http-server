const JsonService = require('./JsonService');
const logger = require('../utils/logger');

module.exports = {
    handleRequest: (req, res) => {
        if (JsonService.validateJson(req.body)) {
            logger.info('Received valid body=', JSON.stringify(req.body));
            res.status(200);
            res.setHeader('Content-Type', 'text/plain');
            res.send(JsonService.enrichJson(req.body));
        } else {
            logger.info('Received invalid body=', JSON.stringify(req.body));
            res.status(400);
            res.setHeader('Content-Type', 'text/plain');
            res.send('Invalid request');
        }
    }
};
