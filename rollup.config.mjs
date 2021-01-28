import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const fs = require("fs");
const path = require("path");

export default {
	input: "./src/PlatformInfo.js",
	preserveModules: false,
	output: [
		{
			file: "./dist/PlatformInfo.min.js",
			format: "es",
			sourcemap: true,
			hoistTransitiveImports: true
		},
		{
			file: "./dist/PlatformInfoStandalone.min.js",
			format: "iife",
			sourcemap: true,
			hoistTransitiveImports: true
		}
	],
	plugins: [
		resolve(),
		babel({configFile:"./babel.config.json"}),
		resolve(),
		terser({mangle:true})
	]
};
