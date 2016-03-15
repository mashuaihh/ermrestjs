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
        //define mock file path
        jasmine.getJSONFixtures().fixturesPath = 'base/test/mock_data';
    }));

    var catalog, schemas;
    beforeEach(function () {
        //fetch client
        ermrestClient = ermrestClientFactory.getClient(ermrestBaseUrl);
        //define mock data source for 'catalog.introspect()'
        $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/schema')
            .respond(getJSONFixture('catalog.1.schema.data.json'));
        catalog = ermrestClient.getCatalog(catalog_id);
        catalog.introspect();
        $httpBackend.flush();
    });

    it('Ermrest catalog should fetch schema data using its URI,', function () {
        //schemas['legacy'] ['public']
        schemas = catalog.getSchemas();
        expect(schemas).toBeDefined();
    });

    describe('ermrest schemas', function () {
        var legacy = 'legacy';
        var legacySchema, legacySchemaTables;
        it('should get undefined when retrieving non-existing schema,', function () {
            expect(schemas['somethingDoesNotExist']).toBeUndefined();
        });
        it('should get the \'legacy\' schema,', function () {
            legacySchema = schemas[legacy];
            expect(legacySchema).toBeDefined();
        });
        describe('legacy schema', function () {
            it('should have the \'legacy\' name property,', function () {
                expect(legacySchema.name).toBe(legacy);
            });
            it('should have the correct catalog property,', function () {
                expect(legacySchema.catalog).toBe(catalog);
            });
            it('should have getTable() method available', function () {
                expect(typeof legacySchema.getTable).toBe(functionType);
            });
        });

    });


});
