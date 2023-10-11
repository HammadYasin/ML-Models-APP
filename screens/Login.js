import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
  ImageBackground,
  ScrollView
} from 'react-native';
import LottieView from 'lottie-react-native'; // Import LottieView for animations
import CheckBox from 'expo-checkbox';

export const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [log, setLog] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isDialogOpen1, setDialogOpen1] = useState(false);

  const togglePassword = () => {
    setIsShown(!isShown);
  };

  const navigateHome = () => {
    setLog(true);
    setTimeout(() => {
        navigation.replace('Home Screen');
    }, 500);
  };

  const checkVals = () => {
    if (user !== '' && pass !== '') {
      if (user === 'cmc-analytics' && pass === 'Ascend#2023') {
        navigateHome();
      } else {
        setDialogOpen1(true);
      }
    } else {
      setDialogOpen(true);
    }
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  const closeDialog1 = () => {
    setDialogOpen1(false);
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2F6398',
      marginBottom:'25%',
      marginTop:'13%',
      marginLeft:'3%',
      marginRight:'3%',
      borderRadius:25,
    },
    logo: {
      width: 170,
      height: 170,
      alignSelf:'center',
      marginTop:'5%'
    },
    input: {
      width: '80%',
      height: 40,
      fontSize: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkboxLabel: {
      color: 'white',
      fontSize: 20,
    },
    button: {
      width: '80%',
      height: 50,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#394857',
      marginBottom: 25,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
    },
    footer: {
      backgroundColor: '#2F6398',
      height: 30,
      textAlign: 'center',
    },
    footerText: {
      fontSize: 20,
      color: 'white',
      alignSelf:'center'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      dialog: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
      dialogContent: {
        alignItems: 'center',
      },
      dialogTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dialogText: {
        fontSize: 16,
        marginBottom: 20,
      },
      background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
  });
  return (
    <ImageBackground
        source={require('../images/loginback.jpg')} // Background image
        style={styles.background}
    >
    <ScrollView style={{marginTop:'8%'}}>
      <Image
        source={require('../images/logo_t.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    <View style={styles.container}>
        <Text style={{color:'white',fontSize:40,alignSelf:'center',marginBottom:30}}>Login</Text>
      <TextInput
        value={user}
        onChangeText={(text) => setUser(text)}
        placeholder="Enter User"
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Show password?</Text>
        <CheckBox style={{marginLeft:5}}value={isShown} onValueChange={togglePassword} />
      </View>
      <TextInput
        value={pass}
        onChangeText={(text) => setPass(text)}
        placeholder="Enter Password"
        secureTextEntry={!isShown}
        style={styles.input}
      />
      <View style={{height:60,alignContent:'center',justifyContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>
      {log && (
        <LottieView
          source={require('../animations/login1.json')}
          key='animation'
          autoPlay
          loop
          style={{ width: 80 , height: 80}}
        />
      )}
      </View>
      <TouchableOpacity onPress={checkVals} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    <Modal
        animationType="fade"
        transparent={true}
        visible={isDialogOpen || isDialogOpen1}
      >
        <View style={styles.overlay}>
          <View style={styles.dialog}>
            <Text style={styles.dialogTitle}>Error!</Text>
            {isDialogOpen && (
              <Text style={styles.dialogText}>Input values are empty.</Text>
            )}
            {isDialogOpen1 && (
              <Text style={styles.dialogText}>Invalid user and password.</Text>
            )}
            <Button
              title="Close"
              style={styles.button}
              onPress={() => {
                closeDialog();
                closeDialog1();
              }}
            />
          </View>
        </View>
      </Modal>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© ASCEND Solutions 2023.</Text>
      </View>
      </ScrollView>
      </ImageBackground>
  );
};

export default LoginScreen;
