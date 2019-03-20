var expect = require('chai').expect;
var Data = require('../backend/db/data');


describe('data schema test', function(){

  it('DataSchema should be invalid if name is not given', function(done) {
    var d = new Data();

    d.validate(function(err){
      expect(err.errors.name).to.exist;
      done();
    });
  });


  it('DataSchema should be valid when there is a name', function(done){
    var d = new Data({name: 'Roy Lee', id:10023});

    expect(d.name).to.equal('Roy Lee');
    expect(d.id).to.equal(10023);
    done();
  });


})
