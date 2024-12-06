package com.uplink.app;

import com.getcapacitor.BridgeActivity;
import com.uplink.plugins.SafeAreaColorPlugin;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(SafeAreaColorPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
