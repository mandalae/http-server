const expect = require('chai').expect;
const JsonService = require('../../src/service/JsonService');

describe('JsonService', () => {
    const inputJson = {"username":"xyz","upload":"xyz"};

    it('should enrich the json with echoed flag', async () => {
        const actual = JsonService.enrichJson(inputJson);
        expect(actual).to.have.property('echoed', true);
    });

    it('should not add en echoed flag if one already exists and is true', async () => {
        inputJson.echoed = true;
        const actual = JsonService.enrichJson(inputJson);

        expect(actual).to.have.property('echoed', true);
    });

    it('should add an echoed flag if echoed flag exists but is not true', async () => {
        inputJson.echoed = false;
        const actual = JsonService.enrichJson(inputJson);

        expect(actual).to.have.property('echoed', true);
    });

    it('should add an echoed flag if echoed flag exists but is a string', async () => {
        inputJson.echoed = 'true';
        const actual = JsonService.enrichJson(inputJson);

        expect(actual).to.have.property('echoed', true);
    });
});
