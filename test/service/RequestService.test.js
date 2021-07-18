const RequestService = require('../../src/service/RequestService');

describe('RequestService', () => {
    it('should set status to 200 on response object when receiving valid JSON', async () => {
        const req = {
            body: {"username": "test", "upload": "test"}
        };
        const res = {
            status: jest.fn(),
            setHeader: jest.fn(),
            send: jest.fn()
        };

        RequestService.handleRequest(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'text/plain');
        expect(res.send).toHaveBeenCalledWith({"username": "test", "upload": "test", "echoed": true});
    });

    it('should set status to 400 on response object when receiving invalid JSON', async () => {
        const req = {
            body: {"username": "test", "notupload": "test"}
        };
        const res = {
            status: jest.fn(),
            setHeader: jest.fn(),
            send: jest.fn()
        };

        RequestService.handleRequest(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'text/plain');
        expect(res.send).toHaveBeenCalledWith('Invalid request');
    });
});
