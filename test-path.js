import { join } from "node:path";

console.log("process.cwd():", process.cwd());
console.log("join path:", join(process.cwd(), "infra", "migrations"));
