"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _child_process = require("child_process");

var _child_process2 = _interopRequireDefault(_child_process);

var _crossSpawn = require("cross-spawn");

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _syncExec = require("sync-exec");

var _syncExec2 = _interopRequireDefault(_syncExec);

var _events = require("events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Keep track of how many live children we have.
var children = 0;

// This is used to alert listeners when all children have exited.
var emitter = new _events.EventEmitter();

var ChildProcessUtilities = function () {
  function ChildProcessUtilities() {
    _classCallCheck(this, ChildProcessUtilities);
  }

  _createClass(ChildProcessUtilities, null, [{
    key: "exec",
    value: function exec(command, opts, callback) {
      return ChildProcessUtilities.registerChild(_child_process2.default.exec(command, opts, function (err, stdout, stderr) {
        if (err != null) {

          // If the error from `child.exec` is just that the child process
          // emitted too much on stderr, then that stderr output is likely to
          // be useful.
          if (/^stderr maxBuffer exceeded/.test(err.message)) {
            err = "Error: " + err.message + ".  Partial output follows:\n\n" + stderr;
          }

          callback(err || stderr, stdout);
        } else {
          callback(null, stdout);
        }
      }));
    }
  }, {
    key: "execSync",
    value: function execSync(command, opts) {
      var mergedOpts = (0, _objectAssign2.default)({
        encoding: "utf8"
      }, opts);
      if (_child_process2.default.execSync) {
        return _child_process2.default.execSync(command, mergedOpts).trim();
      } else {
        return (0, _syncExec2.default)(command, mergedOpts).stdout.trim();
      }
    }
  }, {
    key: "spawn",
    value: function spawn(command, args, opts, callback) {
      var stderr = "";

      var childProcess = ChildProcessUtilities.registerChild((0, _crossSpawn2.default)(command, args, (0, _objectAssign2.default)({
        stdio: "inherit"
      }, opts)).on("error", function () {}).on("exit", function (code) {
        callback(code && (stderr || "Command failed: " + command + " " + args.join(" ")));
      }));

      // By default stderr is inherited from us (just sent to _our_ output).
      // If the caller overrode that to "pipe", then we'll gather that up and
      // call back with it in case of failure.
      if (childProcess.stderr) {
        childProcess.stderr.setEncoding("utf8");
        childProcess.stderr.on("data", function (chunk) {
          return stderr += chunk;
        });
      }
    }
  }, {
    key: "registerChild",
    value: function registerChild(child) {
      children++;
      child.on("exit", function () {
        children--;
        if (children === 0) {
          emitter.emit("empty");
        }
      });
      return child;
    }
  }, {
    key: "getChildProcessCount",
    value: function getChildProcessCount() {
      return children;
    }
  }, {
    key: "onAllExited",
    value: function onAllExited(callback) {
      emitter.on("empty", callback);
    }
  }]);

  return ChildProcessUtilities;
}();

exports.default = ChildProcessUtilities;
module.exports = exports["default"];