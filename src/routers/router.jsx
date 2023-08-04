import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
// import { DrawerComponent } from './components'
import { StackNavScreens } from "./router-config";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const NavigationProvider = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        routeNameRef.current = currentRouteName;
      }}>
      <DrawerNavigation />

    </NavigationContainer>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    // drawerContent={(props) => {
    //   <view {...props}>

    //   </view>
    // }}
    >
      <Drawer.Screen name="DrawerNavigation" component={BottomTabNavigator} />
      <Drawer.Screen name="DrawerNavigation1" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BottomTabNavigator" component={MainStackNavigator} />
      <Tab.Screen name="BottomTabNavigator1" component={MainStackNavigator} />
    </Tab.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        StackNavScreens.map(item => <Stack.Screen key={item.name} {...item} />)
      }
    </Stack.Navigator>
  )
}



export default NavigationProvider;
