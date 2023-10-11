import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export const HeartScreen = ({ navigation }) => {

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [cp, setCp] = useState('');
  const [trtbps, setTrt] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRes] = useState('');
  const [thalachh, setTha] = useState('');
  const [exng, setExn] = useState('');
  const [oldpeak, setOld] = useState('');
  const [slp, setSlp] = useState('');
  const [caa, setCaa] = useState('');
  const [thall, setThall] = useState('');
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const navigateDiabetes = () => {
    navigation.navigate('Diabetes');
  };

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const checkVals = async () => {
    if (
      age !== '' &&
      gender !== '' &&
      cp !== '' &&
      trtbps !== '' &&
      chol !== '' &&
      fbs !== '' &&
      restecg !== '' &&
      thalachh !== '' &&
      exng !== '' &&
      oldpeak !== '' &&
      slp !== '' &&
      caa !== '' &&
      thall !== ''
    ) {
      if (age > 9 && age < 121) {
        if (trtbps > 59 && trtbps < 251) {
          if (chol > 99 && chol < 601) {
            if (thalachh > 49 && thalachh < 221) {
              if (caa > -1 && caa < 5) {
                if (oldpeak > -1 && oldpeak < 6.3) {
                  setData(null);
                  setLoad(true);
                  setTimeout(() => {
                    setLoad(false);
                  }, 1000);
                  onPressData();
                } else {
                  setDialogOpen(true);
                }
              } else {
                setDialogOpen(true);
              } 
            } else {
              setDialogOpen(true);
            }
          } else {
            setDialogOpen(true);
          }
        } else {
          setDialogOpen(true);
        }
      } else {
        setDialogOpen(true);
      }
    } else {
      setDialogOpen(true);
    }
  };

  const onPressData = async () => {
    // Implement your API call here using fetch
    // Example:
    // fetch('/heart', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     age: age,
    //     sex: gender,
    //     cp: cp,
    //     trtbps: trtbps,
    //     chol: chol,
    //     fbs: fbs,
    //     restecg: restecg,
    //     thalachh: thalachh,
    //     exng: exng,
    //     oldpeak: oldpeak,
    //     slp: slp,
    //     caa: caa,
    //     thall: thall,
    //   }),
    // })
    // .then((res) =>
    //     res.text().then((data) => {
    //         setTimeout(() => {
    //             setData(data);
    //           }, 1000)
    //     })
    // );
  };

  const ClearInputs = async () => {
    setAge('');
    setGender('');
    setCp('');
    setTrt('');
    setChol('');
    setFbs('');
    setRes('');
    setTha('');
    setExn('');
    setOld('');
    setSlp('');
    setCaa('');
    setThall('');
    setData('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/image.png')} style={styles.logo} />
      </View>
      <View style={styles.navbar}>
        <Text onPress={navigateHome} style={styles.navText}>
          Home
        </Text>
        <Text style={styles.navTextActive}>Heart</Text>
        <Text onPress={navigateDiabetes} style={styles.navText}>
          Diabetes
        </Text>
      </View>
      <View style={styles.content}>
        {/* Input fields */}
        {/* You can use TextInputs and Picker component for input fields */}
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
          placeholder="Enter Age"
          keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        value={age}
        />
        {/* Add similar TextInput and Picker components for other input fields */}

        {/* Buttons */}
        <Button
          title="Submit"
          onPress={checkVals}
          color="#2F6398"
        />
        <Button
          title="Clear Inputs"
          onPress={ClearInputs}
          color="#394857"
        />

        {/* Data display */}
        {load && (
          <LottieView
            source={require('../animations/heart1.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        )}
        {data === 'No Heart Attack' ? (
          <Text style={[styles.resultText, { color: 'green' }]}>{data}</Text>
        ) : null}
        {data === 'Heart Attack' ? (
          <Text style={[styles.resultText, { color: 'red' }]}>{data}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F6398',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2F6398',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginTop:20
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 30,
  },
  navText: {
    fontFamily: 'System',
    fontSize: 20,
    color: 'white',
    cursor: 'pointer',
    padding: 20,
  },
  navTextActive: {
    fontFamily: 'System',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#1F3B57',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderWidth: 10,
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    padding: 10,
    flexWrap: 'wrap',
    marginTop: 25,
    marginBottom: 35,
    maxWidth: '100%',
    minWidth: '70%',
    marginLeft: 25,
    marginRight: 25,
  },
  input: {
    fontFamily: 'System',
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  animation: {
    width: 350,
    height: 'auto',
    maxWidth: 350,
  },
  resultText: {
    fontFamily: 'System',
    fontSize: 40,
  },
});

export default HeartScreen;