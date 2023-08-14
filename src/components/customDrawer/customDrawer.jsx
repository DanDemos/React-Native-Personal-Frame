import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import { IconComp } from "../icon/icon";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
export const CustomDrawer = props => {
  console.log(props, "propsprops")
  return (
    <>
      <DrawerContentScrollView style={{ backgroundColor: "lightgreen" }} {...props}>
        <Text style={{ textAlign: "center", backgroundColor: "#ccc" }}>Welcome Dan</Text>
        <View style={{ flex: 1, backgroundColor: "pink", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <SafeAreaView style={{backgroundColor: "yellow"}}>

        <View style={{ padding: 10, borderTopWidth: 1, borderColor: "#ccc", backgroundColor: "skyblue" }}>
          <Text style={{ textAlign: "center" }}>Version: 1.0.1</Text>
        </View>

      </SafeAreaView>
    </>

  )
}

export default CustomDrawer;