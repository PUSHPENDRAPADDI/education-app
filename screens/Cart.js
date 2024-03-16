import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CartData } from '../data/CartData'
import PriceTable from '../components/Cart/PriceTable'
import Layout from '../components/Layout/Layout'
import CartItem from '../components/Cart/CartItem'

const Cart = ({ navigation }) => {
    const [cartItem, setCartItem] = useState(CartData)
    return (
        <Layout>
            <Text style={styles.heading}>
                {
                    cartItem?.length > 0 ?
                        `You have ${cartItem?.length} Item left In Your Cart` :
                        "OOPS Your Cart Is EMPTY !"
                }
            </Text>
            {
                cartItem?.length > 0 && (
                    <>
                        <ScrollView>
                            {cartItem.map(item => (
                                <CartItem item={item} key={item._id} />
                            ))}
                        </ScrollView>
                        <View>
                            <PriceTable title={'Price'}
                                price={999} />
                            <PriceTable title={'Tax'}
                                price={1} />
                            <PriceTable title={'Shipping'}
                                price={1} />
                            <View style={styles.grandTotal}>
                                <PriceTable title={'Grand Total'}
                                    price={1001} />
                            </View>
                            <TouchableOpacity style={styles.btnCheckout}
                                onPress={() => navigation.navigate('checkout')}
                            >
                                <Text style={styles.btnCheckoutText}>
                                    CHECKOUT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </Layout>
    )
}
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        color: 'green',
        marginTop: 10
    },
    grandTotal: {
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: '#ffffff',
        padding: 5,
        margin: 5,
        marginHorizontal: 20
    },
    btnCheckout: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#000000',
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 20
    },
    btnCheckoutText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    }
})
export default Cart