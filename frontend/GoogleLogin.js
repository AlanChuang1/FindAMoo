import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    androidClientId: process.env.ANDROID_CLIENT_ID,
    webClientId: process.env.WEB_CLIENT_ID,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}