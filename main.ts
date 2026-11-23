// One-Line Roast: The Gadget You Use Every Day
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes one original roast line to /output/entry.txt.
// The line: a phone's face unlock fails before coffee, and the punchline
// turns the failure into an identity joke — the uncaffeinated face is not
// a registered user. Specific, daily, and fresh: it roasts the phone's
// biometric gatekeeper, not the battery everyone else complains about.
// Deterministic: the same fixed string on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone doesn't recognize my face before coffee — apparently my pre-caffeine face isn't a registered user.";

mkdirSync("/output", { recursive: true });
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
