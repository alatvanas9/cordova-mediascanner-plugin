(function() {
    /* This increases plugin compatibility */
    //var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

    /**
    * The Java to JavaScript Gateway 'magic' class 
    */
    scanMediaPlugin = function(){

        scanMediaPlugin.prototype.mediaScanner = function(string, win, fail) {
            cordova.exec(win, fail, "ScanMedia", "mediaScanner", [string]);
        };
    };

    })();