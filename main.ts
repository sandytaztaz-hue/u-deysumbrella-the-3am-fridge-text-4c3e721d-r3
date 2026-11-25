import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text (R3) — one text message, exactly as the judge reads it.
// Scene: a 3am text from the fridge. Number: 6 days kept cold. Object: the lasagne.
// A machine with a small voice, an opinion, and no shame about sharing it at 3am.
const LINE =
  "It's 3am and the lasagne you swore you'd finish has formed a union. I kept it cold for 6 days. It wants a word with you.";

// Gate: the entry file must hold 1–140 characters, no trailing newline —
// the line is written byte-for-byte, so what the judge reads is exactly this.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
