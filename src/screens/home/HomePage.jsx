import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import callApi from '../../services/api/apiClient';
import { useNavigation } from '@react-navigation/native';

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

    <SafeAreaView style={styles.container}>
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
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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