import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {SplashScreen} from '../screens/splash';
import {LoginScreen} from '../screens/Login';
import {HomeScreen} from '../screens/Home';
import {HeartScreen} from '../screens/Heart';
// import {DiabetesScreen} from '../screens/DiabetesScreen';
const Stack = createNativeStackNavigator();
function MainScreenNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome !">
        <Stack.Screen name="Welcome !" component={SplashScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          name="Heart Screen"
          component={HeartScreen}
        />
        {/* <Stack.Screen
          name="Diabetes Screen"
          component={DiabetesScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainScreenNavigator;