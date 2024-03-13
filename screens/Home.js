import { StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Layout from '../components/Layout/Layout';
import Categories from '../components/category/Categories';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Header from '../components/Layout/Header';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Categories />
                <Banner />
                <Products />
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