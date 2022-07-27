const Employee = require('../lib/employee');
//creates object
test('creates an empoyee object', () => {
    const employee = new Employee('Jason', 1, 'Cardenas7122@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets the employee id

test('gets id', () => {
     const employee = new Employee('Jason', 1, 'Cardenas7122@gmail.com');
     
     expect(employee.getId()).toEqual(expect.any(Number));
});

//get email

test('gets emails', () => {
    const employee = new Employee('Jason', 1, 'Cardenas7122@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets the role

test('gets role', () => {
    const employee = new Employee('Jason', 1, 'Cardenas7122@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});