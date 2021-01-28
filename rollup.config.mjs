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
			file: "./dist/PlatformInfo.js",
			banner: `/**\n* PlatformInfo ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/PlatformInfo\n**/`,
			format: "es",
			sourcemap: true,
			hoistTransitiveImports: true
		},
		{
			file: "./dist/PlatformInfo.min.js",
			banner: `/**\n* PlatformInfo ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/PlatformInfo\n**/`,
			format: "es",
			sourcemap: true,
			hoistTransitiveImports: true,
			plugins: [terser({mangle:true})]
		},
		{
			file: "./dist/PlatformInfoStandalone.js",
			banner: `/**\n* PlatformInfo ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/PlatformInfo\n**/`,
			format: "iife",
			sourcemap: true,
			hoistTransitiveImports: true
		},
		{
			file: "./dist/PlatformInfoStandalone.min.js",
			banner: `/**\n* PlatformInfo ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/PlatformInfo\n**/`,
			format: "iife",
			sourcemap: true,
			hoistTransitiveImports: true,
			plugins: [terser({mangle:true})]
		}
	],
	plugins: [
		resolve(),
		babel({configFile:"./babel.config.json"}),
		resolve()
	]
};
