import fs from "fs";

const filename = process.argv[2] || "src/data/india.geo.json";

try {
  const data = fs.readFileSync(filename, "utf8");
  JSON.parse(data);
  console.log(`JSON in ${filename} is valid.`);
} catch (e) {
  console.error(`JSON in ${filename} is invalid:`, e.message);
}
