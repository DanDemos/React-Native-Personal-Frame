import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native";


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