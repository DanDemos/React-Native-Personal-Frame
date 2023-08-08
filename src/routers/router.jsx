import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { View, Text, Button, SafeAreaView } from "react-native";
// import { DrawerComponent } from './components'
import { StackNavScreens } from "./router-config";
import CustomDrawer from "../components/customDrawer/customDrawer";
import CustomBottomTab from "../components/customBottomTab/customBottomTab";
import { CustomDrawerNavigator } from "../components/customDrawer/customDrawer";
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const NavigationProvider = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer StackNavScreens={StackNavScreens} {...props} />}
      screenOptions={{ headerShown: false, drawerType: 'front' }}>
      {StackNavScreens.map(item => <Drawer.Screen key={item.name} name={item.name} component={MainStackNavigator} />)}
    </Drawer.Navigator>
  )
}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      {StackNavScreens.map(item => <BottomTab.Screen key={item.name} name={item.name} component={item.component} />)}
    </BottomTab.Navigator>
  );
}

const TopTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator style={{
      paddingTop: insets.top
    }} tabBarPosition="top" screenOptions={{ headerShown: false }}>
      <TopTab.Screen name="TopTabNavigator" component={MainStackNavigator} />
      <TopTab.Screen name="TopTabNavigator1" component={MainStackNavigator} />
    </TopTab.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        StackNavScreens.map(item => <Stack.Screen key={item.name} name={item.name} component={item.component} />)
      }
    </Stack.Navigator>
  )
}

export default NavigationProvider;
