import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import Categories from '../components/category/Categories';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Header from '../components/Layout/Header';
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../redux/features/auth/userActions';


const Home = () => {
    const { user } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch])
    return (
        <Layout>
            <Header />
            <Categories />
            <Banner />
            <Products />
        </Layout>
    )
}
export default Home;