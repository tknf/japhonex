"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.japhonex = void 0;
const regex_1 = require("./regex");
function japhonex(opts = { hyphen: "optional" }) {
    const { hyphen } = opts;
    if (hyphen === "require") {
        return regex_1.REQUIRE_JA_TEL_REGEX;
    }
    else if (hyphen === "optional") {
        return regex_1.OPTIONAL_HYPHEN_JA_TEL_REGEX;
    }
    return regex_1.NO_HYPHEN_JA_TEL_REGEX;
}
exports.japhonex = japhonex;
