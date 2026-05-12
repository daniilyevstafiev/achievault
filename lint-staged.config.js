const path = require("path");

module.exports = {
  "backend/**/*.ts": (absolutePaths) => {
    const cwd = path.resolve("backend");
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file));
    return `pnpm --dir backend exec eslint --fix ${relativePaths.join(" ")}`;
  },
  "frontend/**/*.{ts,tsx,js,jsx}": (absolutePaths) => {
    const cwd = path.resolve("frontend");
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file));
    return `pnpm --dir frontend exec eslint --fix ${relativePaths.join(" ")}`;
  },
};
