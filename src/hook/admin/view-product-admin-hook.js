import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';

const ViewProductAdminHook = () => {

//Dispatcher
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(8))
    }, [])


//onPress 
const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 8))
}
let items = []; let pagination = [];
const allProducts = useSelector((state) => state.allproducts.allProducts)

