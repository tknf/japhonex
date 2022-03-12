import { REQUIRE_JA_TEL_REGEX, NO_HYPHEN_JA_TEL_REGEX, OPTIONAL_HYPHEN_JA_TEL_REGEX } from "./regex";

export function japhonex(opts: { hyphen?: "require" | "optional" | false } = { hyphen: "optional" }) {
  const { hyphen } = opts;

  if (hyphen === "require") {
    return REQUIRE_JA_TEL_REGEX;
  } else if (hyphen === "optional") {
    return OPTIONAL_HYPHEN_JA_TEL_REGEX;
  }

  return NO_HYPHEN_JA_TEL_REGEX;
}
