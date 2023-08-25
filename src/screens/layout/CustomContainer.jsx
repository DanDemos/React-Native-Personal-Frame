import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, StatusBar } from 'react-native';
import { FrameText } from '../../customizedNative/FrameText';
// import { SafeAreaView } from 'react-native';
import NavBar from 'screens/layout/NavBar';
import BottomBar from 'screens/layout/BottomBar';
import { ScrollView } from 'react-native';

const { height } = Dimensions.get('screen');

const CustomContainer = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {/* <SafeAreaView style={{ backgroundColor: "green", flex: 1, paddingBottom: Math.max(insets.bottom, 16) }}> */}
        <View style={styles.container}>

          <NavBar />

          <ScrollView contentContainerStyle={styles.body}>
            {props.children}
          </ScrollView>

          <BottomBar />

        </View>

      {/* </SafeAreaView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "skyblue",
    flex: 1,
    // margin: 0,
    // padding: 0,
    // display: "flex",
    // flexDirection: "column",
    // minHeight: height - 60,
  },
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: "skyblue",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },

});

export default CustomContainer