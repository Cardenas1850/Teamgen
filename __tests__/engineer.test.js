const Engineer = require('../lib/engineer');

//create object
test('creates an Engineer', () => {
    const engineer = new Engineer('jason', 2, 'cardenas7122@gmail.com', 'Cardenas1850');
    expect(engineer.github).toEqual(expect.any(String));
})
//get github
test('gets the guthub account', () => {
    const engineer = new Engineer('jason', 2, 'cardenas7122@gmail.com', 'Cardenas1850');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// get role

test('gets role', () => {
    const engineer = new Engineer('jason', 2, 'cardenas7122@gmail.com', 'Cardenas1850');

    expect(engineer.getRole()).toEqual("Engineer")
});