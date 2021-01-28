# PlatformInfo
A simple, powerful library for comparing users' browsers and devices

## It does a lot of what you expect 
* OS type
* OS version
* Browser type
* Browser version

## ... and a lot more useful features
* CPU architecture (Including differentiating Intel and Apple silicon Macs)
* Dealing with iPads using macOS user agents
* OS and Browser version comparisons built in
* Manually specifying a user agent to use instead of fetching the user's

## How to use it?
You can use `PlatformInfoStandalone.js` as a standlone JavaScript file, or `PlatformInfo.js` to integrate it as a module with your ES6 code, including build systems like Webpack and Rollup.

```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.architecture);
// ---> amd64
```
