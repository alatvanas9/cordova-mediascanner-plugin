(function() {
    /* This increases plugin compatibility */
    var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

    /**
    * The Java to JavaScript Gateway 'magic' class 
    */
    function ScanMedia(){ }

        ScanMedia.prototype.mediaScanner = function(string, win, fail) {
            cordovaRef.exec(win, fail, "ScanMedia", "mediaScanner", [string]);
        };

    })();