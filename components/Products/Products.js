import { View } from 'react-native'
import React from 'react'
import ProductsCart from './ProductsCart'
import { ProductsData } from '../../data/ProductsData'
const Products = () => {
    return (
        <View>
            {ProductsData.map(prod => (
                <ProductsCart key={prod._id} prod={prod} />
            ))}
        </View>
    )
}

export default Products