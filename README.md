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
You can use `PlatformInfoStandalone.js` as a standlone JavaScript file, or `PlatformInfo.js` to integrate it as an ES module with build systems like Webpack and Rollup.

```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.architecture);
// ---> amd64
```

## Limitations
* Does not work on browsers that don't support ECMAScript 5. This includes browsers like Internet Explorer 8 and really old versions of current browsers. Internet Explorer 11 does work, however. 
* Apple Silicon detection is flaky on Safari (Mac) 14 and later
* iOS 10 and earlier report architecture as "arm", as there is no way to differentiate between 32 and 64 bit on that platform.
* There is no way to differentiate 32 and 64 bit OS X (macOS). It uses the OS version and browser version to guess if it's x86 or amd64
