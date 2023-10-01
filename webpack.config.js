import { path } from "./config/path";

import { plugins } from "./config/plugins"

global.app = {
    path: path,
    plugins: plugins
}

module.exports = {
    entry: [
        path.src.js,
      ],
    output: {
        path: path.build.js,
        filename: 'bundle.js',
        clean: true
    }
}