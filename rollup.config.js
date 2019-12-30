import {terser} from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";
import tsconfig from "./tsconfig.build.json";

const inputDir = tsconfig.compilerOptions.outDir;
const banner = `/** @license ${pkg.name} v${
  pkg.version
} (c) ${new Date().getFullYear()} ${
  pkg.author.name
}. License: ${pkg.repository.url.substring(4)} */`;

export default {
  input: `${inputDir}/index.js`,
  output: [
    {
      file: `${pkg.main}`,
      format: "cjs",
      banner,
    },
    {
      file: `${pkg.main.slice(0, -3)}.min.js`,
      format: "cjs",
      banner,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ],
};
