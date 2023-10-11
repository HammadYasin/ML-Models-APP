import React, { useEffect, useRef,useState } from 'react';
import { View, Animated, StyleSheet,Image } from 'react-native';
export const SplashScreen = ({ navigation }) =>  {
    setTimeout(() => {
      navigation.replace('Login Screen');
    }, 1500);
    const [opacityValue] = useState(new Animated.Value(0));

    const fadeIn = () => {
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => fadeOut());
    };
  
    const fadeOut = () => {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => fadeIn());
    };
  
    useEffect(() => {
      fadeIn();
    }, []);
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF',display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',justifyContent:'center',alignSelf:'center',width:'100%',height:'100vh'}}>
    <Animated.Image
            style={{
                width: 150,
                height: 150,
                opacity: opacityValue,
              }}
     source={require('../images/logo_s.png')}/>
    </View>
  );
};

const Styles = StyleSheet.create({
    imageStyle : {
        height:150,
        width:150,
      },
  });

export default SplashScreen;