import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../data/userData'
import InputBox from '../../components/Form/InputBox'

const Profile = ({ navigation }) => {
    const [email, setEmail] = useState(userData.email)
    const [profilePic, setProfilePic] = useState(userData.profilePic)
    const [password, setPassword] = useState(userData.password)
    const [name, setName] = useState(userData.name)
    const [address, setAddress] = useState(userData.address)
    const [city, setCity] = useState(userData.city)
    const [contact, setContact] = useState(userData.contact)

    // update Profile
    const handleUpdate = () => {
        if (!name || !email || !password || !address || !city || !contact) {
            return alert("Please provide all fields")
        }
        alert("Profile update successfully")
        navigation.navigate('account')
    }

    return (
        <Layout>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: profilePic }}
                            style={styles.image}
                        />
                        <Pressable
                            onPress={() => alert('Profile dailogbox')}
                        >
                            <Text style={styles.updateProfileHeading}>Update Your Profile Pic</Text>
                        </Pressable>
                    </View>
                    <InputBox
                        value={name}
                        setValue={setName}
                        placeholder={'Enter you name'}
                        autoComplete={'name'}
                    />
                    <InputBox
                        value={email}
                        setValue={setEmail}
                        placeholder={'Enter you email'}
                        autoComplete={'email'}
                    />
                    <InputBox
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter you password'}
                        autoComplete={'password'}
                        secureTextEntry={true}
                    />
                    <InputBox
                        value={address}
                        setValue={setAddress}
                        placeholder={'Enter you address'}
                        autoComplete={'address'}
                    />
                    <InputBox
                        value={city}
                        setValue={setCity}
                        placeholder={'Enter you city'}
                        autoComplete={'country'}
                    />
                    <InputBox
                        value={contact}
                        setValue={setContact}
                        placeholder={'Enter you contact'}
                        autoComplete={'tel'}
                    />
                    <TouchableOpacity style={styles.btnUpdate}
                        onPress={handleUpdate}
                    >
                        <Text style={styles.btnUpdateText}>Update Profile</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 100,
        width: "100%",
        resizeMode: "contain",
    },
    btnUpdate: {
        backgroundColor: "#000000",
        height: 40,
        borderRadius: 20,
        marginHorizontal: 30,
        justifyContent: "center",
        marginTop: 10,
    },
    btnUpdateText: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center",
    },
})
export default Profile