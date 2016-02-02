var injection = require('../services/injection-base');
var Q = require('q');

injection.initializeScopedThen(Q);
injection.installModule(require('./local-injection-module'));
injection.installModule(require('./component-module'));
injection.installModule(require('../pouchdb'));

injection.bindFactory('dbUrl', 'hello-world');
injection.bindMultiple('appConfigs', ['evalConfig']);

injection.bindFactory('Editor', require('./editor/editor'));

require('./react-main')(injection);

require('../public/assets/less/react-main.less');