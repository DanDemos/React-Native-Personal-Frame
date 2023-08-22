import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, StatusBar } from 'react-native';
import { FrameText } from '../../customizedNative/FrameText';
// import { SafeAreaView } from 'react-native';
import NavBar from 'screens/layout/NavBar';
import BottomBar from 'screens/layout/BottomBar';
import { ScrollView } from 'react-native';

const { height } = Dimensions.get('screen');

const CustomContainer = props => {
  console.log(props, "child of CustomContainer")
  return (
    <SafeAreaView style={{ backgroundColor: "green", marginTop: StatusBar.currentHeight, flex: 1 }}>
      <View style={styles.container}>

        <NavBar />

        <ScrollView contentContainerStyle={styles.body}>
          {props.children}
        </ScrollView>

        <BottomBar />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: height - 60,
  },
  body: {
    flex: 1,
    backgroundColor: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default CustomContainer