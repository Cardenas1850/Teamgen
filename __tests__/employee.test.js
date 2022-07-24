const Employee = require('../lib/employee');

test('creates an empoyee object', () => {
    const employee = new Employee('Asta', 5, 'MrNoMana@magicknights.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

