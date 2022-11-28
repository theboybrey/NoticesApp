import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/screens/LandingPage';
import { createStackNavigator } from '@react-navigation/stack';

import { auth, firebase, firestore, functions, storage, database } from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Register from './src/screens/Register';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC812UJ3SdRiPasBbV_chzrX8Mz7OYeYWI",
  authDomain: "noticesapp-18c77.firebaseapp.com",
  projectId: "noticesapp-18c77",
  storageBucket: "noticesapp-18c77.appspot.com",
  messagingSenderId: "134774873236",
  appId: "1:134774873236:web:c7d7f0690550d8e3d8a881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
// }


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

