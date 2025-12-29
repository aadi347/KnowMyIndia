import fs from "fs";

const data = fs.readFileSync("src/data/india.geo.json", "utf8");
const lines = data.split("\n");
console.log(`Total lines: ${lines.length}`);

// Lines 7583, 7584, 7585, 7586.
// Indices: 7582, 7583, 7584, 7585.
const startIdx = 7582;
const slice = lines.slice(startIdx, startIdx + 5);

slice.forEach((line, i) => {
  const lineNum = startIdx + i + 1;
  const len = line.length;
  // Print last 50 chars to see context
  const content = len > 50 ? `...${line.slice(-50)}` : line;
  console.log(`Line ${lineNum} (len=${len}): "${content}"`);
});
