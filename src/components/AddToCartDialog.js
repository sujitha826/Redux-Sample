import React, { useState } from "react"

function AddToCartDialog(props) {

    const [enteredQty, setEnteredQty] = useState(1)

    function onClickClose() {
        props.onClose()
    }

    function onAddProduct() {
        let availQty = parseInt(props.selectedData.qty)
        let enterQty = parseInt(enteredQty)
        if (enterQty > availQty)
            return

        props.onAddToCartCB(props.selectedData, enterQty)
        props.onClose()
    }

    function onChangeQty(e) {
        setEnteredQty(e.target.value)
    }

    return (
        <div className='dialog-base add-cart-base'>
            <div className="window">
                <div className="header">
                    <div>
                        Add Product to Cart
                    </div>
                </div>
                <div className="body">
                    <div className="data-row">
                        Are you sure want to add <span className="highlight">{props.selectedData.brand}</span> <span className="highlight">{props.selectedData.modal}</span> to cart ?
                    </div>
                    <div className="data-row">
                        Avaliable Qty : <span>{props.selectedData.qty}</span>
                    </div>
                    <div className="data-row">
                        Qty : <input type="text" value={enteredQty} onChange={onChangeQty} />
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

export default AddToCartDialog;