/** @format */
module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            '@babel/preset-env',
            '@babel/typescript'
        ],
        plugins: ['@babel/plugin-transform-runtime']
    };
};
