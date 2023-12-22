module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'cfe-bundle.js',
    },
    mode: 'production',
    stats: {
        orphanModules: true,
    },
}