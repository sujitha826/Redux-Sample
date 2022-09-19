import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { storeCartList, storeProductList } from '../redux/Actions';
import AddProductDialog from "./AddProductDialog";
import AddToCartDialog from './AddToCartDialog';

function Product(props) {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showCartDialog, setShowCartDialog] = useState(false);

    const [productList, setProductList] = useState([]);
    const [selectedData, setSelectedData] = useState({});

    useEffect(() => {
        setProductList(props.productList)
    }, [props.productList]);

    function onAddProductCB(pData) {
        let pList = Object.assign([], props.productList)           // extract the list array already in store
        pData.id = pData.brand + pData.modal
        let productExist = pList.findIndex((item) => { return item.id === pData.id })
        if (productExist === -1)
            pList.push(pData);
        else {
            pList[productExist].qty = parseInt(pList[productExist].qty) + parseInt(pData.qty);
            pList[productExist].price = pData.price;
        }
        props.storeProductList(pList);
        localStorage.setItem("products", JSON.stringify(pList));
    }

    function onClickAddCart(pData) {
        setSelectedData(pData);
        setShowCartDialog(true);
    }

    function onAddToCartCB(pItem, pQty) {
        let pList = Object.assign([], props.productList);
        let productExist = pList.findIndex((item) => { return item.id === pItem.id });
        if (productExist !== -1) {
            pList[productExist].qty = parseInt(pList[productExist].qty) - parseInt(pQty)
        }
        props.storeProductList(pList);
        let cList = Object.assign([], props.cartList);
        let cObject = {
            brand: pItem.brand,
            modal: pItem.modal,
            color: pItem.color,
            price: pItem.price,
            qty: pQty
        }
        cList.push(cObject);
        props.storeCartList(cList);
        console.log("Added Item to Cart and quantity:", pItem, pQty);
    }

    return (
        <div className='product-base'>
            <div className='product-header'>
                <button onClick={() => setShowAddDialog(true)}>Add Product</button>
            </div>
            <div className='product-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map((pItem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{pItem.brand}</td>
                                        <td>{pItem.modal}</td>
                                        <td>{pItem.price}</td>
                                        <td>{pItem.color}</td>
                                        <td>{pItem.qty}</td>
                                        <td>
                                            <button onClick={() => onClickAddCart(pItem)}>
                                                Add to Cart
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                showAddDialog ?
                    <AddProductDialog onClose={() => setShowAddDialog(false)}
                        onAddProductCB={onAddProductCB}
                    />
                    : null
            }
            {
                showCartDialog ?
                    <AddToCartDialog onClose={() => setShowCartDialog(false)}
                        selectedData={selectedData}
                        onAddToCartCB={onAddToCartCB}
                    />
                    : null
            }
        </div>
    )
}

// Map data needed from store to the container component Props
function mapStateToProps(store) {
    console.log("store", store);
    return {
        productList: store.products.list,
        cartList: store.myCart.cartList
    }
}

// Map functions that dispatch actions(action creators) to component Props so that the container component can use them inside from it's props.
const mapDispatchToProps = (dispatch) => {
    return {
        storeProductList: (data) => { dispatch(storeProductList(data)) },
        storeCartList: (data) => { dispatch(storeCartList(data)) },
    }
}

// The connect() function connects a React component to a Redux store. 
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store.

export default connect(mapStateToProps, mapDispatchToProps)(Product);

/* mapStateToProps is a function that you would use to provide the store data to your component, 
It is used for selecting the part of the data from the store that the connected component needs. 
It's frequently referred to as just mapState for short. It is called every time the store state changes.

mapDispatchToProps is something that you will use to provide the action creators as props to your component.
With mapDispatchToProps, every action creator wrapped into a dispatch call so they may be invoked directly, 
will be merged into the component’s props.

mapStateToProps: It connects redux state to props of react component.

mapDispatchToProps: It connects redux actions to props of react component.*/