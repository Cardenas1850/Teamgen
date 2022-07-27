const Intern = require('../lib/intern');

//create object
test('creates an Intern', () => {
    const intern = new Intern('jason', 2, 'cardenas7122@gmail.com', 'Ball State');

    expect(intern.school).toEqual(expect.any(String));
});
//get school
test('gets the intern school', () => {
    const intern = new Intern('jason', 2, 'cardenas7122@gmail.com', 'Ball State');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// get role

test('gets role', () => {
    const intern = new Intern('jason', 2, 'cardenas7122@gmail.com', 'Ball State');

    expect(intern.getRole()).toEqual("Intern")
});