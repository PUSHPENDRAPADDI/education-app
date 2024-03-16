import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox'

const Login = ({ navigation }) => {
    const loginImage = "https://cdn-icons-png.flaticon.com/512/5087/5087579.png";
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (!email || !password) {
            return alert('Please Add email or Password')
        }
        alert("Login Successfully");
        navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: loginImage }} />
            <InputBox
                value={email}
                placeholder={'Enter Your Email'}
                autoComplete={"email"}
                setValue={setEmail}
            />
            <InputBox
                value={password}
                placeholder={'Enter Your Password'}
                secureTextEntry={true}
                setValue={setPassword}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <Text>Not a user yet ? Please <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('register')}>Register</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        height: '80%'
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        backgroundColor: '#000000',
        width: '100%',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20
    },
    loginBtnText: {
        color: '#ffffff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 18
    },
    link: {
        color: 'red'
    }
})

export default Login