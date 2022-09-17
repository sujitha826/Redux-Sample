import React, { useState } from "react";

function AddProductDialog(props) {

    const [productData, setProductData] = useState({});

    function onClickClose() {
        props.onClose();
    }

    function onAddProduct() {
        props.onAddProductCB(productData);
        props.onClose();
    }

    function onChangeData(e) {
        let productObj = Object.assign({}, productData);
        productObj[e.target.name] = e.target.value;
        setProductData(productObj);
    }

    return (
        <div className='dialog-base add-product-base'>
            <div className="window">
                <div className="header">
                    <div>
                        Add Product
                    </div>
                </div>
                <div className="body">
                    <div className="data-row">
                        <div className="label">
                            Brand
                        </div>
                        <div className="divider">:</div>
                        <div className="input-div">
                            <input value={productData.brand} name="brand" onChange={onChangeData} />
                        </div>
                    </div>
                    <div className="data-row">
                        <div className="label">
                            Modal
                        </div>
                        <div className="divider">:</div>
                        <div className="input-div">
                            <input value={productData.modal} name="modal" onChange={onChangeData} />
                        </div>
                    </div>
                    <div className="data-row">
                        <div className="label">
                            Price
                        </div>
                        <div className="divider">:</div>
                        <div className="input-div">
                            <input value={productData.price} name="price" onChange={onChangeData} />
                        </div>
                    </div>
                    <div className="data-row">
                        <div className="label">
                            Color
                        </div>
                        <div className="divider">:</div>
                        <div className="input-div">
                            <input value={productData.color} name="color" onChange={onChangeData} />
                        </div>
                    </div>
                    <div className="data-row">
                        <div className="label">
                            Qty
                        </div>
                        <div className="divider">:</div>
                        <div className="input-div">
                            <input value={productData.qty} name="qty" onChange={onChangeData} />
                        </div>
                    </div>
                    <div className="btn-row">
                        <button onClick={onClickClose}>
                            Cancel
                        </button>
                        <button onClick={onAddProduct}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductDialog;