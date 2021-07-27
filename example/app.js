const Balaboba = require('../src/balaboba');
const balaboba = new Balaboba();

balaboba.generate('Данил Прытков пришёл').then(response => {
    console.log(response);
});