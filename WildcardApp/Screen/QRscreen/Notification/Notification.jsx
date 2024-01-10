import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './../../../assets/Utiles/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Notification({ ticketSuccess, onClose, scannedData }) {
  const [showNotification, setShowNotification] = useState(true); // Add state for showing/hiding the notification
  const navigation = useNavigation();

  const handleNotificationClose = () => {
    setShowNotification(false);
    navigation.navigate('QRScreen');
  };

  if (!showNotification) {
    return null; // Render nothing if showNotification is false
  }

  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        {ticketSuccess ? (
          <Ionicons name="checkmark-circle" size={40} color="green" />
        ) : (
          <Ionicons name="close-circle" size={40} color="red" />
        )}
        <Text style={styles.notificationText}>
          {ticketSuccess
            ? 'Ticket successfully validated!'
            : 'Ticket booking failed.'}
        </Text>

        <Text style={styles.additionalInfoText}>
          {scannedData ? `Scanned Data: ${scannedData}` : ''}
        </Text>
      </View>

      <TouchableOpacity style={styles.okButton} onPress={handleNotificationClose}>
        <Text style={styles.okButtonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    zIndex: 1,
    elevation: 5,
  },
  notificationContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  additionalInfoText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: Colors.Pink,
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center',
  },
  okButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
