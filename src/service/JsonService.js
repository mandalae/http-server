const logger = require('../utils/logger');

module.exports = {
    enrichJson: (json) => {
        const newObject = { ...json };
        if (newObject.echoed !== true) {
            logger.info('Adding "echoed" flag to json');
            newObject.echoed = true;
        }
        return newObject;
    }
};
