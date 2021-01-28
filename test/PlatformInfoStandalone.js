/**
* PlatformInfo 1.0.0
* @license MIT
* https://github.com/dangeredwolf/PlatformInfo
**/
(function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var PlatformInfo = /*#__PURE__*/function () {
    function PlatformInfo(customUA) {
      _classCallCheck(this, PlatformInfo);

      this.userAgent = customUA ? customUA : navigator.userAgent;

      if (customUA) {
        this.isCustomUA = true;
      } else {
        this.isCustomUA = false;
      }

      this.osPlatform = this.getOSPlatform();
      this.osVersion = this.getOSVersion();
      this.osVersionNumber = this.getOSVersionNumber();
      this.browser = this.getBrowser();
      this.browserVersion = this.getBrowserVersion();
      this.browserVersionNumber = this.getBrowserVersionNumber();
      this.architecture = this.getArchitecture();
    }

    _createClass(PlatformInfo, [{
      key: "getOSPlatform",
      value: function getOSPlatform() {
        var userAgent = this.userAgent;

        if (userAgent.match(/Win(dows )?/)) {
          if (userAgent.match(/Windows [Phone|Mobile]/)) {
            return "windowsPhone";
          } else if (userAgent.match(/Win(dows )?(NT|XP)/)) {
            if (userAgent.match("Mobile")) {
              return "windowsPhone";
            }

            return "windows";
          } else if (userAgent.match(/Win(dows )?([1-39]|ME)/)) {
            return "windows9x";
          }
        }

        if (userAgent.match("Android")) {
          return "android";
        }

        if (userAgent.match("Mac OS X")) {
          if (userAgent.match("Mobile")) {
            return "ios";
          }

          if (typeof Touch !== "undefined" && userAgent.match("Chrome/") === null && userAgent.match("Safari/")) {
            return "ios"; // Detect iPad user agent faking
          }

          return "mac";
        }

        if (userAgent.match("CrOS")) {
          return "chromeos";
        }

        if (userAgent.match("Linux")) {
          return "linux";
        }

        return "unknown";
      }
    }, {
      key: "getOSVersion",
      value: function getOSVersion() {
        var userAgent = this.userAgent;
        var matcher;

        switch (this.getOSPlatform()) {
          case "windows":
            matcher = userAgent.match(/Windows NT [\d\.]+/);

            if (matcher) {
              return userAgent.match(/Windows NT [\d\.]+/)[0].match(/[\d\.]+/)[0];
            }

            if (userAgent.match("Windows XP")) {
              // weird old browsers
              return "5.1";
            }

            return "4.0";
          // Fallback, for really old browsers where NT version isn't reported

          case "windows9x":
            if (userAgent.match(/Win(dows )?(98|ME)/)) {
              return "5.0";
            }

            if (userAgent.match(/Win(dows )?(95)/)) {
              return "4.0";
            }

            if (userAgent.match(/Win(dows )?3\.1/)) {
              return "3.1";
            }

            return null;

          case "windowsPhone":
            matcher = userAgent.match(/Windows (Mobile|Phone|Phone OS) [\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "mac":
            matcher = userAgent.match(/Mac OS X [\d\.\_]+/);

            if (matcher) {
              return matcher[0].replace(/\_/g, ".").match(/[\d\.]+/)[0];
            }

            return null;

          case "ios":
            matcher = userAgent.match(/(iPhone|CPU) OS [\d\.\_]+/);

            if (matcher) {
              return matcher[0].replace(/\_/g, ".").match(/[\d\.]+/)[0];
            } else {
              // For iPadOS we don't know the exact iOS version, but the Safari version corresponds approximately with it in later versions
              matcher = userAgent.match(/Version\/[\d\.]+/);

              if (matcher) {
                return matcher[0].replace(/\_/g, ".").match(/[\d\.]+/)[0];
              }

              return null;
            }

          case "android":
            matcher = userAgent.match(/Android [\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "linux":
            // Linux doesn't often have a version number in the user agent, but some do ...
            matcher = userAgent.match(/Linux [\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "chromeos":
            // ChromeOS uses same string as browser
            matcher = userAgent.match(/Chrome\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;
        }
      }
    }, {
      key: "getOSVersionNumber",
      value: function getOSVersionNumber() {
        return parseFloat(this.getOSVersion().match(/\d+(\.\d+)?/));
      }
    }, {
      key: "getBrowser",
      value: function getBrowser() {
        var userAgent = this.userAgent;

        if (userAgent.match("Trident/") || userAgent.match("MSIE")) {
          return "ie";
        }

        if (userAgent.match("Opera/")) {
          return "operaPresto";
        }

        if (userAgent.match("OPR/")) {
          return "opera";
        }

        if (userAgent.match("Edge/")) {
          return "edgeLegacy";
        }

        if (userAgent.match("Edg/")) {
          return "edge";
        }

        if (userAgent.match("Gecko/")) {
          return "firefox";
        }

        if (userAgent.match("Chrome/")) {
          return "chrome";
        }

        if (userAgent.match("Safari/")) {
          return "safari";
        }

        if (userAgent.match("KHTML/")) {
          return "khtml";
        }
      }
    }, {
      key: "getBrowserVersion",
      value: function getBrowserVersion() {
        var userAgent = this.userAgent;
        var matcher;

        switch (this.getBrowser()) {
          case "chrome":
          case "edge":
            matcher = userAgent.match(/Chrome\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "opera":
            matcher = userAgent.match(/OPR\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "operaPesto":
            matcher = userAgent.match(/Opera\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "edgeLegacy":
            matcher = userAgent.match(/Edge\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "firefox":
            matcher = userAgent.match(/Firefox\/[\d\.]+/) || userAgent.match(/rv\:[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "khtml":
            matcher = userAgent.match(/Konqueror\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;
          // Note: really old versions of Safari don't apparently report the version they have. Just AppleWebKit version.
          // TODO: create translation layer

          case "safari":
            matcher = userAgent.match(/Version\/[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;

          case "ie":
            matcher = userAgent.match(/MSIE [\d\.]+/) || userAgent.match(/rv\:[\d\.]+/);

            if (matcher) {
              return matcher[0].match(/[\d\.]+/)[0];
            }

            return null;
        }
      }
    }, {
      key: "isBrowserVersionLowerThan",
      value: function isBrowserVersionLowerThan(version) {
        return !isBrowserVersionHigherThan(version);
      }
    }, {
      key: "isBrowserVersionHigherThan",
      value: function isBrowserVersionHigherThan(version) {
        var testVersion = String(version).replace(/_/g, ".").split(".");
        var testVersionMajor = parseInt(testVersion[0]) || 0;
        var testVersionMinor = parseInt(testVersion[1]) || 0;
        var currentVersion = this.getBrowserVersion().split(".");
        var currentVersionMajor = parseInt(currentVersion[0]) || 0;
        var currentVersionMinor = parseInt(currentVersion[1]) || 0;

        if (testVersionMajor < currentVersionMajor) {
          return true;
        }

        if (testVersionMajor === currentVersionMajor) {
          if (testVersionMinor <= currentVersionMinor) {
            return true;
          }

          return false;
        }

        return false;
      }
    }, {
      key: "isOSVersionLowerThan",
      value: function isOSVersionLowerThan(version) {
        return !this.isOSVersionHigherThan(version);
      }
    }, {
      key: "isOSVersionHigherThan",
      value: function isOSVersionHigherThan(version) {
        var testVersion = String(version).replace(/_/g, ".").split(".");
        var testVersionMajor = parseInt(testVersion[0]) || 0;
        var testVersionMinor = parseInt(testVersion[1]) || 0;
        var testVersionPatch = parseInt(testVersion[2]) || 0;
        var currentVersion = this.getOSVersion().split(".");
        var currentVersionMajor = parseInt(currentVersion[0]) || 0;
        var currentVersionMinor = parseInt(currentVersion[1]) || 0;
        var currentVersionPatch = parseInt(currentVersion[2]) || 0;

        if (testVersionMajor < currentVersionMajor) {
          return true;
        }

        if (testVersionMajor === currentVersionMajor) {
          if (testVersionMinor < currentVersionMinor) {
            return true;
          }

          if (testVersionMinor === currentVersionMinor) {
            if (testVersionPatch <= currentVersionPatch) {
              return true;
            }

            return false;
          }

          return false;
        }

        return false;
      }
    }, {
      key: "getBrowserVersionNumber",
      value: function getBrowserVersionNumber() {
        return parseFloat(this.getBrowserVersion().match(/\d+(\.\d+)?/));
      }
    }, {
      key: "getArchitecture",
      value: function getArchitecture() {
        var userAgent = this.userAgent;

        if (userAgent.match(/IA64/i)) {
          return "ia64";
        }

        if (userAgent.match(/(x(86_)?64|amd64|wow64)/i)) {
          return "amd64";
        }

        if (userAgent.match(/arm64|aarch64/i)) {
          return "arm64";
        }

        if (userAgent.match(/armv7| arm;/i)) {
          return "arm";
        }

        if (userAgent.match(/ppc64/i)) {
          return "ppc64";
        }

        if (userAgent.match(/(powerpc|ppc)/i)) {
          return "ppc";
        }

        if (userAgent.match(/(i386|i686)/i)) {
          return "x86";
        }

        switch (this.getOSPlatform()) {
          case "mac":
            //
            if (this.isOSVersionHigherThan("11")) {
              var webglContext = document.createElement("canvas").getContext ? document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl") : null; // WebGL is just... not available. So, we have to assume Intel.

              if (webglContext === null) {
                return "amd64";
              }

              var debugInfo = webglContext.getExtension('WEBGL_debug_renderer_info');
              var gpu = debugInfo && webglContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "";

              if (gpu.match(/Apple/) && !gpu.match(/Apple GPU/) && gpu !== "") {
                return "arm64";
              } // This is just a guess. It is not always reliable.


              if (gpu.match(/Apple GPU/) || gpu === "") {
                if (webglContext.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb") === -1) {
                  return "arm64";
                } // return "amd64"

              }

              return "amd64";
            } // Only 64-bit Macs can run 10.7+.
            // It is possible to run the kernel in 32-bit mode for 10.7 specifically,
            // but we have no way of knowing this is the case or not.


            if (this.isOSVersionHigherThan("10.7")) {
              return "amd64";
            }

            switch (this.getBrowser()) {
              case "chrome":
                // Chrome 39 requires 64-bit CPU.
                // We can therefore assume 64-bit even under Snow Leopard
                if (this.isBrowserVersionHigherThan("39")) {
                  return "amd64";
                }

                return "x86";
              // TODO: Find last 32 bit version of Firefox for Mac

              case "opera":
                // Opera 26 Corresponds to Chromium 39
                if (this.isBrowserVersionHigherThan("26")) {
                  return "amd64";
                }

                return "x86";
            }

            return "x86";

          case "android":
            // Android user agents don't expose the architecture
            return null;

          case "windows":
            // Windows 2000 is only available in x86.
            // Windows XP has NT 5.1 nad Windows XP 64-bit and x64 editions are 5.2
            // TODO: Find user agent of IA-64 XP Internet Explorer
            if (this.isOSVersionLowerThan("5.2")) {
              return "x86";
            } // x64, arm64 is handled by the generic catchall at start


            return "x86";

          case "windows9x":
            // lol
            return "x86";

          case "ios":
            // TODO: Use more trickery like display sizes to detect arm vs arm64
            if (this.isOSVersionLowerThan("11")) {
              return "arm";
            }

            return "arm64";
        }
      }
    }]);

    return PlatformInfo;
  }();
  window.PlatformInfo = PlatformInfo;

  exports.PlatformInfo = PlatformInfo;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=PlatformInfoStandalone.js.map
