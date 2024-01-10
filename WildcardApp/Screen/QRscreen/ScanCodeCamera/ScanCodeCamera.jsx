import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import Colors from './../../../assets/Utiles/Colors';
import Notification from '../Notification/Notification';

const { width } = Dimensions.get('window');
const scannerSize = width * 0.9; // Adjust the size as needed

export default function ScanCodeCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');
  const [showCamera, setShowCamera] = useState(true);
  const [ticketSuccess, setTicketSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigation = useNavigation();

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    const startScanning = async () => {
      await askForCameraPermission();
      setShowCamera(true);
    };

    startScanning();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setText(data);
    setTicketSuccess(true);
    stopScanning();
    setShowNotification(true);
  };

  const stopScanning = () => {
    setShowCamera(false);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={[styles.headerText, { color: Colors.WHITE }]}>QR Scan</Text>
      ),
      headerStyle: {
        backgroundColor: Colors.Pink,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {hasPermission && showCamera && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, styles.scanner]}
        />
      )}

      {showNotification && (
        <Notification
          ticketSuccess={ticketSuccess}
          onClose={handleNotificationClose}
          scannedData={text}
        >
          {/* Render the 'QRScreen' content here */}
          <View style={styles.scanResultContainer}>
            <Text style={styles.scanResultText}>Display QRScreen Content Here</Text>
          </View>
        </Notification>
      )}
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
  scanner: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  scanResultContainer: {
    marginTop: 20,
  },
  scanResultText: {
    fontSize: 18,
  },
});
