const JsonService = require('./JsonService');
const logger = require('../utils/logger');

module.exports = {
    handleRequest: (req, res) => {
        logger.info('Received body=', JSON.stringify(req.body));
        res.status(200);
        res.setHeader('Content-Type', 'text/plain');
        res.send(JsonService.enrichJson(req.body));
    }
};
