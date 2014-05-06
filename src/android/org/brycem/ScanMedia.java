package org.brycem;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;

public class ScanMedia extends CordovaPlugin {
    public static final String ACTION_MEDIASCANNER = "mediaScanner";
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (!action.equals(ACTION_MEDIASCANNER)) {
            return false;
        }
        
        try {
            String absolutePath = args.getString(0);
            if (absolutePath.startsWith("data:image")) {
                absolutePath = absolutePath.substring(absolutePath.indexOf(',') + 1);
            }

            return this.mediaScanner(absolutePath, callbackContext);

        } catch (JSONException e) {
            e.printStackTrace();
            callbackContext.error(e.getMessage());
            return false;
        } catch (InterruptedException e) {
            e.printStackTrace();
            callbackContext.error(e.getMessage());
            return false;
        }
    }

    private boolean mediaScanner(String absolutePath, CallbackContext callbackContext) throws InterruptedException, JSONException
    {
          Intent mediaScanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
          //File f = new File(filename);

          Uri contentUri = Uri.parse(absolutePath.toString());
          mediaScanIntent.setData(contentUri);
          System.out.println("from internal?" + contentUri);
          this.cordova.getActivity().sendBroadcast(mediaScanIntent);
          return true;
    }
}
