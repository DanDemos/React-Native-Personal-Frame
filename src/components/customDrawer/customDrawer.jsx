import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native";
import HomePage from "../../screens/home/HomePage";
import ContactPage from "../../screens/contact/ContactPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../../screens/auth/LoginPage";
import customBottomTab from "../customBottomTab/customBottomTab";

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerType: 'front' }}>
      <Drawer.Screen name="Home" component={customBottomTab.HomeBottomTab} />
      <Drawer.Screen name="Contact" component={customBottomTab.ContactBottomTab} />
    </Drawer.Navigator>
  )
}

export const CustomDrawer = props => {
  console.log(props, "propsprops")
  return (
    <SafeAreaView>
      <Text>Logout</Text>
      <Text>Logout</Text>
    </SafeAreaView>
  )
}

export default CustomDrawer;