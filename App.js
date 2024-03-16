import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='about' component={About} />
        <Stack.Screen name='productDetails' component={ProductDetails} />
        <Stack.Screen name='checkout' component={Checkout} />
        <Stack.Screen name='payment' component={Payment} />
        <Stack.Screen name='login' component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='register' component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Video 11 completed