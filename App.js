import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='about' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}