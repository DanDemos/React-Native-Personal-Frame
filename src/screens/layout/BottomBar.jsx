// import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';
import { FrameText } from '../../customizedNative/FrameText';
import { SafeAreaView } from 'react-native';
import { IconComp } from 'components/icon/icon';

const BottomBar = props => {
  return (

    <View style={{ backgroundColor: "red", width: "100%", height: 80, paddingLeft: 10, paddingRight: 10 }}>
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
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <IconComp icon name="home" type="awesome" size={40} />

        <Text style={{ fontSize: 12, }}>
          Home
        </Text>

      </View>
    </View>
  )
}

const Center = props => {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <IconComp icon name="login" type="entypo" size={40} />

        <Text style={{ fontSize: 12, }}>
          Login
        </Text>

      </View>
    </View>
  )
}

const RightSide = props => {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <IconComp icon name="menu" type="entypo" size={40} />

        <Text style={{ fontSize: 12, }}>
          Logout
        </Text>

      </View>
    </View>
  )
}

export default BottomBar;