/**
 * To test the functionality of Client object in js/ermrest.js
 * Created by shuai on 3/1/16.
 */


describe('In ERMrest,', function () {
    var ermrestClientFactory, ermrestClient, ermrestBaseUrl;
    var $httpBackend;
    var functionType = 'function';
    beforeEach(module('ERMrest'));
    beforeEach(module('ngMock'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        //inject self-defined constant from testing Factory
        ermrestBaseUrl = $injector.get('ermrestBaseUrl');
        //inject ermrest factory service
        ermrestClientFactory = $injector.get('ermrestClientFactory');
    }));
    beforeEach(function () {
        //define mock file path
        jasmine.getJSONFixtures().fixturesPath = 'base/test/mock_data';
    });
    it('Promise should be available', function () {
        expect(Promise).toBeDefined();
    });
    it('ERMrest namespace should exist', function () {
        expect(ERMrest).toBeDefined();
    });
    it('Ermrest factory should not have ermrest client available before fetching it', function () {
        expect(ermrestClient).toBeUndefined();
    });
    it('Ermrest factory should get client object using example URL', function () {
        ermrestClient = ermrestClientFactory.getClient(ermrestBaseUrl);
        expect(ermrestClient).toBeDefined();
    });
    it('Ermrest client should have correct uri property', function () {
        expect(ermrestClient.uri).toBe(ermrestBaseUrl);
    });
    it('Ermrest client should have available \'getCatalog\' method', function () {
        expect(typeof ermrestClient.getCatalog).toBe(functionType);
    });
    it('Ermrest client should throw error when passing undefined to \'getCatalog\' method', function () {
        var errorMessage = 'ID is undefined or null';
        expect(function () {
            ermrestClient.getCatalog(undefined)
        }).toThrow(errorMessage);
        expect(function () {
            ermrestClient.getCatalog(null)
        }).toThrow(errorMessage);
    });
});
