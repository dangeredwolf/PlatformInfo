# PlatformInfo
A simple, powerful library for comparing users' browsers and devices. It's small, taking up about 5 kb *before* gzip.

## It does things you would expect 
* OS type
* OS version
* Browser type
* Browser version

## ... but also has more useful features
* CPU architecture (Including differentiating Intel and Apple silicon Macs)
* Dealing with iPads using macOS user agents
* OS and Browser version comparisons built in
* Manually specifying a user agent to use instead of fetching the user's

## How to use it?
You can use `PlatformInfoStandalone.js` as a standalone JavaScript file, or `PlatformInfo.js` to integrate it as an ES module with build systems like Webpack and Rollup.

```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.architecture);
// ---> amd64
```

# [How to use it](https://github.com/dangeredwolf/PlatformInfo/blob/master/docs/api.md)
### [How to build it yourself](https://github.com/dangeredwolf/PlatformInfo/blob/master/docs/build.md)

## Limitations
* Does not work on browsers that don't support ECMAScript 5. This includes browsers like Internet Explorer 8 and really old versions of current browsers. Internet Explorer 11 does work, however. 
* When an iPad is spoofing a Mac user agent, it uses a macOS version number. However, when calling `getOSVersion`, it will instead return the Safari version number, which will have the same major version number but may have a differing minor version number.
* Apple Silicon detection is flaky on Safari (Mac) 14 and later, and can be impeded by browser extensions. It is recommended if you have a download page to continue making both versions available for users.
* iOS 10 and earlier report architecture as "arm", as there is no way to differentiate between 32 and 64 bit on that platform.
* Android and Windows Mobile/Phone do not disclose architecture 
* There is no way to differentiate 32 and 64 bit OS X (macOS). It uses the OS version and browser version to guess if it's x86 or amd64
