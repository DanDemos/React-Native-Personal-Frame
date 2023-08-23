// import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';
import { FrameText } from '../../customizedNative/FrameText';
import { SafeAreaView } from 'react-native';
import { IconComp } from 'components/icon/icon';

const NavBar = props => {
  return (

    <View style={{ backgroundColor: "red", width: "100%", height: 60, paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ backgroundColor: "purple", flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>


        <LeftSide />
        <Center />
        <RightSide />


      </View>
    </View>
  );
};

const LeftSide = props => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation?.openDrawer()}>
        <IconComp icon name="menu" type="entypo" size={40} />

      </TouchableOpacity>
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

export default NavBar;