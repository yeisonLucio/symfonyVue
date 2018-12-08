const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    mode: 'development',
    entry: './web/vue/index.js',
    output: {
        path: __dirname + '/web/dist',
        filename: 'bundle.js'
    },

    devServer: {
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                      }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            


        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
    
    

}