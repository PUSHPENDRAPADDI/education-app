import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../data/ProductsData'
import Layout from '../components/Layout/Layout'

const ProductDetails = ({ route }) => {
  const [productDetails, setProductDetails] = useState({})
  const [qty, setQty] = useState(1)
  // Find product Details
  useEffect(() => {
    // Find product details
    const getProduct = ProductsData.find((p) => {
      return p?._id === params?._id
    })
    setProductDetails(getProduct)
  }, [params?._id])

  const handleAddQty = () => {
    if (qty === 10) return alert('You cant add more than 10 quantity')
    setQty((prev) => prev + 1)
  }
  const handleRemoveQty = () => {
    if (qty === 1) return alert('You cant remove')
    setQty((prev) => prev - 1)
  }

  const { params } = route;
  return (
    <Layout>
      <View>
        <Image
          source={{ uri: productDetails?.imageUrl }}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{productDetails?.name}</Text>
          <Text style={styles.title}>Price : {productDetails?.price} ₹</Text>
          <Text style={styles.desc}>Descritpion : {productDetails?.description}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={() => alert(`${qty} items added to cart`)}
              disabled={productDetails?.quantity <= 0}
            >
              <Text style={styles.btnCartText}> {
                productDetails?.quantity > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
                <Text style={styles.btnQtyText}>-</Text>
              </TouchableOpacity>
              <Text >{qty}</Text>
              <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                <Text style={styles.btnQtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Layout>

  )
}
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%'
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'left'
  },
  desc: {
    fontSize: 12,
    transform: 'capitalize',
    textAlign: 'justify',
    marginVertical: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10
  },
  btnCart: {
    width: 180,
    backgroundColor: '#000000',
    // marginVertical:10 
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  btnCartText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: 'center',
    marginHorizontal: 10
  },
  btnQtyText: {
    fontSize: 20,
  }
})
export default ProductDetails