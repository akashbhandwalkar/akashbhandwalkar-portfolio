const withTM = require('next-transpile-modules')(['react-syntax-highlighter']); // pass the modules you would like to see transpiled

module.exports = withTM({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        }, {
			test: /\.md$/,
			use: 'raw-loader',
		  });

        return config;
    }
});