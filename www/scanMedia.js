function ScanMediaPlugin() {}

ScanMediaPlugin.prototype.scanFile = function(string, win, fail) {
    exec(win, fail, "ScanMedia", "mediaScanner", [string]);
};

ScanMediaPlugin.install = function () {
    if(!window.plugins){
        window.plugins = {};
    }

    window.plugins.scanmedia = new ScanMediaPlugin();
    return window.plugins.scanmedia;
};

cordova.addConstructor(ScanMediaPlugin.install);
