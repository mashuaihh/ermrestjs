/**
 *
 * Created by shuai on 3/1/16.
 */

describe('In ERMrest,', function () {
    var ermrestClientFactory, ermrestClient, ermrestBaseUrl;
    var $httpBackend;
    var catalog_id = 1;
    var functionType = 'function';
    var numsOfRowsBefore = 0, numsOfRowsAfter = 0;

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
        it('should get all of its entities and should have >0 entities,', function () {
            datasetTable.getEntities().then(function (data) {
                datasetTableEntities = data;
                for (var each in datasetTableEntities) {
                    //num = 598
                    numsOfRowsBefore++;
                }
                expect(numsOfRowsBefore).toBeGreaterThan(0);
            });
            //$digest() enables Promise to be resolved
            //$rootScope.$digest();
            //flush() enables the http request to be sent
            $httpBackend.flush();
        });
        it('should have >0 columns', function () {
            expect(datasetTable.columns.length).toBeGreaterThan(0);
        });

    });

    describe('dataset table creates entity', function () {
        var rowId = 13569;
        beforeEach(function () {
            $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset)
                .respond(getJSONFixture('catalog.1.entity.legacy:dataset.createEntity.json'));
            $httpBackend.whenPOST(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset
            + '?defaults=id').respond(getJSONFixture('catalog.1.entity.legacy:dataset.createEntity.json'));
            //https://example.com/ermrest/catalog/1/entity/legacy:dataset?defaults=id
            $httpBackend.whenGET(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset
            + '/id=13569').respond(getJSONFixture('catalog.1.entity.legacy:dataset.id.13569.json'));
        });
        it('should create an entity', function () {
            //id default to 13569
            var entityData = [{"accession":"FB00000004","pubmed_id":null,"title":"testingTitle","owner":"Steve Potter",
                "project":154,"funding":"testingFunding","summary":"testingSummary","description":"TestingDescription",
                "thumbnail":17416}];
            var defaults = ['id'];
            datasetTable.createEntity(entityData, defaults).then(function (response) {
                expect(response).toBeDefined();
            });
            $httpBackend.flush();
        });
        it('should have one more row after inserting', function () {
            datasetTable.getEntities().then(function (data) {
                datasetTableEntities = data;
                for (var each in datasetTableEntities) {
                    //num = 598
                    numsOfRowsAfter++;
                }
                expect(numsOfRowsAfter).toBe(numsOfRowsBefore + 1);
            });
            $httpBackend.flush();
        });
        it('should find the inserted row', function () {
            datasetTable.getFilteredTable(['id=' + rowId]).getEntities().then(function (response) {
                //console.log(response[0].data.id);
                expect(response[0].data.id).toBe(rowId);
            });
            $httpBackend.flush();
        });
    });

    describe('dataset table deletes entity', function () {
        var deleteId = 1568;
        beforeEach(function () {
            $httpBackend.whenDELETE(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset
                + '/id=' + deleteId).respond(204);
        });
        it('should delete the entity', function () {
            var entityToBeDeleted = {id: deleteId};
            datasetTable.deleteEntity(entityToBeDeleted).then(function (response) {
                expect(response.status).toBe(204);
            });
            $httpBackend.flush();
        })
    });

    describe('dataset table updates entity', function () {
        var updateId = 13569;
        beforeEach(function () {
            $httpBackend.whenPUT(ermrestBaseUrl + '/catalog/' + catalog_id + '/entity/' + legacy + ':' + dataset
            ).respond(getJSONFixture('catalog.1.entity.legacy:dataset.id.13569.json'));
        });
        it('should update the entity', function () {
            var entityToBeUpdated = datasetTableEntities[0];
            var newTitle = "testingTitle";
            entityToBeUpdated.data.title = newTitle;
            datasetTable.updateEntities([entityToBeUpdated]).then(function (response) {
                expect(response[0][0].title).toBe(newTitle);
            });
            $httpBackend.flush();
        })
    });

});
