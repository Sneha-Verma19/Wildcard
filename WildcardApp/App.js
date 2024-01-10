

import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import QRScreen from './Screen/QRscreen/QRScreen';
import {createStackNavigator} from '@react-navigation/stack'
import ScanCodeCamera from './Screen/QRscreen/ScanCodeCamera/ScanCodeCamera';
import Notification from './Screen/QRscreen/Notification/Notification';




const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name= 'QRScreen' component={QRScreen} />
        <Stack.Screen name='ScanCodeCamera' component={ScanCodeCamera}/>
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

