import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/screens/LandingPage';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen name='LandingPage' component={LandingPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

