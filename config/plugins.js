const path = require('path');



const buildFolder = path.resolve(__dirname, 'dist');
const srcFolder = path.resolve(__dirname, 'src');

const plugins = [
    {
    new HTMLWebpackPlugins({
        title: 'WEB Project',
        template: `${srcFolder}/index.html`,
    })
}
]; 