module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    overrides: [
        {
            env: {
                "node": true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "i18next"
    ],
    root: true,
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension":
            [
                2,
                { extensions: [".js", ".jsx", ".tsx"] }
            ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "react/no-deprecated": "off",
        "object-curly-spacing": ["error", "always"],
        "i18next/no-literal-string": ["error", { "markupOnly": true }],
        "max-len": ["error", { "code": 100, "ignoreComments": true }]
    },
    globals: {
        __IS_DEV__: true,
    },
};
