function ScanMediaPlugin() {}

ScanMediaPlugin.prototype.scanFile = function(string, win, fail) {
    cordova.exec(win, fail, "ScanMedia", "mediaScanner", [string]);
};

ScanMediaPlugin.install = function () {
    console.log("ScanMediaPlugin: Initializing")
    if(!window.plugins){
        window.plugins = {};
        console.log("ScanMediaPlugin: window.plugins initialized");
    }

    window.plugins.scanmedia = new ScanMediaPlugin();
    console.log("ScanMedia: " + JSON.stringify(window.plugins.scanmedia));
    return window.plugins.scanmedia;
};

cordova.addConstructor(ScanMediaPlugin.install);
