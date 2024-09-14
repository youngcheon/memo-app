module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'babel-plugin-styled-components',
        [
            'module-resolver',
            {
                alias: {
                    '@': './src',
                },
            },
        ],
    ],
};
