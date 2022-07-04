module.exports = {
    // Set the help url to the contributing guide
    helpUrl: 'https://github.com/BattlesnakeOfficial/docs-new/blob/main/CONTRIBUTING.md',
    rules: {
        "docs/no-type": [2, "always"],
        "docs/no-scope": [2, "always"],
        "docs/header-length": [1, "always"],
        "docs/body-blank-line": [1, "always"],
    },
    /**
     * We are using custom rules to provide more informative error messages.
     * 
     * NOTE: a rule returns false if the rule was broken, otherwise it returns true.
     */
    plugins: [{
        rules: {
            "docs/no-type": (parsed) => {
                return [
                    parsed.type == null,
                    `Type is not allowed, type found: '${parsed.type}'`
                ];
            },
            "docs/no-scope": (parsed) => {
                return [
                    parsed.scope == null,
                    `Scope is not allowed, scope found: '${parsed.scope}'`
                ];
            },
            "docs/header-length": (parsed) => {
                return [
                    parsed.header.length <= 50,
                    "Keep the header under 50 characters",
                ]
            },
            "docs/body-blank-line": (parsed) => {
                // get the first line in the body
                const leading = parsed.raw.split(/(?:\r?\n)/).slice(1);

                return [
                    leading != "",
                    "There should be a blank line between the header and the body",
                ]
            },
        }
    }],
}