cordova.define("scanMediaPlugin", function(require, exports, module) {
    var exec = require('cordova/exec');

    var scanMediaPlugin = function() {};
    
    scanMediaPlugin.prototype.mediaScanner = function(string, win, fail) {
        exec(win, fail, "ScanMedia", "mediaScanner", [string]);
    };
});