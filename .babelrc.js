module.exports = {
    presets: ['next/babel'],
    // plugins: [['styled-components', { ssr: true }]],
    plugins: [
        ['styled-components', { ssr: true }],
        [
          'module-resolver',
          {
            alias: {
              '~/*': './src/*'
            }
          }
        ]
      ]
}