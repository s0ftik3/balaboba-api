# (Unofficial) Balaboba API
## Installing
```
$ npm install balaboba-api
```

## Usage
```javascript
const Balaboba = require('balaboba-api');
const balaboba = new Balaboba();
```

### `generate(text, style)`
```javascript
balaboba.generate('Слава написал API').then(response => {
    return console.log(response);
}).catch(err => {
    return console.error(err);
});
```
Text must be in Russian, there are 13 styles available starting from 0 (zero is no style at all).

### Info
* All the data is fetched from [Yandex](https://yandex.ru/lab/yalm).
* Author of the API [s0ftik3](https://t.me/vychs).