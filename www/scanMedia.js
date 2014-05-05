function ScanMediaPlugin() {}

ScanMediaPlugin.prototype.scanFile = function(string, win, fail) {
    cordova.exec(win, fail, "ScanMedia", "mediaScanner", [string]);
};

ScanMediaPlugin.prototype.test = function() {
    console.log("Hello World");
};

ScanMediaPlugin.install = function () {
    console.log("ScanMediaPlugin: Initializing")
    if(!window.plugins){
        window.plugins = {};
        console.log("ScanMediaPlugin: window.plugins initialized");
    }

    window.plugins.scanmedia = new ScanMediaPlugin();
    window.plugins.scanmedia.test();
    
    return window.plugins.scanmedia;
};

cordova.addConstructor(ScanMediaPlugin.install);
