import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native";
import HomePage from "../../screens/home/HomePage";
import ContactPage from "../../screens/contact/ContactPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../../screens/auth/LoginPage";

const BottomTab = createBottomTabNavigator();

export const HomeBottomTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={HomePage} />
      <BottomTab.Screen name="Login" component={LoginPage} />
    </BottomTab.Navigator>
  )
}

export const ContactBottomTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Login" component={LoginPage} />
      <BottomTab.Screen name="Contact" component={ContactPage} />
    </BottomTab.Navigator>
  )
}

export default {
  HomeBottomTab,
  ContactBottomTab
}