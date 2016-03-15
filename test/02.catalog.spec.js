/**
 *
 * Created by shuai on 3/1/16.
 */

describe('In ERMrest,', function () {
    var ermrestClientFactory, ermrestClient, ermrestBaseUrl;
    var $httpBackend;
    var catalog_id = 1;
    var functionType = 'function';

    beforeEach(module('ERMrest'));
    beforeEach(module('ngMock'));
    beforeEach(inject(function ($injector) {
        //inject service from AngularJS
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

    var catalog;

    beforeEach(function () {
        //fetch client
        ermrestClient = ermrestClientFactory.getClient(ermrestBaseUrl);
        //define mock data source for 'catalog.introspect()'
        $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/schema')
            .respond(getJSONFixture('catalog.1.schema.data.json'));
    });

    describe('Ermrest catalo ', function () {
        it('of id ' + catalog_id + ' should be fetched', function () {
            catalog = ermrestClient.getCatalog(catalog_id);
            expect(catalog).toBeDefined();
        });
        it('should have correct client property', function () {
            expect(catalog.client).toBe(ermrestClient);
        });
        var schemas;
        it('should fetch schema data using its URI', function () {
            catalog.introspect().then(function (data) {
                schemas = data;
                expect(schemas).toBeDefined();
            });
            //$digest() enables Promise to be resolved
            //$rootScope.$digest();
            //flush() enables the http request to be sent
            $httpBackend.flush();
        });
        it('should have available getSchemas() method', function () {
            expect(typeof catalog.getSchemas).toBe(functionType);
        });
        it('should get the same schema data using getSchemas() method', function () {
            var schemasGotFromMethod = catalog.getSchemas();
            expect(schemasGotFromMethod).toBe(schemas);
        });

    });

});
