const RequestService = require('../../src/service/RequestService');

describe('RequestService', () => {
    it('should set status to 200 on response object', async () => {
        const req = {
            body: {"test": "test"}
        };
        const res = {
            status: jest.fn(),
            setHeader: jest.fn(),
            send: jest.fn()
        };

        RequestService.handleRequest(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'text/plain');
        expect(res.send).toHaveBeenCalledWith({"test": "test", "echoed": true});
    });
});
