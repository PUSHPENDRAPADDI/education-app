import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Layout from '../components/Layout/Layout';
import Categories from '../components/category/Categories';
import Banner from '../components/Banner/Banner';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Categories />
                <Banner />
                <View>
                    <Text>Home Pages</Text>
                </View>
            </Layout>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});