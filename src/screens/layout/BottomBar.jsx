// import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';
import { FrameText } from '../../customizedNative/FrameText';
import { SafeAreaView } from 'react-native';
import { IconComp } from 'components/icon/icon';

const BottomBar = props => {
  const navigation = useNavigation()
  // console.log(navigation, "home navigation")
  return (

    // <SafeAreaView style={{ backgroundColor: "green", position: "relative" }}>
    // <View style={{ backgroundColor: "rgba(0, 0, 255, 0.2)", width: "100%", height: 60, flex: 1, flexDirection: "row", paddingLeft: 10, paddingRight: 10, position: "absolute", bottom: 0 }}>
    <View style={{ backgroundColor: "red", width: "100%", height: 60, paddingLeft: 10, paddingRight: 10 }}>

      <View style={{ backgroundColor: "rgba(255, 0, 255, 0.2)", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>


        <LeftSide />
        <Center />
        <RightSide />


      </View>
    </View>
  );
};

const LeftSide = props => {
  return (
    <View>
      <IconComp icon name="menu" type="entypo" size={40} />
    </View>
  )
}

const Center = props => {
  return (
    <View>
      <Text>
        Hello World
      </Text>
    </View>
  )
}

const RightSide = props => {
  return (
    <View>
      <Text>
        Hello World
      </Text>
    </View>
  )
}

export default BottomBar;