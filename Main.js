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
import Account from './screens/Account/Account';
import Notifications from './screens/Account/Notifications';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/Admin/Dashoard';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator();
export default function Main() {
    const [isAuth, setIsAuth] = useState(null)
    // get User
    useEffect(() => {
        const getUserLocalData = async () => {
            let data = await AsyncStorage.getItem('@auth')
            setIsAuth(data)
        }
        getUserLocalData()
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' >
                <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='about' component={About} />
                <Stack.Screen name='productDetails' component={ProductDetails} />
                <Stack.Screen name='checkout' component={Checkout} />
                <Stack.Screen name='payment' component={Payment} />
                <Stack.Screen name='account' component={Account} />
                <Stack.Screen name='notification' component={Notifications} />
                <Stack.Screen name='profile' component={Profile} />
                <Stack.Screen name='myorders' component={MyOrders} />
                <Stack.Screen name='adminPanel' component={Dashboard} />
                <Stack.Screen name='cart' component={Cart} />
                {!isAuth && (<>
                    <Stack.Screen name='login' component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name='register' component={Register}
                        options={{ headerShown: false }}
                    /></>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
