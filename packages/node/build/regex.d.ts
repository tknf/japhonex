/**
 * Ex.
 *
 * /^0[0-9]-[0-9]{4}-[0-9]{4}$/ : 0x-xxxx-xxxx \
 * /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/ : 0xx-xxx-xxxx \
 * /^0[0-9]{3}-[0-9]{4}-[0-9]{4}$/ : 0xxx-xx-xxxx \
 * /^0[0-9]{4}-[0-9]-[0-9]{4}$/ : 0xxxx-x-xxxx \
 *
 * ^0([0-9]-[0-9]{4}|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9]{1})-[0-9]{4}$ \
 *
 *
 * /^0[0-9]{2}-[0-9]{4}-[0-9]{4} : 0xx-xxxx-xxxx \
 *
 * [0-9]{2}-[0-9]{4} \
 *
 * /^0120-([0-9]-[0-9]{5}|[0-9]{2}-[0-9]{4}|[0-9]{3}-[0-9]{3}|[0-9]{4}-[0-9]{2}|[0-9]{5}-[0-9]|[0-9]{6})$/
 */
export declare const REQUIRE_JA_TEL_REGEX: RegExp;
export declare const OPTIONAL_HYPHEN_JA_TEL_REGEX: RegExp;
/**
 * Ex.
 *
 * /^[0-9]{9}$/ : 0xxxxxxxxx \
 * /^[0-9]{10}$/ : 0xxxxxxxxxx \
 */
export declare const NO_HYPHEN_JA_TEL_REGEX: RegExp;
