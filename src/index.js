require('offline-plugin/runtime').install();

// import './fonts/libre-baskerville-v5-latin-regular.woff';
// import './fonts/libre-baskerville-v5-latin-regular.woff2';

// import './index.html';
// import './index.scss';
// import './scripts/script.js';

var template = require('./template.marko')
var html = template.renderToString({ name: 'Frank' });