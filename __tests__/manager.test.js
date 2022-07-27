const Manager = require('../lib/manager');

//create manager object

test('create manager object', () => {
    const manager = new Manager('Jason', 2, 'Cardenas7122@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get manager role

test('gets role', () => {
    const manager = new Manager('Jason', 2, 'Cardenas7122@gmail.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});