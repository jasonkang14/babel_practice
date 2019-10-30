const path = require('path');

module.exports = {
    entry: './src/index.js',
    // index.js module is used as the input file
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // create `main.js` bundle inside `dist` directory
    mode: 'production',
    // if you set `production` mode, many optimization properties like JavaScript code compression
    optimization: { minimizer: [] },
    // ensure that the bundle file does not get compressed in order to check it easily
};