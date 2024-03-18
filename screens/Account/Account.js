import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { userData } from '../../data/userData';
import Layout from '../../components/Layout/Layout';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = ({ navigation }) => {
    return (
        <Layout>
            <View style={styles.container}>
                <Image
                    source={{ uri: userData.profilePic }}
                    style={styles.image} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={styles.name}>Hii
                        <Text style={{ color: 'green' }}> {userData.name}</Text>
                        🙏</Text>
                    <Text>Email : {userData.email}</Text>
                    <Text>Contact : {userData.contact}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Text style={styles.heading}>Account Setting</Text>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('profile', { id: userData._id })}>
                        <AntDesign
                            style={styles.btnText}
                            name='edit' />
                        <Text
                            style={styles.btnText}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('myorders')}>
                        <AntDesign
                            style={styles.btnText}
                            name='bars' />
                        <Text
                            style={styles.btnText}>
                            My Orders
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('notification')}>
                        <AntDesign
                            style={styles.btnText}
                            name='bells' />
                        <Text
                            style={styles.btnText}>
                            Notifications
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign
                            style={styles.btnText}
                            name='windows' />
                        <Text
                            style={styles.btnText}>
                            Admin Panal
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    image: {
        height: 100,
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        marginTop: 10,
        fontSize: 20
    },
    btnContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        marginVertical: 20,
        elevation: 5,
        borderRadius: 10,
        paddingBottom: 30
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5
    },
    btnText: {
        fontSize: 15,
        marginRight: 10,
    }
})
export default Account