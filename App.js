import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async ()=>{
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  function scheduleNotificaionHandler() {
    Notifications.scheduleNotificationAsync({
      content:{
        title:'Local Notfication title',
        body:'local notification body',
        data:{userName :'Max'}
      },
      trigger:{
        seconds:5
      }
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificaionHandler}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
