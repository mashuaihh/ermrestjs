/**
 * Created by shuai on 2/19/16.
 */

describe('ERMrest', function () {

    var client;
    beforeEach(module('ERMrest'));
    beforeEach(inject(function (ermrestClientFactory) {
        client = ermrestClientFactory.getClient('https://dev.misd.isi.edu/ermrest', null);
    }));

    it('Promise is available', function() {
        // TBD This is really a prerequisite and probably doesn't belong here
        // but it serves as a sanity check before getting into the rest of
        // the tests.
        expect(Promise).toBeDefined();
    });

    it('ERMrest namespace should exist', function(){
        expect(ERMrest).toBeDefined();
    });
    it('client namespace should exist', function(){
        expect(client).toBeDefined();
    });
    it('get a catalog', function(){
        catalog = client.getCatalog(1); // dev server catalog 1 => fb
        console.log(catalog);
    });


});