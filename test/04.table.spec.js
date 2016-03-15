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

    var catalog, schemas, legacySchema;
    var legacy = 'legacy';
    //choose 'dataset' as the table
    var dataset = 'dataset', datasetTable, datasetTableEntities;

    beforeEach(function () {
        //fetch client
        ermrestClient = ermrestClientFactory.getClient(ermrestBaseUrl);
        //define mock data source for 'catalog.introspect()'
        $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/schema')
            .respond(getJSONFixture('catalog.1.schema.data.json'));
        catalog = ermrestClient.getCatalog(catalog_id);
        catalog.introspect();
        $httpBackend.flush();
        //schemas['legacy'] ['public']
        schemas = catalog.getSchemas();
        legacySchema = schemas[legacy];
    });

    it('Ermrest catalog should get \'dataset\' table,', function () {
        datasetTable = legacySchema.getTable(dataset);
        expect(datasetTable).toBeDefined();
    });
    describe('dataset table', function () {
        beforeEach(function () {
            //define mock data for URL
            //uri: catalog/1/entity/legacy:dataset
            $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset)
                .respond(getJSONFixture('catalog.1.entity.legacy:dataset.json'));
        });
        it('should have \'dataset\' as its name property,', function () {
            expect(datasetTable.name).toBe(dataset);
        });
        it('should have getEntites() method available,', function () {
            expect(typeof datasetTable.getEntities).toBe(functionType);
        });
        it('should get all of its entities,', function () {
            datasetTable.getEntities().then(function (data) {
                datasetTableEntities = data;
            });
            //$digest() enables Promise to be resolved
            //$rootScope.$digest();
            //flush() enables the http request to be sent
            $httpBackend.flush();
        });
        it('should have >0 entities,', function () {
            var num = 0;
            for (var each in datasetTableEntities) {
                //num = 598
                num++;
            }
            expect(num).toBeGreaterThan(0);
        });

    });


});
