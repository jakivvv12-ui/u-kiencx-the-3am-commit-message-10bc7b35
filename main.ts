import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "fix: delete the API I hallucinated at 2am, it never existed";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), entry, "utf8");
