module('Testing classes');

test( 'Ninja class', function() {
    var igor = new Ninja( { name: 'Igor', age: 23, speed: 'fast'} );

    equal(igor.name, 'Igor', 'adding name' );
    equal(igor.age, 23, 'adding age');
});

test( 'Person class', function() {
    var person = new Person( {face: true} );

    equal(person.face, true, 'has face');
});

