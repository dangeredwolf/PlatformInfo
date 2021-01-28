# Using PlatformInfo

This is an overview of using PlatformInfo

## Creating a PlatformInfo object

If you're using the user's useragent, then this is all you need to create the PlatformInfo object.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;
```

You can also specify a user agent string to use instead of the current browser's.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko");

console.log(platform.browser);
// --> "ie"
```

## Interacting with a PlatformInfo object

# String (or null) `platform.getArchitecture`
Returns `architecture`

Possible values are: `x86`, `amd64`, `arm`, `arm64`, `ppc`, `ppc64`, `ia64`, null

**Notes:**
* `null` is only used when there is absolutely no way of knowing the architect, such as on most Android user agents 

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko");

console.log(platform.getArchitecture());
// --> "amd64"

platform2 = new PlatformInfo("Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko");

console.log(platform2.getArchitecture());
// --> "x86"
```

# String `platform.getBrowser`
Returns `browser`

Possible values are: `chrome`, `edge`, `edgeLegacy`, `firefox`, `khtml`, `ie`, `opera`, `operaPresto`, `safari`

**Notes:**
* Generally, all browsers on iOS will return `safari`.
* Derivatives of said browsers, will appear as the browser they are derived from. For example, Vivaldi will report as `chrome`.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getBrowser());
// --> "chrome"
```

# String `platform.getBrowserVersion`

Returns `browserVersion`, the full String of the Browser's version number

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getBrowserVersion());
// --> "88.0.4324.104"
```

# Number `platform.getBrowserVersionNumber`

Returns `browserVersionNumber`, the browser version represented as a number.

*Notes:*
* This will display the major and minor version of the browser, without patches or any numbers after a second decimal place.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getBrowserVersionNumber());
// --> 88.0
```

# String `platform.getOSPlatform`

Returns `osPlatform`

Possible values are: `android`, `chromeos`, `linux`, `ios`, `mac`, `windows9x`, `windows`, `windowsPhone`, `unknown`

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getOSPlatform());
// --> "windows"
```

# String `platform.getOSVersion`

Returns `osVersion`, the OS version represented as a number.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getOSVersion());
// --> "10.0"
```

# Number `platform.getOSVersionNumber`

Returns `osVersionNumber`, the OS version represented as a number.

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.getOSVersion());
// --> 10.0
```

# Boolean `platform.isBrowserVersionHigherThan(String or number version)`

Returns if the OS is higher than or equal to the specified value

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.isBrowserVersionHigherThan(87));
// --> true
```

# Boolean `platform.isBrowserVersionLowerThan(String or number version)`

Opposite of above

# Boolean `platform.isOSVersionHigherThan(String or number version)`

Returns if the OS is higher than or equal to the specified value

*Example:*
```
import { PlatformInfo } from "PlatformInfo.js";

let platform = new PlatformInfo;

console.log(platform.isOSVersionHigherThan(5.1));
// --> true
```

# Boolean `platform.isOSVersionLowerThan(String or number version)`

Opposite of above

# Issues with the docs?
Feel free to either submit an issue or pull request and we'll get it resolved
