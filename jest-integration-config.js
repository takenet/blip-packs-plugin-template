const config = require('./jest.config')
config.testMatch = [
    '**/*.test.ts',
    '*.test.tsx',
]
module.exports = config