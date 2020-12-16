import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.ts",
    plugins: [
        resolve(),
        typescript({
            declaration: true,
            cacheDir: ".rollup.cache",
            outDir: "dist",
            tsBuildInfoFile: "dist/buildinfo.tscache",
        }),
        terser(),
    ],
    output: {
        dir: "dist",
        format: "umd",
        name: "GraphQLDiff",
    },
};
