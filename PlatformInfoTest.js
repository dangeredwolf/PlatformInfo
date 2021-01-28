import { PlatformInfo } from "./platformDetector.js";
window.PlatformInfo = PlatformInfo; // for debug

let platform = new PlatformInfo;

$(".ua").text(navigator.userAgent);
$(".platform").text(platform.getOSPlatform());
$(".osversion").text(platform.getOSVersion());
$(".osversionnum").text(platform.getOSVersionNumber());
$(".browserversion").text(platform.getBrowserVersion());
$(".browserversionnum").text(platform.getBrowserVersionNumber());
$(".architecture").text(platform.getArchitecture());
