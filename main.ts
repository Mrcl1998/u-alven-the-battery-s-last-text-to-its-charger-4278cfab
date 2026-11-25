// The Battery's Last Text to Its Charger
// Writes the battery's final one-line text to the charger it waited for all day.
// Output: /output/entry.txt — one line, 125 chars, plain UTF-8 text.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "i waited all day and you finally plugged me in at 1% \u2014 to a cable " +
  "that isn\u2019t even plugged into the wall. i hate you. goodbye.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
