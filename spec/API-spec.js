import { API } from './../src/API';

describe('API', function () {

    it('should create an object of the class API with apiKey 1234', function () {
        let newAPI = new API(1234, "frank");
        expect(newAPI.apiKey).toEqual(1234);
    });

    it('should create an object of the class API with user input Frank', function () {
        let newAPI = new API(1234, "frank");
        expect(newAPI.userInput).toEqual("frank");
    });

});


