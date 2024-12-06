package com.uplink.plugins;

import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.view.Window;
import androidx.annotation.NonNull;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "SafeAreaColorPlugin")
public class SafeAreaColorPlugin extends Plugin {

    @PluginMethod
    public void setStatusBarColor(PluginCall call) {
        String color = call.getString("color");

        if (color == null) {
            call.reject("Color must be provided");
            return;
        }
        getActivity().runOnUiThread(() -> {
            try {
                Window window = getActivity().getWindow();
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    window.setStatusBarColor(android.graphics.Color.parseColor(color));
                }
                call.resolve();
            } catch (Exception e) {
                call.reject("Failed to set status bar color", e);
            }
        });
    }

    @PluginMethod
    public void setNavigationBarColor(PluginCall call) {
        String color = call.getString("color");

        if (color == null) {
            call.reject("Color must be provided");
            return;
        }

        getActivity().runOnUiThread(() -> {
            try {
                Window window = getActivity().getWindow();
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    window.setNavigationBarColor(android.graphics.Color.parseColor(color));
                }
                call.resolve();
            } catch (Exception e) {
                call.reject("Failed to set navigation bar color", e);
            }
        });
    }
}
