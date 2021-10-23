// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
var time = 30;
var container = document.querySelector("#code");
var styleTag = document.querySelector("#styleTag");
var n = 0;
function run() {
    n += 1;
    container.innerHTML = code.substring(0, n);
    styleTag.innerHTML = code.substring(0, n);
    container.scrollTop = container.scrollHeight;
    if (n < code.length) {
        setTimeout(run, time);
    }
}
setTimeout(run, time);

var code = " \n.box {\n    display: flex;\n    justify-content: center;\n}\n\n.head {\n    width: 330px;\n    height: 290px;\n    border: 2px solid black;\n    border-radius: 50%;\n    position: relative;\n}\n\n.face {\n    width: 300px;\n    height: 240px;\n    border-radius: 50%;\n    border: 2px solid black;\n    background-color: white;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%);\n    z-index: -1;\n}\n\n.eye {\n    width: 170px;\n    height: 100px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n}\n\n.eye div {\n    border-radius: 50%;\n}\n\n.eye>.eye_left {\n    width: 80px;\n    height: 105px;\n    border: 2px solid black;\n    background-color: white;\n    transform: rotate(15deg);\n    position: relative;\n    z-index: 5;\n}\n\n.eye>.eye_left>.eyebead_left {\n    width: 20px;\n    height: 30px;\n    background-color: black;\n    transform: rotate(-10deg);\n    position: absolute;\n    top: 30px;\n    right: 5px;\n}\n\n.eye>.eye_left>.eyebead_left>.eyebead {\n    width: 8px;\n    height: 15px;\n    background-color: white;\n    position: absolute;\n    top: 8px;\n    right: 3px;\n    transform: rotate(5deg);\n}\n\n.eye>.eye_right {\n    width: 80px;\n    height: 105px;\n    border: 2px solid black;\n    background-color: white;\n    transform: rotate(-15deg);\n    z-index: 5;\n}\n\n.eye>.eye_right>.eyebead_right {\n    width: 20px;\n    height: 30px;\n    background-color: black;\n    transform: rotate(5deg);\n    position: absolute;\n    top: 30px;\n    left: 5px;\n}\n\n.eye>.eye_right>.eyebead_right>.eyebead {\n    width: 8px;\n    height: 15px;\n    background-color: white;\n    position: absolute;\n    top: 8px;\n    left: 3px;\n    transform: rotate(-5deg);\n}\n\n/* \u8138\u988A */\n.cheek {\n    width: 230px;\n    height: 50px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    top: 85px;\n    left: 50px;\n}\n\n.cheek div {\n    border-radius: 50%;\n}\n\n.cheek>.cheek_left {\n    width: 50px;\n    background-color: #FDA8A6;\n    z-index: 4;\n}\n\n.cheek>.cheek_right {\n    width: 50px;\n    background-color: #FDA8A6;\n    z-index: 4;\n}\n\n/* \u5634\u5DF4 */\n\n.mouth {\n    width: 250px;\n    height: 250px;\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n    top: 40px;\n    left: 0;\n    border-radius: 20% 20% 50% 50%;\n}\n\n.mouth>.smallMouth {\n    width: 250px;\n    height: 230px;\n    border-radius: 20% 20% 50% 50%;\n    background-color: #E16D6D;\n    position: absolute;\n    top: -120px;\n}\n\n.mouth_second {\n    width: 300px;\n    height: 90px;\n    position: absolute;\n    margin: 0 auto;\n    top: 100px;\n    left: 13px;\n}\n\n.mouth_second div {\n    border-radius: 50%;\n}\n\n.mouth_second>.mouth_left {\n    width: 57px;\n    height: 70px;\n    background-color: #E16D6D;\n    position: absolute;\n    top: 39px;\n    left: 31px;\n    transform: rotate(-35deg);\n}\n\n.mouth_second>.mouth_center {\n    width: 200px;\n    height: 100px;\n    background-color: white;\n    position: absolute;\n    top: -32px;\n    left: 53px;\n    transform: rotate(-2deg);\n    z-index: 3;\n}\n\n.mouth_second>.mouth_right {\n    width: 57px;\n    height: 70px;\n    background-color: #E16D6D;\n    position: absolute;\n    top: 39px;\n    right: 31px;\n    transform: rotate(35deg);\n    z-index: 2;\n}\n\n.mouth_love {\n    width: 133px;\n    height: 87px;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    bottom: 33px;\n    left: 100px;\n    z-index: 20;\n    transition: all 1s;\n}\n\n.mouth_love:hover {\n    transform: scale(1.2);\n}\n\n.mouth_love div {\n    border-radius: 50%;\n    width: 60px;\n    height: 90px;\n    background-color: #F49E9D;\n}\n\n.mouth_love>.mouth_love_left {\n    transform: rotate(-50deg);\n    position: absolute;\n    top: 0;\n    left: 24px;\n}\n\n.mouth_love>.mouth_love_right {\n    transform: rotate(50deg);\n    position: absolute;\n    top: 0;\n    right: 24px;\n}\n\n/* \u80E1\u5B50  + \u9F3B\u5B50 */\n\n.beard {\n    width: 300px;\n    height: 120px;\n    margin: 0 auto;\n    position: absolute;\n    top: 50px;\n    left: 13px;\n    z-index: 10;\n}\n\n.beard div {\n    border: 2px solid black;\n}\n\n/* \u5DE6\u8FB9\u80E1\u5B50 */\n\n.beard>.beard_1 {\n    width: 100px;\n    height: 20px;\n    border-radius: 190% 50% 0 50%;\n    border-color: black transparent transparent black;\n    position: absolute;\n    top: 47px;\n    left: 0px;\n    transform: rotate(21deg);\n}\n\n.beard>.beard_2 {\n    width: 110px;\n    height: 20px;\n    border-radius: 190% 50% 0 50%;\n    border-color: black transparent transparent black;\n    position: absolute;\n    top: 70px;\n    left: -10px;\n    transform: rotate(7deg);\n}\n\n.beard>.beard_3 {\n    width: 120px;\n    height: 20px;\n    border-radius: 190% 50% 0 50%;\n    border-color: black transparent transparent black;\n    position: absolute;\n    top: 99px;\n    left: -19px;\n    transform: rotate(-7deg);\n}\n\n/* \u53F3\u8FB9\u80E1\u5B50 */\n\n.beard>.beard_4 {\n    width: 100px;\n    height: 20px;\n    border-radius: 50% 190% 50% 0;\n    border-color: black black transparent transparent;\n    position: absolute;\n    top: 43px;\n    right: 3px;\n    transform: rotate(-31deg);\n}\n\n.beard>.beard_5 {\n    width: 110px;\n    height: 20px;\n    border-radius: 50% 190% 50% 0;\n    border-color: black black transparent transparent;\n    position: absolute;\n    top: 65px;\n    right: -9px;\n    transform: rotate(-20deg);\n}\n\n.beard>.beard_6 {\n    width: 120px;\n    height: 20px;\n    border-radius: 50% 190% 50% 0;\n    border-color: black black transparent transparent;\n    position: absolute;\n    top: 91px;\n    right: -19px;\n    transform: rotate(-6deg);\n}\n\n/* \u9F3B\u5B50 */\n\n.nose {\n    width: 200px;\n    height: 90px;\n    position: absolute;\n    top: 78px;\n    left: 64px;\n    z-index: 11;\n    display: flex;\n    justify-content: center;\n}\n\n.nose>.nose_yuan {\n    width: 35px;\n    height: 35px;\n    background-color: #F45D61;\n    border-radius: 50%;\n    border: 2px solid black;\n}\n\n.nose>.nose_line {\n    height: 55px;\n    border: 2px solid black;\n    position: absolute;\n    bottom: 0;\n    left: 99px;\n}\n\n/* \u624B */\n\n.hand {\n    width: 300px;\n    height: 130px;\n    margin: 0 auto;\n    position: relative;\n    top: -110px;\n    left: 2px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.hand div {\n    border-radius: 50%;\n}\n\n.hand>.hand_left {\n    width: 120px;\n    position: relative;\n    top: 0;\n    left: -13px;\n    z-index: 2;\n}\n\n.hand>.hand_left>.hand_left_top {\n    width: 50px;\n    height: 50px;\n    border: 2px solid black;\n    background-color: white;\n    position: absolute;\n    top: 0;\n    left: 67px;\n}\n\n.hand>.hand_left>.hand_left_bottom {\n    width: 60px;\n    height: 78px;\n    background-color: #1B94DD;\n    border: 2px solid black;\n    transform: rotate(37deg);\n    position: relative;\n    top: 10px;\n    left: 36px;\n    z-index: -1;\n}\n\n.hand>.hand_center {\n    width: 60px;\n}\n\n.hand>.hand_center>.hand_center_yuan {\n    width: 40px;\n    height: 40px;\n    background-color: #FDD984;\n    position: relative;\n    top: 35px;\n    left: 11px;\n}\n\n.hand>.hand_right {\n    width: 120px;\n    position: relative;\n    top: -2px;\n    right: -13px;\n}\n\n.hand>.hand_right>.hand_right_top {\n    width: 50px;\n    height: 50px;\n    border: 2px solid black;\n    background-color: white;\n    position: absolute;\n    top: 0;\n    right: 67px;\n}\n\n.hand>.hand_right>.hand_right_bottom {\n    width: 60px;\n    height: 78px;\n    background-color: #1B94DD;\n    border: 2px solid black;\n    transform: rotate(-40deg);\n    position: relative;\n    top: 9px;\n    left: 15px;\n    z-index: -1;\n}\n\n/* \u7ED9\u624B\u6DFB\u52A0\u7EBF */\n\n.hand_line {\n    width: 300px;\n    height: 60px;\n    position: relative;\n    bottom: 230px;\n    left: 18px;\n}\n\n.hand_line div {\n    border: 2px solid black;\n}\n\n.hand_line>.hand_line_left {\n    width: 7px;\n    height: 26px;\n    border-radius: 0 0 0 50px;\n    border-color: transparent transparent black transparent;\n    position: relative;\n    top: 9px;\n    left: 38px;\n    transform: rotate(247deg);\n    z-index: 20;\n}\n\n.hand_line>.hand_line_right {\n    width: 7px;\n    height: 24px;\n    border-radius: 10px 0 0 10px;\n    border-color: transparent transparent black transparent;\n    position: relative;\n    top: -8px;\n    left: 245px;\n    transform: rotate(116deg);\n}\n";

// 按钮
var $button = $(".button");
var $buttonDiv = $(".button div");

$button.on("click", $buttonDiv, function (e) {
    var $div = $(e.target);
    $div.addClass('active').siblings().removeClass("active");
});
$(".slow").on('click', function () {
    time = 30;
});
$(".middle").on('click', function () {
    time = 15;
});
$(".fast").on('click', function () {
    time = 0;
});
},{}],"..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '14737' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.d9a64d96.map