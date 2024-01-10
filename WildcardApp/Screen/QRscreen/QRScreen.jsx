import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from './../../assets/Utiles/Colors';


export default function QRScreen({ navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={[styles.headerText, { color: Colors.WHITE }]}>Qr Scan </Text>
      ),
      headerStyle: {
        backgroundColor: Colors.Pink,
      },
      headerTitleAlign: 'center', 
    });
  }, [navigation]);

  const handleScanCodePress = () => {
    navigation.navigate('ScanCodeCamera');
  };



  return (
    <View style={styles.container}>

      <Image source={require('./../../assets/Images/WILDCARD.jpeg')} style={styles.logoImage} />

      <Image source={require('./../../assets/Images/SCANQR.jpeg')} style={styles.bgImage} />

      <TouchableOpacity style={styles.button }   onPress={handleScanCodePress}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 18 }]}>Scan Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 18 }]}>Check Guests</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: Colors.Pink,
  },
  logoImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  bgImage: {
    width: 150,
    height: 150,
    marginTop: 10,
    objectFit: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.Pink,
    padding: 15,
    borderRadius: 5,
    marginTop: 5,
    width: '50%',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});