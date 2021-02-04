export type OSPlatform =
	| "windows"
	| "windows9x"
	| "windowsPhone"
	| "android"
	| "ios"
	| "mac"
	| "chromeos"
	| "linux"
	| "unknown";

export type Browser =
	| "chrome"
	| "firefox"
	| "ie"
	| "edge"
	| "edgeLegacy"
	| "opera"
	| "operaPresto"
	| "safari"
	| "khtml";

export type Architecture =
	| "amd64"
	| "x86"
	| "arm64"
	| "arm"
	| "ppc64"
	| "ppc"
	| "ia64";

export declare class PlatformInfo {
	constructor(customUA: string);

	getOSPlatform(): OSPlatform;
	getOSVersion(): string | null | undefined;
	getOSVersionNumber(): number;

	isOSVersionLowerThan(version: any): boolean;
	isOSVersionHigherThan(version: any): boolean;

	getBrowser(): Browser | undefined;
	getBrowserVersion(): string | null | undefined;
	getBrowserVersionNumber(): number;

	isBrowserVersionLowerThan(version: any): boolean;
	isBrowserVersionHigherThan(version: any): boolean;

	getArchitecture(): Architecture | null | undefined;
}
