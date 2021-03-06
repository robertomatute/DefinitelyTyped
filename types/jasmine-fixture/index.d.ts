// Type definitions for Jasmine-fixture 1.0
// Project: https://github.com/searls/jasmine-fixture
// Definitions by: Craig Brett <https://github.com/craigbrett17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jasmine" />

/**
 * Affixes the given jquery selectors into the body and will be removed after each spec
 * @param selector The JQuery selector to be added to the dom
 */
declare function affix(selector: string): JQuery;

interface JQuery {
    /**
     * Affixes the given jquery selectors into the element and will be removed after each spec
     * @param selector The JQuery selector to be added to the dom
     */
    affix(selector: string): JQuery;
}
