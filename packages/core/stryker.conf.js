const path = require('path');
const settings = require('../../stryker.parent.conf');
const moduleName = __dirname.split(path.sep).pop();
settings.dashboard.module = moduleName;
settings.buildCommand = 'npm run build';
module.exports = settings;
