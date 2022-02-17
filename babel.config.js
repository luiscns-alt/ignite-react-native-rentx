module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['babel-preset-expo'],
            ['module:metro-react-native-babel-preset'],
        ],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
                    alias: {
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@assets/*': './src/assets/*',
                        '@database/*': './src/database/*',
                        '@hooks/*': './src/hooks/*',
                        '@service/*': './src/service/*',
                        '@utils/*': './src/utils/*',
                    },
                },
            ],
        ],
    };
};
