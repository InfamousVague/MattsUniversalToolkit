package com.uplink.app;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Get the intent that started this activity
        Intent intent = getIntent();
        String action = intent.getAction();
        Uri data = intent.getData();

        if (Intent.ACTION_VIEW.equals(action) && data != null) {
            // Extract the dynamic segment (friend ID) from the deep link
            String friendId = data.getLastPathSegment();
            Log.d("DeepLink", "Friend ID: " + friendId);

            // Add your logic to handle the friendId (e.g., navigate to a specific screen)
            handleDeepLink(friendId);
        }
    }

    private void handleDeepLink(String friendId) {
        // Replace this with your app-specific logic
        Log.d("DeepLinkHandler", "Handling friend ID: " + friendId);
    }
}
