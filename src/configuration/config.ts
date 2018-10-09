'use strict';
require('dotenv').config();
import * as path from 'path';
const rootPath = path.normalize(__dirname + '/../../');

const config = {
    development: {
        db: process.env.DB,
        port: process.env.PORT,
        rootPath: rootPath
    }
};

export default config.development;