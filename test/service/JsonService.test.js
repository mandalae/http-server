const JsonService = require('../../src/service/JsonService');

describe('JsonService', () => {
    const inputJson = {"username":"xyz","upload":"xyz"};

    it('should enrich the json with echoed flag', async () => {
        const expected = { ...inputJson };
        expected.echoed = true;
        const actual = JsonService.enrichJson(inputJson);
        expect(actual).toEqual(expected);
    });

    it('should not add en echoed flag if one already exists and is true', async () => {
        inputJson.echoed = true;

        const expected = { ...inputJson };
        expected.echoed = true;

        const actual = JsonService.enrichJson(inputJson);

        expect(actual).toEqual(expected);
    });

    it('should add an echoed flag if echoed flag exists but is not true', async () => {
        inputJson.echoed = false;

        const expected = { ...inputJson };
        expected.echoed = true;

        const actual = JsonService.enrichJson(inputJson);

        expect(actual).toEqual(expected);
    });

    it('should add an echoed flag if echoed flag exists but is a string', async () => {
        inputJson.echoed = 'true';
        
        const expected = { ...inputJson };
        expected.echoed = true;

        const actual = JsonService.enrichJson(inputJson);

        expect(actual).toEqual(expected);
    });
});
