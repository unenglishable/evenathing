##Start the thing

1. Get the thing

    ```bash
    git clone [this repo, lol]
    cd evenathing
    npm install
    ```

2. Create a config.js file or a thing.js file (or copy the example.thing.js)

    `thing.js/config.js`

    ```javascript
    var config = module.exports = {};

    config.server = {
    host: 'localhost',
          port: 8080
    };
    ```

    OR

    ```bash
    cp example.thing.js thing.js
    ```
