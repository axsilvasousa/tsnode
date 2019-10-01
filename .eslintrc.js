module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        es6: true,
        node: true
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "standard"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double"]
    }
}
