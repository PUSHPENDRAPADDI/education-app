import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='about' component={About} />
        <Stack.Screen name='productDetails' component={ProductDetails} />
        <Stack.Screen name='cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Video 11 completed