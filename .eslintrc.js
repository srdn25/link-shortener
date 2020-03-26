module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": ["prettier"],
    "extends": ["eslint:recommended", "prettier"],
    "rules": {
        "prettier/prettier": ["error", {}, {
            "usePrettierrc": false
        }],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "semi": ["error", "always"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "no-unused-vars": ["error"],
        "linebreak-style": ["error", "unix"],
        "no-console": "error",
        "keyword-spacing": ["error", { "after": true }],
        "object-curly-spacing": ["error", "always"],
        'eol-last': ["error", "always"],
        "max-len": [
            "error",
            {
                "tabWidth": 2,
                "comments": 80,
                "code": 120,
                "ignoreStrings": true,
                "ignoreUrls": true,
                "ignoreRegExpLiterals": true
            }
        ]
    }
};