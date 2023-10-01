const path = require('path');

const srcFolder = path.resolve(__dirname, 'src');
const buildFolder = path.resolve(__dirname, 'dist');


const babelLouder = {
        test: /\.js/, 
        include: `${srcFolder}/js`,
        use: {
            loader: 'babel-loader', 
            options: {
                presets: 'env'
            }
        }
};