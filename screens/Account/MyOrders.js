import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { orderData } from '../../data/OrderData'
import OrderItem from '../../components/Form/OrderItem'

const MyOrders = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>MyOrder</Text>
                <View>
                    <ScrollView>
                        {orderData.map(order => (
                            <OrderItem key={order._id} order={order} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    heading: {
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold'

    }
})
export default MyOrders