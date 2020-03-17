'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('can accept planes to land', function(){
    expect(airport.planes()).toEqual([]);
  });
});
