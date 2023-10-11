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
import opening from '../animations/opening.json';

export const HomeScreen = ({ navigation }) => {
    // const data = route.params;
    // console.log(data);
  
    const navigateDiabetes = () => {
      navigation.navigate('Diabetes');
    };
  
    const navigateLogout = () => {
      navigation.navigate('Welcome !');
    };
  
    const navigateHeart = () => {
      navigation.navigate('Heart Screen');
    };
  
    const defaultOptions = {
      loop: true,
      autoPlay: true,
      source: opening,
    };
  
    return (
      <ImageBackground source={require('../images/loginback.jpg')}style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
          <Image source={require('../images/logo_t.png')} style={styles.logo} />
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.analyticsText}>Advanced Analytics Use-Cases</Text>
          <View style={styles.analyticsContainer}>
            <View style={styles.component}>
              <View style={styles.card}>
                <Text style={styles.cardHeader}>Machine Learning</Text>
                <Text style={styles.cardText}>Chance of Rain</Text>
                <Text style={styles.cardText}>Forecasting Example</Text>
                <TouchableOpacity onPress={navigateHeart} style={styles.cardLink}>
                  <Text style={styles.cardLinkText}>Heart Attack Prediction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateDiabetes} style={styles.cardLink}>
                  <Text style={styles.cardLinkText}>Diabetes Prediction</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardHeader}>Image Classification</Text>
                <Text style={styles.cardText}>X-Ray Pneumonia Detection</Text>
                <Text style={styles.cardText}>Potato Plant Disease</Text>
                <Text style={styles.cardText}>Garbage Bins Cleanliness</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardHeader}>Anomaly Detection</Text>
                <Text style={styles.cardText}>To be determined..</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardHeader}>Video Analytics</Text>
                <Text style={styles.cardText}>People Counter</Text>
                <Text style={styles.cardText}>People In and Out</Text>
                <Text style={styles.cardText}>Cars Counter</Text>
              </View>
              <LottieView
                speed={1}
                autoPlay
                loop
                source={defaultOptions.source}
                style={styles.lottie}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© ASCEND Solutions 2023.</Text>
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#033258',
    },
    header: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    logoutButton: {
      borderRadius: 20,
      backgroundColor: '#394857',
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    logoutButtonText: {
      fontSize: 18,
      color: 'white',
      padding: 10,
    },
    logo: {
      height: 170,
      width: 170,
    },
    content: {
      backgroundColor: '#2F6398',
      borderWidth: 10,
      borderRadius: 20,
      borderColor:'#2F6398',
      padding: 10,
    //   flexWrap: 'wrap',
      marginTop: 20,
      marginBottom: 90,
      maxWidth: '100%',
      minWidth: '50%',
      marginLeft: 25,
      marginRight: 25,
      flexDirection:'column',
      height:'100%'
    },
    analyticsText: {
      fontSize: 20,
      color: 'white',
    },
    analyticsContainer: {
      flexDirection: 'column',
      width: '100%',
      marginTop: 20,
      justifyContent: 'Center',
      alignItems: 'center',
      height:'100',
    },
    component: {
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'space-evenly',
      height: '100%',
      minWidth: 300,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderColor:'black',
      height: 180,
      padding: 10,
      borderWidth: 2,
      borderRadius: 20,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 15,
    },
    cardHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      borderRadius:4,
      borderColor:'#2F6398',
      borderWidth:1,
      backgroundColor:'#2F6398'
    },
    cardText: {
      marginTop: 10,
    },
    cardLink: {
      color: 'blue',
      fontWeight: 'bold',
      marginTop: 5,
    },
    cardLinkText: {
      color: 'blue',
      fontWeight: 'bold',
      marginTop: 5,
    },
    lottie: {
      height: 250,
      width: 'auto',
      minWidth:200,
      marginBottom:60,
    },
    footer: {
      backgroundColor: '#2F6398',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      fontSize: 20,
      color: 'white',
    },
  });

export default HomeScreen;
