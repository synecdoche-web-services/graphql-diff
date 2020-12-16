import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.ts",
    plugins: [
        resolve(),
        typescript({
            declaration: true,
            importHelpers: false,
            cacheDir: ".rollup.cache",
            outDir: "dist",
            // This prevents @rollup/plugin-typescript from trying to import tslib
            tslib: 1,
        }),
        terser(),
    ],
    output: {
        dir: "dist",
        format: "umd",
        name: "GraphQLDiff",
    },
};
