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
                "**/src/**/*.test.{ts,tsx}",
                ".eslintrc.{js,cjs}"
            ],
            rules: {
                "i18next/no-literal-string": "off"
            },
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
        quotes: ["error", "double"],
        indent: [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],

        "react/jsx-filename-extension":
            [
                2,
                { extensions: [".js", ".jsx", ".tsx"] }
            ],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "react/no-deprecated": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-unused-vars": "warn",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "object-curly-spacing": ["error", "always"],
        "i18next/no-literal-string": [
            "error",
            {
                "markupOnly": true,
                "ignoreAttribute": ["data-testid", "to", "alt"]
            }],
        "max-len": ["error", { "code": 100, "ignoreComments": true }]
    },
    globals: {
        __IS_DEV__: true,
    }
};
