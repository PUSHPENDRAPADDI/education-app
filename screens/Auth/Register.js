import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox';

const Register = ({ navigation }) => {
    const loginImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDM3hN-VCNh90Pop53o8bQ1L_W8kn4LhZf7Q&usqp=CAU";
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleRegister = () => {
        if (!email || !password || !name) {
            return alert('Please Add email or Password or name')
        }
        alert("Register Successfully");
        navigation.navigate('login')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: loginImage }} />
            <InputBox
                placeholder={'Enter Your Name'}
                value={name}
                setValue={setName}
                autoComplete={"email"}
            />
            <InputBox
                placeholder={'Enter Your Email'}
                value={email}
                setValue={setEmail}
                autoComplete={"email"}
            />
            <InputBox
                placeholder={'Enter Your Password'}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={handleRegister}
                >
                    <Text style={styles.loginBtnText}>Register</Text>
                </TouchableOpacity>
                <Text>Already a User Please ? <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('login')}>Login</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        height: '100%'
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

export default Register