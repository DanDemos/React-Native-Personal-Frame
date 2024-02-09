// import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';
import { FrameText } from '../../customizedNative/FrameText';
import { SafeAreaView } from 'react-native';
import { IconComp } from 'components/icon/icon';

const BottomTab = props => {
  const navigation = useNavigation()
  
  return (
    <View style={{ backgroundColor: "red", width: "100%", height: 80, paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ backgroundColor: "rgba(255, 0, 255, 0.2)", flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>

        <BottomTabBtn>
          <IconComp icon name="home" type="awesome" size={30} />
          <Text style={{ fontSize: 12, }}>
            Home
          </Text>
        </BottomTabBtn>
        <BottomTabBtn>
          <IconComp icon name="home" type="awesome" size={30} />
          <Text style={{ fontSize: 12, }}>
            Home
          </Text>
        </BottomTabBtn>
        <BottomTabBtn>
          <IconComp icon name="home" type="awesome" size={30} />
          <Text style={{ fontSize: 12, }}>
            Home
          </Text>
        </BottomTabBtn>
        <BottomTabBtn>
          <IconComp icon name="home" type="awesome" size={30} />
          <Text style={{ fontSize: 12, }}>
            Home
          </Text>
        </BottomTabBtn>
        <BottomTabBtn>
          <IconComp icon name="home" type="awesome" size={30} />
          <Text style={{ fontSize: 12, }}>
            Home
          </Text>
        </BottomTabBtn>
        <BottomTabBtn onPress={(_=> navigation?.openDrawer())}>
          <IconComp icon name="menu" type="entypo" size={30} />
          <Text style={{ fontSize: 12, }}>
            Menu
          </Text>
        </BottomTabBtn>
      </View>
    </View>
  );
};

const BottomTabBtn = props => {
  return (
    <TouchableOpacity onPress={props?.onPress}>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

export default BottomTab;