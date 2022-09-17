import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function MyCart(props) {

    const [myCartList, setMyCartList] = useState([]);

    useEffect(() => {
        setMyCartList(props.cartList)
    }, [props.cartList]);

    return (
        <div className='product-table'>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Ordered Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCartList.map((pItem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{pItem.brand}</td>
                                    <td>{pItem.modal}</td>
                                    <td>{pItem.price}</td>
                                    <td>{pItem.color}</td>
                                    <td>{pItem.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(store) {
    console.log("store", store)
    return {
        cartList: store.myCart.cartList
    }
}

export default connect(mapStateToProps, null)(MyCart);