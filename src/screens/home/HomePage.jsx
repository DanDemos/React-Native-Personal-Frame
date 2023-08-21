import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, StatusBar } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';
import { FrameText } from '../../customizedNative/FrameText';
// import { SafeAreaView } from 'react-native';
import NavBar from 'screens/layout/NavBar';

const { height } = Dimensions.get('screen');

const signIn_data = {
  login: '09989002021',
  password: '123',
};

const handlePress = () => {
  callApi('auth/signIn').withHeaders(signIn_data).loadingGroup('g').executeDispatch();
};

const HomePage = props => {
  const navigation = useNavigation()
  // console.log(navigation, "home navigation")
  return (

    <SafeAreaView style={{ backgroundColor: "green", marginTop:StatusBar.currentHeight, width: "100%" }}>
    {/* <SafeAreaView style={{ position: "absolute", paddingTop: Platform.OS === "ios" ? 60 : 0, backgroundColor: "#f8f9fa", width: "100%" }}> */}


      <View style={styles.container}>
      <NavBar />


        <View style={styles.header}>
          <Text style={styles.title}>Home Page</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={_ => {
          // console.log(navigation, "onCLick")
          navigation?.openDrawer()
        }}>
          <Text style={styles.buttonText}>Drawer Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <FrameText style={styles.buttonText} color="RGB(0, 255, 0)">Press Me Ok?</FrameText>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "ios" ? 60 : 0,
    width: "100%",
    height: height-130
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;