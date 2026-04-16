const nextJest = require('next/jest')          // Next.js製のJest設定ツールを読み込む

const createJestConfig = nextJest({ dir: './' }) // プロジェクトのルートを指定

module.exports = createJestConfig({
    testEnvironment: 'jest-environment-jsdom',   // DOM環境を有効にする
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // jest.setup.js を全テスト前に読む
})